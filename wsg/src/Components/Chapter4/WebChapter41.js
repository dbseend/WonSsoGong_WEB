import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyle from "../Etc/GlobalStyle";
import { useNavigate  } from "react-router-dom";
import { extractInfo, downloadPDF, createAssistant } from "../../Api/BillAPI";
import Left from "../../Assets/Left.svg";
import Right from "../../Assets/Right.svg";
import {
  Hr,
  Div,
  Type,
  TypeArea,
  SubTitle,
  Container,
  Part1,
} from "../Chapter1/WebChapter12";
import BG from "../../Assets/BG.svg";
import { Background } from "../Main/WebOnBoarding";
import Chapter4Img from "../../Assets/Chapter4Char.png";
import Chapter4Bubble from "../../Assets/Chapter4Bubble.svg";
import searchIcon from "../../Assets/searchIcon.svg";

const WebChapter41 = () => {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState("");
  const [billUrls, setBillUrls] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [visibleItems, setVisibleItems] = useState([]);

  const types = ["재난", "안전", "도시", "교통", "주민", "법률"];
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const columns = [
    { key: "id", label: "번호" },
    { key: "author", label: "발의자" },
    { key: "title", label: "제목" },
  ];

  useEffect(() => {
    
    const fetchData = async () => {
      const urls = await extractInfo(keyword);
      console.log(urls);
      setBillUrls(urls);
      setSearchResults(urls);
    };
  
    fetchData();
  }, [keyword]);
  
  useEffect(() => {
    const response = getVisibleItems(searchResults);
    setVisibleItems(response);
  }, [searchResults, currentPage, itemsPerPage]);

  const getVisibleItems = (items) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  };


  const handleSearch = () => {
    console.log(searchValue);
    const results =  billUrls.filter(item => item.title.includes(searchValue));
    setSearchResults(results);
    console.log(results);
  };

  const handleClick = (index) => {
    const billNo = visibleItems[index].id;
    console.log(billNo);
    navigate('../2', { state: { billNo } });
  };

  const calculatePageInfo = () => {
    const totalPages = Math.ceil(billUrls.length / itemsPerPage);
    return totalPages;
  };

  const totalPages = calculatePageInfo();
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };  

  const handleKeywordChange = (type) => {
    setKeyword(type);
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };
  
  const Pagination = () => (
    <div>
      <img src={Left} onClick={() => handlePageClick(1)} alt="Left" />
      {Array.from({ length: totalPages }).map((_, index) => (
        <PaginationButton
          key={index + 1}
          selected={currentPage === index + 1} // Assuming currentPage is the current selected page
          onChange={handleSearchChange}
          onClick={() => handlePageClick(index + 1)}
        >
          {index + 1}
        </PaginationButton>
      ))}
      <img
        src={Right}
        onClick={() => handlePageClick(totalPages)}
        alt="Right"
      />
    </div>
  );

  return (
    <>
      <Div>
        <GlobalStyle />
        <Background src={BG} />
        <Title>기존 법안 분석</Title>
        <Hr />

        <Part1>
          <SubTitle> 법안 주제</SubTitle>

          <Container>
            <TypeArea>
              {types.map((type) => (
                <Type
                  key={type}
                  selected={keyword === type}
                  onClick={() => handleKeywordChange(type)}
                >
                  {type}
                </Type>
              ))}
            </TypeArea>
            <SearchArea>
              {/* <StyledSearchIcon src={searchIcon} /> */}
              <StyledSearch
                type="text"
                placeholder="법안 주제를 검색해주세요."
                value={searchValue}
                onChange={handleSearchChange}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch();
                  }
                }}
              />
            </SearchArea>
          </Container>
        </Part1>
        <Part2>
          <ImgGroup>
            <StyledChapter4Bubble src={Chapter4Bubble} />
            <StyledChapter4Char src={Chapter4Img} />
          </ImgGroup>
          <TableArea>
            <StyledTable>
              <thead>
                <tr>
                  {columns.map((column) => (
                    <th key={column.key}> {column.label} </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {visibleItems.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {columns.map((column, columnIndex) => (
                      <td
                        key={column.key}
                        onClick={() => handleClick(rowIndex, columnIndex)}
                      >
                        {row[column.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </StyledTable>

            <Pagination />
          </TableArea>
        </Part2>
      </Div>
    </>
  );
};

const PaginationButton = styled.button`
  background-color: transparent;
  margin: 0 4px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: ${(props) => (props.selected ? "#FFC634" : "#fff")};
`;

const Title = styled.div`
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  z-index: 2;
  margin-left: -75%;
`;
const SearchArea = styled.div`
  display: flex;
  margin-right: 1.5%;
  position: relative;
`;

const StyledSearchIcon = styled.img`
  /* position: absolute; */
  top: 65%;
  left: 20px;
  transform: translateY(-50%);
  z-index: 2;
  margin-top: 40px;
  margin-left: 50px;
`;
const StyledSearch = styled.input`
  margin-top: 20px;
  width: 880px;
  height: 44px;
  background-color: #f6f6f6;
  border: transparent;
  z-index: 1;
  color: #f6f6f6;
  font-size: 18px;
  line-height: 44px;
  border-radius: 2px;
  background: rgba(246, 246, 246, 0.30);
  margin-bottom: -10px;

  /* &:: placeholder {
    color: #f6f6f6;
  }
  background-color: #b0c8f6;
  padding-left: 70px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1); */
`;

const Part2 = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 15.5%;
  gap: 40px;
  margin-top: 2%;
`;
const ImgGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;
const StyledChapter4Bubble = styled.img`
  width: 285px;
  height: 191.83px;
`;
const StyledChapter4Char = styled.img`
  width: 289.16px;
  height: 297.35px;
  z-index: 2;
`;

const StyledTable = styled.table`
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  width: 880px;
  z-index: 2;
  text-align: left;
  border-collapse: collapse;
  font-family: "Pretendard Variable";

  th,
  td {
    width: 874px;
    padding: 10px;
    padding-left: 30px;
  }

  th {
    position: sticky;
    top: 0;
    font-weight: normal;
    background-color: #c9d8f6;
    text-align: left;
    color: #5379c2;
    z-index: 2;
  }

  td:first-child,
  td:nth-child(2) {
    width: 10%;
  }

  td:nth-child(3) {
    width: 50%;
  }

  tr {
    height: 50px;
    background-color: #acc3f1;
  }

  tr:not(:last-child) {
    box-shadow: inset 0 -2px #c9d8f6;
  }

  tr:hover {
    background-color: #c9d8f6;
    cursor: pointer;
  }
`;

const TableArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;
export default WebChapter41;

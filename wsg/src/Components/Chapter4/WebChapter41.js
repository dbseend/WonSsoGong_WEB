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
    };

    fetchData();
  }, [keyword]);

  const handleClick = (index) => {
    const pdfLink = visibleItems[index].LINK_URL;
    console.log(pdfLink);
    navigate('../2', { state: { pdfLink } });
  };

  const calculatePageInfo = () => {
    const totalPages = Math.ceil(billUrls.length / itemsPerPage);
    return totalPages;
  };

  const totalPages = calculatePageInfo();
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getVisibleItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return billUrls.slice(startIndex, endIndex);
  };

  const visibleItems = getVisibleItems();

  const Pagination = () => (
    <div>
      <img src={Left} onClick={() => handlePageClick(1)} alt="Left" />
      {Array.from({ length: totalPages }).map((_, index) => (
        <PaginationButton
          key={index + 1}
          selected={currentPage === index + 1} // Assuming currentPage is the current selected page
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

  const handleKeywordChange = (type) => {
    setKeyword(type);
  };

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
              <StyledSearchIcon src={searchIcon} />
              <StyledSearch
                type="text"
                placeholder="법안 주제를 검색해주세요."
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
  position: absolute;
  top: 65%;
  left: 20px;
  transform: translateY(-50%);
  z-index: 2;
`;
const StyledSearch = styled.input`
  margin-top: 20px;
  width: 810px;
  height: 44px;
  background-color: #f6f6f6;
  border: transparent;
  z-index: 1;
  color: #f6f6f6;
  font-size: 18px;
  line-height: 44px;

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

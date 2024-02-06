import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyle from "../Etc/GlobalStyle";
import { useNavigate } from "react-router-dom";
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
const WebChapter41 = () => {
  const [keyword, setKeyword] = useState("");
  const types = ["재난", "안전", "도시", "교통", "주민", "법률"];
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const columns = [
    { key: "id", label: "번호" },
    { key: "author", label: "발의자" },
    { key: "title", label: "제목" },
  ];

  /*  useEffect(() => {
    //서버에서 가져오기
  }, []); */

  // 더미데이터
  const boardInfo = [
    { id: 1238, author: "김철수", title: "00에 대한 법률 (XXX에 대하여)" },
    { id: 1239, author: "김철수", title: "00에 대한 법률 (XXX에 대하여)" },
    { id: 1240, author: "김예은", title: "00에 대한 법률 (XXX에 대하여)" },
  ];
  const calculatePageInfo = () => {
    const totalPages = Math.ceil(boardInfo.length / itemsPerPage);
    return totalPages;
  };
  const totalPages = calculatePageInfo();
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getVisibleItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return boardInfo.slice(startIndex, endIndex);
  };

  const visibleItems = getVisibleItems();

  const Pagination = () => (
    <div>
      <button Onclick={() => handlePageClick(1)}>첫 페이지</button>
      {Array.from({ length: totalPages }).map((_, index) => (
        <button key={index + 1} onClick={() => handlePageClick(index + 1)}>
          {index + 1}
        </button>
      ))}
      <button onClick={() => handlePageClick(totalPages)}>끝 페이지</button>
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
            <StyledSearch
              type="search"
              placeholder="법안 주제를 검색해주세요."
            />
          </Container>
        </Part1>
        <Part2>
          <ImgGroup>
            <StyledChapter4Bubble src={Chapter4Bubble} />
            <StyledChapter4Char src={Chapter4Img} />
          </ImgGroup>

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
                  {columns.map((column) => (
                    <td key={column.key}>{row[column.key]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </StyledTable>

          <Pagination />
        </Part2>
      </Div>
    </>
  );
};
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
const StyledSearch = styled.input`
  margin-top: 20px;
  width: 877px;
  height: 44px;
  background-color: #f6f6f6;
  opacity: 0.3;
  border: transparent;
  z-index: 2;
  &:: placeholder {
    color: #f6f6f6;
  }
`;

const Part2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const ImgGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
/
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
  z-index: 2;
`;
export default WebChapter41;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { SmallBackground } from "../Chapter1/WebChapter12";
import smallBg from "../../Assets/bg1.svg";
import GlobalStyle from "../Etc/GlobalStyle";
import Note from "../../Assets/WebChapter32 Note.png";
import { Button } from "../Chapter1/WebChapter12";
import {
  Div,
} from "../Chapter1/WebChapter11";

const WebChapter32 = () => {
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const moveToNext = () => {
    navigate("/chapter3/3");
  };
  return (
    <Div>
      <GlobalStyle />
      <SmallBackground src={smallBg} />
      <Part0>
        <ChapTitle>Chapter 3.</ChapTitle>
        <ChapTitle>
        <Title>투표 진행 : </Title> 
        법안리마인드
        </ChapTitle>
      </Part0>
      <Hr />
      <ImageContainer>
        <NoteImage src={Note} alt="Chapter 32 Note" />
      </ImageContainer>
      <Button onClick={moveToNext}>다음으로 넘어가기</Button>
    </Div>
  );
};

const ImageContainer = styled.div`
  display: relative;
  flex-direction: row;
  right: 200px;
  margin-top: 12.7%;
  margin-bottom: 3.1%;
  margin-right: -60%;
`;

const Part0 = styled.div`
  margin-left: -65%;
  margin-top: 0;
`;

const ChapTitle = styled.div`
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-top: 10px;
`;

const Title = styled.span`
  font-weight: 600;
`;

const Hr = styled.hr`
  width: 1131px;
  background: #fff;
  margin-top: 18px;
  position: relative;
`;

const NoteImage = styled.img`
  width: 366px;
  height: 332px; /* 이미지가 70%의 높이를 차지하도록 설정 */
`;

export default WebChapter32;
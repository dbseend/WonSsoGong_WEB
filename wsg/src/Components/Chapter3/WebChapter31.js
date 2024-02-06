import React from "react";
import styled from "styled-components";
import GlobalStyle from "../Etc/GlobalStyle";
import { useNavigate } from "react-router-dom";
import { Button } from "../Chapter1/WebChapter12";
import BG from "../../Assets/BG.svg";
import {
  BalloonContainer,
  ChapTitle,
  ChapterArea,
  Div,
  Title,
  BubbleText,
} from "../Chapter1/WebChapter11";
import { Background } from "../Main/WebOnBoarding";
import Group121 from "../../Assets/Group 121.svg";
import Group75 from "../../Assets/Group 75.png";

const WebChapter3 = () => {
  const navigate = useNavigate();
  const moveToNext = () => {
    navigate("/chapter3/2");
  };
  return (
    <Div>
      <GlobalStyle />
      <Background src={BG} />
      <ChapterArea>
        <ChapTitle>Chapter3.</ChapTitle>
        <Title>투표 진행</Title>
      </ChapterArea>

      <BalloonContainer>
        <BubbleText src={Group121} alt="Chapter 2 Group117" />
        <Chapter3Char src={Group75} alt="Chapter 2 Group68" />
      </BalloonContainer>

      <Button onClick={moveToNext}>다음으로 넘어가기</Button>
    </Div>
  );
};


const Chapter3Char = styled.img`
  margin-top: 50px;
  width: 470.18px;
  height: 452.6px;
`;
export default WebChapter3;
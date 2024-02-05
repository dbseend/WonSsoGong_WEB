import React from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { useNavigate } from "react-router-dom";
import Group117 from "../../Assets/Group 117.svg";
import Group68 from "../../Assets/Group 68.png";
import { Button } from "../Chapter1/WebChapter12";
import GlobalStyle from "../Etc/GlobalStyle";
import BG from "../../Assets/BG.svg";
import {
  Div,
  ChapterArea,
  ChapTitle,
  Title,
  ChapterChar,
  BalloonContainer,
  ChapTitle,
  ChapterArea,
  Div,
  Title,
  BubbleText,
} from "../Main/WebMain";
import { Background } from "../Main/WebOnBoarding";
import styled from "styled-components";

const WebChapter2 = () => {
  const navigate = useNavigate();
  const moveToNext = () => {
    navigate("/chapter22");
  };

  return (
    <Div>
      <GlobalStyle />
      <Background src={BG} />
      <ChapterArea>
        <ChapTitle>Chapter 2.</ChapTitle>
        <Title>토론 참여</Title>
      </ChapterArea>

      <BalloonContainer>
        <BubbleText src={Group117} alt="Chapter 2 Group117" />
        <Chapter2Char src={Group68} alt="Chapter 2 Group68" />
      </BalloonContainer>

      <Button onClick={moveToNext}>다음으로 넘어가기</Button>
    </Div>
  );
};

const Chapter2Char = styled.img`
  margin-top: 50px;
  width: 359px;
  height: 466.45px;
`;
export default WebChapter2;

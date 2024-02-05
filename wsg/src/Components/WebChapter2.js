import React from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { useNavigate } from "react-router-dom";
import Group117 from "../Assets/Group 117.svg";
import Group68 from "../Assets/Group 68.png";
import { Background } from "./WebOnBoarding";
import {
  Div,
  ChapterArea,
  ChapTitle,
  Title,
  ChapterChar,
  BalloonContainer,
  BubbleText,
} from "./WebMain";
import { Button } from "./WebChapter12";

const WebChapter2 = () => {
  const navigate = useNavigate();
  const moveToNext = () => {
    navigate("/chapter22");
  };

  return (
    <Div>
      <GlobalStyle />
      <Background />

      <ChapterArea>
        <ChapTitle>Chapter 2.</ChapTitle>
        <Title>토론 참여</Title>
      </ChapterArea>

      <BalloonContainer>
        <Group117Image src={Group117} alt="Chapter 2 Group117" />
        {/*         <BubbleText src={Group118} alt="Main Group118" />
        <ChapterChar src={Group63} alt="Main Group63" /> */}
      </BalloonContainer>
      <Group68Image src={Group68} alt="Chapter 2 Group68" />
      <Button onClick={moveToNext}>다음으로 넘어가기</Button>
    </Div>
  );
  /*  return (
    <>
      <GlobalStyle />
      <Background />
      <ChapTitle>Chapter 2.</ChapTitle>
      <Title>토론 참여</Title>
      <BalloonContainer>
        <BalloonContent>
          <Group117Image src={Group117} alt="Chapter 2 Group117" />
        </BalloonContent>
      </BalloonContainer>
      <SubText></SubText>
      <Group68Image src={Group68} alt="Chapter 2 Group68" />
      <Button onClick={moveToNext}>다음으로 넘어가기</Button>
    </>
  ); */
};

const Group68Image = styled.img`
  position: absolute;
  top: 210px;
  right: 300px;
  width: 300px;
  height: 400px;
`;

const Group117Image = styled.img`
  width: 550px;
  height: 500px; /* 이미지가 70%의 높이를 차지하도록 설정 */
`;

export { Button };

export default WebChapter2;

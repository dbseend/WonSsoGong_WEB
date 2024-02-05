import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Group117 from "../../Assets/Group 117.svg";
import Group68 from "../../Assets/Group 68.png";
import { Button } from "../Chapter1/WebChapter12";
import GlobalStyle from "../Etc/GlobalStyle";
import {
  BalloonContainer,
  ChapTitle,
  ChapterArea,
  Div,
  Title
} from "../Chapter1/WebChapter11";
import { Background } from "../Main/WebOnBoarding";

const WebChapter2 = () => {
  const navigate = useNavigate();
  const moveToNext = () => {
    navigate("/chapter2/2");
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

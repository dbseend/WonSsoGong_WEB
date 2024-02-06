import React from "react";
import styled from "styled-components";
import GlobalStyle from "../Etc/GlobalStyle";
import { useNavigate } from "react-router-dom";
import Group118 from "../../Assets/Group 118.svg";
import Group63 from "../../Assets/Group 63.png";
import { Button } from "../Chapter1/WebChapter12";
import BG from "../../Assets/BG.svg";
import { Background } from "../Main/WebOnBoarding";

const WebMain = () => {
  const navigate = useNavigate();
  const moveToNext = () => {
    navigate("/chapter1/2");
  };

  return (
    <Div>
      <GlobalStyle />
      <Background src={BG} />

      <ChapterArea>
        <ChapTitle>Chapter 1.</ChapTitle>
        <Title>법안 발의</Title>
      </ChapterArea>

      <BalloonContainer>
        <BubbleText src={Group118} alt="Main Group118" />
        <ChapterChar src={Group63} alt="Main Group63" />
      </BalloonContainer>

      <Button onClick={moveToNext}>다음으로 넘어가기</Button>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChapterArea = styled.div`
  margin-left: -60%;
`;
const ChapTitle = styled.div`
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 30px;
  font-style: normal;
  font-weight: 500; /* You can adjust the font weight here */
  line-height: normal;
  margin-bottom: 10px;
  margin-top: 0;
  text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const Title = styled.div`
  background: linear-gradient(
    90deg,
    #ffc634 0%,
    #ffd34a 10%,
    #ffea5f 30%,
    #fff275 50%,
    #d8f5dd 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  /* text-fill-color: transparent; */
  font-family: "Pretendard Variable";
  font-size: 64px;
  font-weight: 800;
  line-height: normal;
  text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

const ChapterChar = styled.img`
  margin-top: 50px;
`;

const BalloonContainer = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: -80px;
  margin-bottom: 30px;
`;

const BubbleText = styled.img``;

export { Div, ChapterArea, ChapTitle, Title, BalloonContainer, BubbleText };
export default WebMain;

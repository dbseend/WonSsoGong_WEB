import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Tutorial1Greet from "../../Assets/튜토리얼1인사.png";
import TutorialLogo from "../../Assets/TutorialLogo.png";
import GlobalStyle from "../Etc/GlobalStyle";
import smallBg from "../../Assets/bg1.svg";
import { SmallBackground } from "../Chapter1/WebChapter12";
import {
  Div,
} from "../Chapter1/WebChapter11";
import { WelcomeText, NameText, BoldText } from "../Tutorial/WebTutorial2";

const WebTutorial1 = () => {
  const navigate = useNavigate();
  const moveToNext = () => {
    navigate("/tutorial/2");
  };
  return (
    <Div>
      <GlobalStyle />
      <SmallBackground src={smallBg} />
      <Group36Image src={Tutorial1Greet} alt="Tutorial Group36" />
      <Group155Image src={TutorialLogo} alt="Tutorial Group135" />
      <Overlay>
        <NameText>???</NameText>
        <WelcomeText>안녕하세요! 
          <BoldText>방방국국</BoldText>
        에 오신 여러분을 환영합니다~!!</WelcomeText>
      </Overlay>
        <Button onClick={moveToNext}>다음</Button>
    </Div>
  );
};

const Overlay = styled.div`
  display: flex; /* 자식 요소들을 가로로 배치 */
  flex-direction: row;
  position: relative;
  width: 900px;
  height: 167px;
  border-radius: 2px;
  background: rgba(246, 246, 246, 0.30);
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.10);
  backdrop-filter: blur(25px);
  opacity: 0.9;
  margin-top: 29%; /* Adjust the top position according to your layout */
  margin-right: 0%; /* Center horizontally */
`;

const Button = styled.div`
  bottom: 150px;
  left: 1800px;
  transform: translate(220%, -130%);
  width: 151px;
  height: 29px;
  flex-shrink: 0;
  border-radius: 84px;
  background: linear-gradient(
    90deg,
    #ffc634 0%,
    #ffd34a 10%,
    #ffea5f 30%,
    #fff275 50%,
    #d8f5dd 100%
  );
  color: #5379c2;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
`;

const Group36Image = styled.img`
  transform: translate(0, -10px);
  top: 100px;
  right: 200px;
  width: 1050px;
  height: 50px;
`;

const Group155Image = styled.img`
  top: 210px;
  transform: translate(0, 40%);
  width: 722px;
  height: 215px;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.7);
`;

export default WebTutorial1;
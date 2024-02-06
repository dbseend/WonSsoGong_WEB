import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Tutorial6Greet from "../../Assets/튜토리얼6질문.png";
import Tutorial6Logo from "../../Assets/튜토리얼6로고.png";
import GlobalStyle from "../Etc/GlobalStyle";
import { SmallBackground } from "../Chapter1/WebChapter12";
import smallBg from "../../Assets/bg1.svg";
import { Div } from "../Chapter1/WebChapter11";
import { WelcomeText, NameText, BoldText } from "../Tutorial/WebTutorial2";

const WebTutorial6 = () => {
  const navigate = useNavigate();
  const moveToNext = () => {
    navigate("/tutorial/7");
  };
  return (
    <Div>
      <GlobalStyle />
      <SmallBackground src={smallBg} />
      <Tutorial6GreetImage src={Tutorial6Greet} alt="Tutorial Tutorial6Greet" />
      <Tutorial6LogoImage src={Tutorial6Logo} alt="Tutorial Tutorial6Logo" />
      <Overlay>
        <NameText>빵긋이</NameText>
        <WelcomeText>국회의원은 국민이 선출한 대표자로, 국민을 대표하여 국회에서 법을 <br />
            만들고 의사 결정을 하는 주체입니다.
        </WelcomeText>
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
  margin-top: 5%; /* Adjust the top position according to your layout */
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

const Tutorial6GreetImage = styled.img`
  transform: translate(0, -10px);
  top: 100px;
  right: 200px;
  width: 1050px;
  height: 50px;
`;

const Tutorial6LogoImage = styled.img`
  top: 500px;
  transform: translate(-10%, 13%);
  width: 840px;
  height: 400px;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.7);
`;

export default WebTutorial6;
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Tutorial2Logo from "../../Assets/Group 154.png";
import Tutorial2Greet from "../../Assets/튜토리얼1인사.png";
import GlobalStyle from "../Etc/GlobalStyle";
import { SmallBackground } from "../Chapter1/WebChapter12";
import smallBg from "../../Assets/bg1.svg";
import { Div } from "../Chapter1/WebChapter11";
import { Overlay, Button } from "./WebTutorial1";

const WebTutorial2 = () => {
  const navigate = useNavigate();
  const moveToNext = () => {
    navigate("/tutorial/3");
  };
  return (
    <Div>
      <GlobalStyle />
      <SmallBackground src={smallBg} />
      <Tutorial2GreetImage src={Tutorial2Greet} alt="Tutorial Tutorial2Logo" />
      <Tutorial2LogoImage src={Tutorial2Logo} alt="Tutorial Tutorial2Logo" />
      <Overlay>
        <NameText>빵긋이</NameText>
        <WelcomeText>
          저는 방방국국의 <BoldText>AI 도우미 빵긋이</BoldText>에요! 이제부터
          제가 다 도울게요!
          <br />
          다시 한 번 환영합니다~!!
        </WelcomeText>
      </Overlay>
      <Button onClick={moveToNext}>다음</Button>
    </Div>
  );
};

const BoldText = styled.span`
  font-weight: bold;
  margin-left: 1%;
`;

const NameText = styled.div`
  white-space: nowrap;
  color: var(--sec_text, #5379c2);
  font-family: "Pretendard Variable";
  font-size: 32px;
  font-weight: 600;
  margin-top: 2.4%;
  margin-left: 3%;
  margin-right: 2%;
`;

const WelcomeText = styled.div`
  white-space: nowrap;
  width: 494px;
  height: 29px;
  background-color: ;
  color: black; /* Set your desired text color */
  font-family: "Pretendard Variable"; /* Replace with your preferred font */
  font-size: 24px; /* Adjust the font size as needed */
  font-weight: 450; /* Adjust the font weight as needed */
  margin-top: 3%;
  z-index: 1;
`;

const Tutorial2GreetImage = styled.img`
  transform: translate(0, 50px);
  top: 100px;
  right: 200px;
  width: 1050px;
  height: 50px;
`;

const Tutorial2LogoImage = styled.img`
  margin-top: 11.5%;
  width: 593.95px;
  height: 390.02px;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.7);
`;

export { WelcomeText, NameText, BoldText };

export default WebTutorial2;

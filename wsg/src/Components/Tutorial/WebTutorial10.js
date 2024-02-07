import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Tutorial10Greet from "../../Assets/튜토리얼10완료.png";
import Tutorial10Logo from "../../Assets/튜토리얼10로고.png";
import GlobalStyle from "../Etc/GlobalStyle";
import { SmallBackground } from "../Chapter1/WebChapter12";
import smallBg from "../../Assets/bg1.svg";
import { Div } from "../Chapter1/WebChapter11";
import { WelcomeText, NameText, BoldText } from "../Tutorial/WebTutorial2";
import { Overlay } from "./WebTutorial1";
import { Button } from "../Chapter1/WebChapter12";
const WebTutorial10 = () => {
  const navigate = useNavigate();
  const moveToNext = () => {
    navigate("/");
  };
  return (
    <Div>
      <GlobalStyle />
      <SmallBackground src={smallBg} />
      <Tutorial10GreetImage
        src={Tutorial10Greet}
        alt="Tutorial Tutorial10Greet"
      />
      <Tutorial10LogoImage src={Tutorial10Logo} alt="Tutorial Tutorial10Logo" />
      <Overlay>
        <NameText>빵긋이</NameText>
        <WelcomeText>
          <BoldText>
            이제 여러분도 국회 의원이 되어 국가의 발전에 참여할 수 있어요!
          </BoldText>
          <br />
          국회의 중요성을 깨달아보고 방방국국을 통해
          <br />
          민주주의 참여의 즐거움을 느껴보면 어떨까요?
        </WelcomeText>
      </Overlay>
      <Br></Br>
      <Button onClick={moveToNext}>홈으로 돌아가기</Button>
    </Div>
  );
};

const Tutorial10GreetImage = styled.img`
  transform: translate(0, -10px);
  top: 100px;
  right: 200px;
  width: 1050px;
  height: 50px;
`;

const Tutorial10LogoImage = styled.img`
  margin-top: 3%;
  width: 923.7px;
  height: 400px;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.7);
`;

const Br = styled.div`
  height: 40px;
`;
export default WebTutorial10;

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
import Tut6Char from "../../Assets/마이크빵긋2.png";
import Photo from "../../Assets/국회의원.svg";
import { Button, Overlay } from "./WebTutorial1";

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
      <Tutorial6LogoImage src={Photo} alt="Tutorial Tutorial6Logo" />
      <Tutorial6Char src={Tut6Char} />
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


const Tutorial6GreetImage = styled.img`
top: 100px;
right: 200px;
width: 1050px;
height: 50px;
`;

const Tutorial6LogoImage = styled.img`
margin-top: 3%;
  width: 612px;
  height: 408px;
`;

const Tutorial6Char = styled.img`
width:337px;
height: 367px;
z-index: 1000;
margin-top: -30%;
margin-left: -65%;
margin-bottom: -2.5%;
`;
export default WebTutorial6;
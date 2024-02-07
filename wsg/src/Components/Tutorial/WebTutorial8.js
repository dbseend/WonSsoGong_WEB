import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Tutorial8Greet from "../../Assets/튜토리얼8질문.png";
import Tutorial8Logo from "../../Assets/튜토리얼8로고.png";
import GlobalStyle from "../Etc/GlobalStyle";
import { SmallBackground } from "../Chapter1/WebChapter12";
import smallBg from "../../Assets/bg1.svg";
import { Div } from "../Chapter1/WebChapter11";
import { WelcomeText, NameText, BoldText } from "../Tutorial/WebTutorial2";
import { Overlay, Button } from "./WebTutorial1";
const WebTutorial8 = () => {
  const navigate = useNavigate();
  const moveToNext = () => {
    navigate("/tutorial/9");
  };
  return (
    <Div>
      <GlobalStyle />
      <SmallBackground src={smallBg} />
      <Tutorial8GreetImage src={Tutorial8Greet} alt="Tutorial Tutorial8Greet" />
      <Tutorial8LogoImage src={Tutorial8Logo} alt="Tutorial Tutorial8Logo" />
      <Overlay>
        <NameText>빵긋이</NameText>
        <WelcomeText>국민들은 선거를 통해 <BoldText>자신을 대표할 국회의원을 선택함으로써 나라의 방향 <br />
            을 결정</BoldText>하게 돼요. 이러한 선거는 민주주의의 핵심이며, <BoldText>국민들이 직접 정치<br/>
            에 참여하는 수단 중 하나</BoldText>입니다.</WelcomeText>
      </Overlay>
        <Button onClick={moveToNext}>다음</Button>
    </Div>
  );
};
const Tutorial8GreetImage = styled.img`
  transform: translate(0, -10px);
  top: 100px;
  right: 200px;
  width: 1050px;
  height: 50px;
`;

const Tutorial8LogoImage = styled.img`
margin-top: 2%;
  width: 939.68px;
  height: 433.47px;
  margin-left:10%;
  margin-bottom: 2%;
`;

export default WebTutorial8;
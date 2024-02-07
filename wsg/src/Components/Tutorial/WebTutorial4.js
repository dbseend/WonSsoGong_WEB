import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Tutorial4Greet from "../../Assets/튜토리얼2인사.png";
import Tutorial4Logo from "../../Assets/튜토리얼4로고.png";
import GlobalStyle from "../Etc/GlobalStyle";
import { SmallBackground } from "../Chapter1/WebChapter12";
import smallBg from "../../Assets/bg1.svg";
import { Div } from "../Chapter1/WebChapter11";
import { WelcomeText, NameText, BoldText } from "../Tutorial/WebTutorial2";
import { Overlay, Button } from "./WebTutorial1";
import MikeChar from "../../Assets/마이크빵긋.png";
import Photo from "../../Assets/국회의사당.svg";

const WebTutorial4 = () => {
  const navigate = useNavigate();
  const moveToNext = () => {
    navigate("/tutorial/5");
  };
  return (
    <Div>
      <GlobalStyle />
      <SmallBackground src={smallBg} />
      <Tutorial4GreetImage src={Tutorial4Greet} alt="Tutorial Tutorial4Greet" />
      <Tutorial4LogoImage src={Photo} alt="Tutorial Tutorial4Logo" />
      <Tutorial4Char src={MikeChar} />
      <Overlay>
        <NameText>빵긋이</NameText>
        <WelcomeText>
          국회는{" "}
          <BoldText>
            국민을 대표하여 나라를 운영하고 법을 만들어 나가는
          </BoldText>{" "}
          <br />
          중요한 기관입니다. 국회는 <BoldText>국가의 정책 방향을 결정</BoldText>
          하고,<br />
          <BoldText>국민들의 다양한 의견을 수렴</BoldText>하여 나라를 향상시키기
          위해 노력하죠.
        </WelcomeText>
      </Overlay>
      <Button onClick={moveToNext}>다음</Button>
    </Div>
  );
};

const Tutorial4GreetImage = styled.img`
top: 100px;
right: 200px;
width: 1050px;
height: 50px;
`;

const Tutorial4LogoImage = styled.img`
  margin-top: 3%;
  width: 756px;
  height: 390px;
`;

const Tutorial4Char = styled.img`
  width: 264px;
  height: 341px;
  margin-top: -30%;
  margin-left: 65%;
  margin-bottom: 2.5%;
`;

export default WebTutorial4;

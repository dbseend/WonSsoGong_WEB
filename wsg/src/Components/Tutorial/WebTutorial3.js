import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Group36 from "../../Assets/튜토리얼1인사.png";
import Tutorial3 from "../../Assets/Tutorial3.png";
import GlobalStyle from "../Etc/GlobalStyle";
import { SmallBackground } from "../Chapter1/WebChapter12";
import smallBg from "../../Assets/bg1.svg";
import { Div } from "../Chapter1/WebChapter11";
import { Overlay, WelcomeText, NameText, BoldText } from "../Tutorial/WebTutorial2";
import { Button } from "../Tutorial/WebTutorial2";

const WebTutorial3 = () => {
  const navigate = useNavigate();
  const moveToNext = () => {
    navigate("/tutorial/4");
  };
  return (
    <Div>
      <GlobalStyle />
      <SmallBackground src={smallBg} />
      <Group36Image src={Group36} alt="Tutorial Group36" />
      <Group155Image src={Tutorial3} alt="Tutorial Group135" />
      <Overlay>
        <NameText>빵긋이</NameText>
        <WelcomeText>이 튜토리얼은 <BoldText>국회와 국회의원의 역할, 그리고 방방국국 서비스를</BoldText> <br />
        어떻게 이용할 수 있는지에 대해 설명해 드릴게요.</WelcomeText>
      </Overlay>
        <Button onClick={moveToNext}>다음</Button>
    </Div>
  );
};

const Group36Image = styled.img`
  transform: translate(0, -10px);
  top: 100px;
  right: 200px;
  width: 1050px;
  height: 50px;
`;

const Group155Image = styled.img`
  top: 500px;
  transform: translate(0, 13%);
  width: 550px;
  height: 360px;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.7);
`;

export default WebTutorial3;
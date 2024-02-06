import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Group154 from "../../Assets/Group 154.png";
import Group36 from "../../Assets/튜토리얼1인사.png";
import GlobalStyle from "../Etc/GlobalStyle";
import { SmallBackground } from "../Chapter1/WebChapter12";
import smallBg from "../../Assets/bg1.svg";
import { Div } from "../Chapter1/WebChapter11";

const WebTutorial2 = () => {
  const navigate = useNavigate();
  const moveToNext = () => {
    navigate("/tutorial/3");
  };
  return (
    <Div>
      <GlobalStyle />
      <SmallBackground src={smallBg} />
      <Group36Image src={Group36} alt="Tutorial Group36" />
      <Group155Image src={Group154} alt="Tutorial Group135" />
      <Overlay>
        <NameText>빵긋이</NameText>
        <WelcomeText>저는 방방국국의 <BoldText>AI 도우미 빵긋이</BoldText>에요! 이제부터 제가 다 도울게요!<br />
        다시 한 번 환영합니다~!!</WelcomeText>
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
  color: var(--sec_text, #5379C2);
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

const Overlay = styled.div`
  display: flex; /* 자식 요소들을 가로로 배치 */
  flex-direction: row;
  position: absolute;
  width: 900px;
  height: 167px;
  border-radius: 2px;
  background: rgba(246, 246, 246, 0.30);
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.10);
  backdrop-filter: blur(25px);
  opacity: 0.9;
  top: 70%; /* Adjust the top position according to your layout */
  left: 50%; /* Center horizontally */
  transform: translateX(-50%);
`;

const Button = styled.div`
  bottom: 150px;
  left: 1800px;
  transform: translate(220%, 950%);
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
  top: 500px;
  transform: translate(0, 20%);
  width: 550px;
  height: 360px;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.7);
`;

export { Overlay, WelcomeText, NameText, BoldText, Button};

export default WebTutorial2;

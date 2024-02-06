import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Group156 from "../../Assets/Group 156.png";
import Group167 from "../../Assets/Group 167.png";
import GlobalStyle from "../Etc/GlobalStyle";
import { SmallBackground } from "../Chapter1/WebChapter12";
import smallBg from "../../Assets/bg1.svg";
import { Div } from "../Chapter1/WebChapter11";
import { WelcomeText, NameText, BoldText } from "../Tutorial/WebTutorial2";

const WebTutorial4 = () => {
  const navigate = useNavigate();
  const moveToNext = () => {
    navigate("/tutorial/5");
  };
  return (
    <Div>
      <GlobalStyle />
      <SmallBackground src={smallBg} />
      <Group36Image src={Group156} alt="Tutorial Group36" />
      <Group155Image src={Group167} alt="Tutorial Group135" />
      <Overlay>
        <NameText>빵긋이</NameText>
        <WelcomeText>국회는 <BoldText>국민을 대표하여 나라를 운영하고 법을 만들어 나가는</BoldText> <br />
          중요한 기관입니다. 국회는 <BoldText>국가의 정책 방향을 결정</BoldText>하고, <br />
          <BoldText>국민들의 다양한 의견을 수렴</BoldText>하여 나라를 향상시키기 위해 노력하죠.</WelcomeText>
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
  margin-top: 4%; /* Adjust the top position according to your layout */
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
  top: 500px;
  transform: translate(5%, 13%);
  width: 840px;
  height: 400px;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.7);
`;

export default WebTutorial4;
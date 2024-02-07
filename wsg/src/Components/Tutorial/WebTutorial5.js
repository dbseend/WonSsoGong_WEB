import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Tutorial5Greet from "../../Assets/튜토리얼5인사.png";
import GroupA from "../../Assets/법률제정호버.svg";
import Group1 from "../../Assets/법률제정.svg";
import GroupB from "../../Assets/정부감독호버.svg";
import Group2 from "../../Assets/정부감독.svg";
import GroupC from "../../Assets/국가예산호버.svg";
import Group3 from "../../Assets/국가예산.svg";
import GroupD from "../../Assets/국제문제호버.svg";
import Group4 from "../../Assets/국제문제.svg";
import GlobalStyle from "../Etc/GlobalStyle";
import { SmallBackground } from "../Chapter1/WebChapter12";
import smallBg from "../../Assets/bg1.svg";
import { WelcomeText, NameText, BoldText } from "../Tutorial/WebTutorial2";

const WebTutorial5 = () => {
  const [rectHoverd1, setRectHovered1] = useState(false);
  const [rectHoverd2, setRectHovered2] = useState(false);
  const [rectHoverd3, setRectHovered3] = useState(false);
  const [rectHoverd4, setRectHovered4] = useState(false);
  const navigate = useNavigate();
  const moveToNext = () => {
    navigate("/tutorial/6");
  };
  return (
    <Div>
      <GlobalStyle />
      <SmallBackground src={smallBg} />
      <Tutorial5GreetImage src={Tutorial5Greet} alt="Tutorial Tutorial5Greet" />
      <RectArea>
        <RectImage
          src={rectHoverd1 ? Group1 : GroupA}
          onMouseEnter={() => setRectHovered1(true)}
          onMouseLeave={() => setRectHovered1(false)}
        />
        <RectImage
          src={rectHoverd2 ? Group2 : GroupB}
          onMouseEnter={() => setRectHovered2(true)}
          onMouseLeave={() => setRectHovered2(false)}
        />
        <RectImage
          src={rectHoverd3 ? Group3 : GroupC}
          onMouseEnter={() => setRectHovered3(true)}
          onMouseLeave={() => setRectHovered3(false)}
        />
        <RectImage
          src={rectHoverd4 ? Group4 : GroupD}
          onMouseEnter={() => setRectHovered4(true)}
          onMouseLeave={() => setRectHovered4(false)}
        />
      </RectArea>
      <Overlay>
        <NameText>빵긋이</NameText>
        <WelcomeText>타원에 마우스를 올려서 상세 정보를 확인해보세요!</WelcomeText>
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
  height: 82px;
  border-radius: 2px;
  background: rgba(246, 246, 246, 0.30);
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.10);
  backdrop-filter: blur(25px);
  opacity: 0.9;
  margin-top: 8%; /* Adjust the top position according to your layout */
  margin-right: 0%; /* Center horizontally */
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.div`
  bottom: 150px;
  left: 1800px;
  transform: translate(220%, -200%);
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

const Tutorial5GreetImage = styled.img`
    transform: translate(-15px, -10px);
    top: 100px;
    right: 200px;
    width: 1050px;
    height: 50px;
`;

const RectArea = styled.div`
  display: flex;
  flex-direction: row;
  gap: 26px;
  margin-top: 5%;
  z-index:1;
  margin-left: -3%;
`;

const RectImage = styled.img`
  border-radius: 106px;
  width: 206px;
  height: 453px;
  flex-direction: row;
  gap: 26px;
  display: flex;
`;

export { Overlay, Button, RectArea, RectImage };

export default WebTutorial5;

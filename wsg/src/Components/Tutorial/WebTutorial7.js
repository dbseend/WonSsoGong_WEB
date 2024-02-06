import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Tutorial7Greet from "../../Assets/튜토리얼7질문.png";
import GroupA from "../../Assets/법안발의튜토7호버.svg";
import Group1 from "../../Assets/법안발의튜토7.svg";
import GroupB from "../../Assets/토론과투표호버.svg";
import Group2 from "../../Assets/토론과투표.svg";
import GroupC from "../../Assets/정부감독튜토7호버.svg";
import Group3 from "../../Assets/정부감독튜토7.svg";
import GroupD from "../../Assets/국가예산검토7호버.svg";
import Group4 from "../../Assets/국가예산검토.svg";
import GlobalStyle from "../Etc/GlobalStyle";
import { SmallBackground } from "../Chapter1/WebChapter12";
import smallBg from "../../Assets/bg1.svg";
import { WelcomeText, NameText, BoldText } from "../Tutorial/WebTutorial2";

const WebTutorial7 = () => {
  const [rectHoverd1, setRectHovered1] = useState(false);
  const [rectHoverd2, setRectHovered2] = useState(false);
  const [rectHoverd3, setRectHovered3] = useState(false);
  const [rectHoverd4, setRectHovered4] = useState(false);
  const navigate = useNavigate();
  const moveToNext = () => {
    navigate("/tutorial/8");
  };
  return (
    <Div>
      <GlobalStyle />
      <SmallBackground src={smallBg} />
      <Tutorial7GreetImage src={Tutorial7Greet} alt="Tutorial Tutorial7Greet" />
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
  margin-top: 2%; /* Adjust the top position according to your layout */
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

const Tutorial7GreetImage = styled.img`
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
  margin-top: 88px;
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

export { Button };

export default WebTutorial7;

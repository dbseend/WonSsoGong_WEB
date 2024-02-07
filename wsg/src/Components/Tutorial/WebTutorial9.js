import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Tutorial9Greet from "../../Assets/튜토리얼9질문.png";
import GroupA from "../../Assets/법안발의튜토9호버.svg";
import Group1 from "../../Assets/법안발의튜토9.svg";
import GroupB from "../../Assets/토론참여튜토9호버.svg";
import Group2 from "../../Assets/토론참여튜토9.svg";
import GroupC from "../../Assets/투표진행튜토9호버.svg";
import Group3 from "../../Assets/투표진행튜토9.svg";
import GroupD from "../../Assets/법안분석튜토9호버.svg";
import Group4 from "../../Assets/법안분석튜토9.svg";
import GlobalStyle from "../Etc/GlobalStyle";
import { SmallBackground } from "../Chapter1/WebChapter12";
import smallBg from "../../Assets/bg1.svg";
import { Button } from "../Chapter1/WebChapter12";

const WebTutorial9 = () => {
  const [rectHoverd1, setRectHovered1] = useState(false);
  const [rectHoverd2, setRectHovered2] = useState(false);
  const [rectHoverd3, setRectHovered3] = useState(false);
  const [rectHoverd4, setRectHovered4] = useState(false);
  const navigate = useNavigate();
  const moveToNext = () => {
    navigate("/tutorial/10");
  };
  return (
    <Div>
      <GlobalStyle />
      <SmallBackground src={smallBg} />
      <Tutorial9GreetImage src={Tutorial9Greet} alt="Tutorial Tutorial9Greet" />
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
      <Button onClick={moveToNext}>다음</Button>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Tutorial9GreetImage = styled.img`
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
  margin-top: 40px;
  margin-bottom: 60px;
  z-index:1;
  margin-left: 0%;
`;

const RectImage = styled.img`
  border-radius: 106px;
  width: 206px;
  height: 570px;
  flex-direction: row;
  gap: 26px;
  display: flex;
`;

export default WebTutorial9;
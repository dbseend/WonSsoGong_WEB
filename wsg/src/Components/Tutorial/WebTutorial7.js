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
import { Button, Overlay, RectArea, RectImage } from "./WebTutorial5";

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
        <WelcomeText>
          타원에 마우스를 올려서 상세 정보를 확인해보세요!
        </WelcomeText>
      </Overlay>
      <Button onClick={moveToNext}>다음</Button>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Tutorial7GreetImage = styled.img`
  transform: translate(-15px, -10px);
  top: 100px;
  right: 200px;
  width: 1050px;
  height: 50px;
`;

export default WebTutorial7;

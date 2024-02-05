import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyle from "../Etc/GlobalStyle";
import FluentArrow from "../../Assets/FluentArrow.svg";
import WebFooter from "../Etc/WebFooter";
import { useNavigate } from "react-router-dom";
import GroupA from "../../Assets/법안발의.svg";
import GroupD from "../../Assets/법안분석.svg";
import GroupB from "../../Assets/토론참여.svg";
import GroupC from "../../Assets/투표진행.svg";
import Group1 from "../../Assets/법안발의호버.svg";
import Group4 from "../../Assets/법안분석호버.svg";
import Group2 from "../../Assets/토론참여호버.svg";
import Group3 from "../../Assets/투표진행호버.svg";
import BasicChar from "../../Assets/BasicChar.svg";
import HoverChar from "../../Assets/HoverChar.svg";
import HoverCharBubble from "../../Assets/HoverCharBubble.svg";
import flower from "../../Assets/flower.svg";
import diamond from "../../Assets/diamond.svg";
import circle from "../../Assets/circle.svg";
import BG from "../../Assets/BG.svg";

const WebOnBoarding = () => {
  const [rectHoverd1, setRectHovered1] = useState(false);
  const [rectHoverd2, setRectHovered2] = useState(false);
  const [rectHoverd3, setRectHovered3] = useState(false);
  const [rectHoverd4, setRectHovered4] = useState(false);
  const [charHovered, setCharHovered] = useState(false);
  const navigate = useNavigate();
  const moveToMain = () => {
    navigate("/chapter1/1");
  };
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Div>
      <GlobalStyle />
      <Background src={BG} />
      <Top>
        <div>
          <WhiteText>국회의 일부가 되어 국회 의원이 되어보는 경험,</WhiteText>{" "}
          <GradientText> 방방국국!</GradientText>
          <SubT>
            가상 국회 의원으로서 법안을 발의하고, 토론에 참여하며, 투표하는 등의
          </SubT>
          <SubT>다양한 활동을 체험할 수 있습니다.</SubT>
        </div>
        <Button onClick={moveToMain}>시작하기</Button>
      </Top>
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

      <CharImage
        src={charHovered ? HoverChar : BasicChar}
        onMouseEnter={() => setCharHovered(true)}
        onMouseLeave={() => setCharHovered(false)}
      />
      {charHovered && <BubbleImage src={HoverCharBubble} />}
      <Img2 src={flower} />
      <Img3 src={diamond} />
      <Img4 src={circle} />

      <CharImage
        src={charHovered ? HoverChar : BasicChar}
        onMouseEnter={() => setCharHovered(true)}
        onMouseLeave={() => setCharHovered(false)}
      />
      {charHovered && <BubbleImage src={HoverCharBubble} />}
      <Img2 src={flower} />
      <Img3 src={diamond} />
      <Img4 src={circle} />
      <Arrow src={FluentArrow} onClick={handleScrollToTop} />
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Background = styled.img`
  position: absolute;
  overflow: hidden;
  width: 1512px;
  min-height: 852px;
  height: 70%;
  z-index: -2;
  top: 0px;

  @media (min-width: 1512px) {
    width: 100%;
    height: auto;
  }
`;

const Top = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const SubT = styled.div`
  width: 887px;
  height: auto;
  height: auto;
  flex-shrink: 0;
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 25.2px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const RectArea = styled.div`
  display: flex;
  flex-direction: row;
  gap: 26px;
  margin-top: 88px;
  z-index: 1;
`;

const RectImage = styled.img`
  border-radius: 106px;
`;

const CharImage = styled.img`
  position: absolute;
  margin-top: 800px;
  margin-left: 1110px;
  z-index: 2;
`;

const Img2 = styled.img`
  position: absolute;
  margin-top: 20px;
  margin-left: -930px;
  width: 329px;
  height: 322px;
  z-index: -1;
`;

const Img3 = styled.img`
  position: absolute;
  margin-top: 650px;
  margin-left: -850px;
  width: 500.47px;
  height: 500.47px;
  z-index: -1;
`;

const Img4 = styled.img`
  position: absolute;
  margin-top: 150px;
  margin-left: 890px;
  width: 329px;
  height: 322px;
  z-index: -1;
`;

const Arrow = styled.img`
  margin-top: 750px;
  align-self: center;
  cursor: pointer;
  transform: translateY(-40px);
`;

const GradientText = styled.div`
  font-family: "Pretendard Variable";
  font-size: 40px;
  font-weight: 800;
  display: inline-block;
  background: linear-gradient(
    90deg,
    #ffc634 0%,
    #ffd34a 10%,
    #ffea5f 30%,
    #fff275 50%,
    #d8f5dd 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 40px;
`;
const Button = styled.div`
  z-index: 2;
  width: 240px;
  height: 40px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  justify-content: center;
  align-items: center;
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
  font-size: 25.2px;
  font-weight: 800;
  line-height: 40px;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 10px;
  cursor: pointer;
`;
const WhiteText = styled.span`
  color: white;
  font-family: "Pretendard Variable";
  font-size: 40px;
  font-weight: 800;
`;

const BubbleImage = styled.img`
  position: absolute;
  margin-top: 800px;
  margin-left: 450px;
  z-index: 1;
`;

export { Background };
export default WebOnBoarding;

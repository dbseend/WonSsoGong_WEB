import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Ellipse5 from "../../Assets/Ellipse 5.svg";
import Group36 from "../../Assets/튜토리얼9질문.png";
import GroupA from "../../Assets/법안발의튜토9호버.svg";
import GroupD from "../../Assets/법안분석튜토9호버.svg";
import GroupB from "../../Assets/토론참여튜토9호버.svg";
import GroupC from "../../Assets/투표진행튜토9호버.svg";
import Group1 from "../../Assets/법안발의 .png";
import Group2 from "../../Assets/법안분석 .png";
import Group3 from "../../Assets/토론참여 .png";
import Group4 from "../../Assets/투표진행 .png";
import GlobalStyle from "../Etc/GlobalStyle";
import { SmallBackground } from "../Chapter1/WebChapter12";
import smallBg from "../../Assets/bg1.svg";
import { WelcomeText, NameText, BoldText } from "../Tutorial/WebTutorial2";

const WebTutorial9 = () => {
  const [rectHoverd1, setRectHovered1] = useState(false);
  const [rectHoverd2, setRectHovered2] = useState(false);
  const [rectHoverd3, setRectHovered3] = useState(false);
  const [rectHoverd4, setRectHovered4] = useState(false);
  const [charHovered, setCharHovered] = useState(false);
  const navigate = useNavigate();
  const moveToNext = () => {
    navigate("/tutorial/10");
  };
  return (
    <Div>
      <GlobalStyle />
      <SmallBackground src={smallBg} />
      <Group36Image src={Group36} alt="Tutorial Group36" />
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

const ChapTitle = styled.div`
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 30px;
  font-style: normal;
  font-weight: 500; /* You can adjust the font weight here */
  line-height: normal;
  margin-bottom: 10px;
  margin-top: 0;
  text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
`;

const Title = styled.div`
  background: linear-gradient(
    90deg,
    #ffc634 0%,
    #ffd34a 3%,
    #ffea5f 8%,
    #fff275 17%,
    #d8f5dd 24%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-fill-color: transparent;
  font-family: "Pretendard Variable";
  font-size: 64px;
  font-weight: 800;
  line-height: normal;
  margin-bottom: 10px;
`;

const SubText = styled.div`
  width: 900px;
  color: var(--white-text, #f6f6f6);
  font-family: "Pretendard Variable";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 800px;
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

const Group36Image = styled.img`
    transform: translate(-15px, -10px);
    top: 100px;
    right: 200px;
    width: 1050px;
    height: 50px;
`;

const Group155Image = styled.img`
  top: 300px;
  transform: translate(390px, 52px);
  width: 670px;
  height: 310px;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.7);
`;

const Group135Image = styled.img`
    top: 250px;
    transform: translate(270px, 36px);
    width: 900px;
    height: 170px;
    opacity: 0.9;
`;

const BalloonContainer = styled.div`
  position: absolute;
  top: 120px;
  right: 600px;
  width: 550px;
  height: 500px;
  z-index: 1;
  display: flex;
  flex-direction: column; /* 이미지와 텍스트를 세로로 배치 */
  justify-content: center;
  align-items: center;
`;

const BalloonContent = styled.div`
  position: relative; /* 상대 위치 설정 */
  width: 550px;
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Group117Image = styled.img`
  width: 550px;
  height: 500px; /* 이미지가 70%의 높이를 차지하도록 설정 */
`;

const Ellipse5Image = styled.img` //작은 원
  position: absolute;
  top: 5%;
  left: 0%;
  width: 100%;
  height: 76%; 
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


const CharImage = styled.img`
  position: absolute;
  margin-top: 800px;
  margin-left: 1110px;
  z-index: 0;
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

const BubbleImage = styled.img`
  position: absolute;
  margin-top: 800px;
  margin-left: 450px;
  z-index: 1;
`;

export { Button };

export default WebTutorial9;

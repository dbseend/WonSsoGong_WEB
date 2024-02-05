import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import TutorialLogo from "../../Assets/TutorialLogo.png";
import Group36 from "../../Assets/Group 36.png";
import Group135 from "../../Assets/Group 135.png";
import Ellipse5 from "../../Assets/Ellipse 5.svg";
import Ellipse7 from "../../Assets/Ellipse 7.svg";

const WebTutorial = () => {
  const navigate = useNavigate();
  const moveToNext = () => {
    navigate("/tutorial2");
  };
  return (
    <>
      <GlobalStyle />
      <Ellipse5Image src={Ellipse5} alt="Tutorial Ellipse5" />
      <Group36Image src={Group36} alt="Tutorial Group36" />
      <Group155Image src={TutorialLogo} alt="Tutorial Group155" />
      <Group135Image src={Group135} alt="Tutorial Group135" />
      <Button onClick={moveToNext}>다음</Button>
    </>
  );
};

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
  position: absolute;
  bottom: 150px;
  left: 1500px;
  transform: translateX(-520px);
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
  transform: translate(180px, -10px);
  top: 100px;
  right: 200px;
  width: 1050px;
  height: 50px;
`;

const Group155Image = styled.img`
  top: 210px;
  transform: translate(350px, 60px);
  width: 722px;
  height: 215px;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.7);
`;

const Group135Image = styled.img`
  top: 250px;
  transform: translate(270px, 130px);
  width: 900px;
  height: 167px;
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

export { Button };

export default WebTutorial;

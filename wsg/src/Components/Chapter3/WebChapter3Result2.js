import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import GlobalStyle from "../Etc/GlobalStyle";
import { useRecoilState } from "recoil";
import { useNavigate, useLocation } from "react-router-dom";
import Ellipse7 from "../../Assets/Ellipse 7.svg";
import Group151 from "../../Assets/Group 151.png";
import Group150 from "../../Assets/Group 150.png";

const WebChapter3Result2 = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { votes1, votes2, votes3 } = location.state;
  const moveToNext = () => {
    navigate("/");
  };

  return (
    <>
      <Container />
      <Ellipse7Image src={Ellipse7} alt="Chapter 22 Ellipse7" />
      <Button onClick={moveToNext}>홈으로 돌아가기</Button>
      <Part0>
        <ChapTitle>Chapter 3.</ChapTitle>
        <ChapTitle>
        <Title>투표 진행 : </Title> 
            결과 발표
        </ChapTitle>
      </Part0>
      <Hr />
      <Chapter3ResultImageContainer>
        <Group151Image src={Group151} alt="Chapter 34 Group151" />
        <GradientOverlay />
      </Chapter3ResultImageContainer>
      <AgreeText>
        반대
      </AgreeText>
      <Votes1Text>{votes1}표</Votes1Text>
      <Votes2Text>{votes2}표</Votes2Text>
      <Votes3Text>{votes3}표</Votes3Text>
      <Group150ResultImage src={Group150} alt="Chapter 34 Group150" />
    </>
  );
};

const Container = createGlobalStyle`
body {
  margin: 0;
  margin-top : 90px;
  padding: 0;
  background: var(--secondary-bg, #77A1F5);
  /* z-index: auto; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
`;

const Part0 = styled.div`
  margin-left: 80px;
  margin-top: 0;
`;

const ChapTitle = styled.div`
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-top: 10px;
`;

const Title = styled.span`
  font-weight: 600;
`;

const Hr = styled.hr`
  width: 1131px;
  background: #fff;
  margin-top: 18px;
  position: relative;
`;

const Button = styled.div`
  position: absolute;
  bottom: 150px;
  right: 250px;
  width: 333px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 84px;
  background: linear-gradient(
    90deg,
    #FFC634 0%,
    #FFD34A 10%,
    #FFEA5F 30%,
    #FFF275 50%,
    #D8F5DD 100%
  );
  color: #5379C2;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
`;

const Chapter3ResultImageContainer = styled.div`
  position: relative;
  width: 1000px;
  height: 263px;
  overflow: hidden;
  left: 90px;
  top: 50px;
  z-index: 1;
`;

const Group151Image = styled.img`
  width: 948px;
  height: 263px;
  right: 250px;
  top: 250px;
  z-index: 2;
`;

const AgreeText = styled.div`
  width: 56px;
  height: 38px;
  background-color: transparent;
  color: #FFCBCD;
  font-family: "Pretendard Variable";
  font-size: 32px; /* 폰트 크기 수정 */
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 700px;
  top: 300px;
  z-index: 3; /* 기존 이미지보다 위에 오도록 설정 */
  -webkit-text-stroke: 1px #000; /* 텍스트의 테두리 추가 */
  text-stroke: 1px #000;
`;

const Votes1Text = styled.div`
  width: 132px;
  height: 76px;
  background-color: transparent;
  color: white;
  font-family: "Pretendard Variable";
  font-size: 64px; /* 폰트 크기 수정 */
  font-weight: 350;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 970px;
  top: 350px;
  z-index: 3; /* 기존 이미지보다 위에 오도록 설정 */
`;

const Votes2Text = styled.div`
  width: 164px;
  height: 76px;
  background-color: transparent;
  color: white;
  font-family: "Pretendard Variable SemiBold";
  font-size: 64px;
  font-weight: 800;
  letter-spacing: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 645px;
  top: 350px;
  -webkit-text-stroke: 1px #000;
  z-index: 3;
`;

const Votes3Text = styled.div`
  width: 132px;
  height: 76px;
  background-color: transparent;
  color: white;
  font-family: "Pretendard Variable";
  font-size: 64px; /* 폰트 크기 수정 */
  font-weight: 350;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 345px;
  top: 350px;
  z-index: 3; /* 기존 이미지보다 위에 오도록 설정 */
`;

const GradientOverlay = styled.div` //그라데이션 할 부분
  position: absolute;
  top: 3px;
  left: 318.2px;
  width: 312.7px;
  height: 250px;
  background: linear-gradient(
    90deg,
    #FFC634 0%,
    #FFD34A 10%,
    #FFEA5F 30%,
    #FFF275 50%,
    #D8F5DD 100%
  );
  z-index: 1;
`;

const Group150ResultImage = styled.img`
  width: 47%;
  height: 43%; /* 이미지가 70%의 높이를 차지하도록 설정 */
  position: absolute;
  right: 30%;
  top: 53%;
  z-index: 5;
`;

const Ellipse7Image = styled.img` //큰 원
  position: absolute;
  top: 5%; /* 중심을 화면 상단에 위치하도록 설정 */
  left: 0%; /* 원하는 가로 위치로 조절 */
  width: 100%;
  height: 83%; /* 이미지가 70%의 높이를 차지하도록 설정 */
`;

export default WebChapter3Result2;
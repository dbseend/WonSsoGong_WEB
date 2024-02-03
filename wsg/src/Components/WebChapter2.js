import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import Chapter2Hovor from "../Assets/Chapter2Hovor.svg";
import Balloon from "../Assets/Balloon.svg";

const WebMain = () => {
  const navigate = useNavigate();
  const moveToNext = () => {
    navigate("/chapter22");
  };
  return (
    <>
      <GlobalStyle />
      <StyledCircleWrapper>
        <StyledSecondCircle/> {/* 그 위에 원 */}
        <StyledCircle /> {/* 맨 아래 원 */}
      </StyledCircleWrapper>
      <ChapTitle>Chapter 2.</ChapTitle>
      <Title>토론 참여</Title>
      <BalloonContainer>
        <BalloonContent>
          <BalloonImage src={Balloon} alt="Chapter 2 Balloon" />
          <BalloonText>
            이제 발의된 법안에 대한 토론을 진행해볼까요?<br /><br />
            AI 가상 의원과 자유롭게 의견을 나누어보세요.<br /> 
            토론이 끝난 후엔 투표로 의견을 표현해요.
          </BalloonText>
        </BalloonContent>
      </BalloonContainer>
      <SubText>
      </SubText>
      <HoverImage src={Chapter2Hovor} alt="Chapter 2 Hover" />
      <Button onClick={moveToNext}>다음으로 넘어가기</Button>
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
`;

const Title = styled.div`
background: linear-gradient(
    90deg,
    #FFC634 0%,
    #FFD34A 10%,
    #FFEA5F 30%,
    #FFF275 50%,
    #D8F5DD 100%
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
  margin-bottom: 60%;
`;

const Button = styled.div`
  position: absolute;
  bottom: 26%;
  left: 50%;
  transform: translateX(-50%);
  width: 1050px;
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

const StyledCircle = styled.div`
  position: relative;
  width: 1500px;
  height: 500px;
  flex-shrink: 0;
  border-radius: 50%;
  opacity: 0.4;
  background: linear-gradient(180deg, rgba(246, 246, 246, 0.00) 54%, #F6F6F6 100%);
`;

const StyledCircleWrapper = styled.div`
  position: absolute;
  top: 50%; /* 중앙 정렬을 위해 top 50% 설정 */
  left: 50%; /* 중앙 정렬을 위해 left 50% 설정 */
  transform: translate(-50%, -50%); /* 중앙 정렬을 위한 transform 설정 */
  z-index: -1; /* 다른 요소보다 뒤에 위치하도록 설정 */
`;

const StyledSecondCircle = styled.div`
  position: absolute;
  top: calc(50% - 50px); /* 중앙에서 100px 위로 이동 */
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1500px;
  height: 470px;
  flex-shrink: 0;
  border-radius: 50%;
  opacity: 0.4;
  background: linear-gradient(180deg, rgba(246, 246, 246, 0.00) 54%, #F6F6F6 100%);
  z-index: -2; /* 다른 요소보다 뒤에 위치하도록 설정 */
`;

const HoverImage = styled.img`
  position: absolute;
  top: 120px;
  right: 230px;
  width: 300px;
  height: 500px;
`;

const BalloonContainer = styled.div`
  position: absolute;
  top: 80px;
  right: 37%;
  width: 35%;
  height: 65%;
  z-index: 1;
  display: flex;
  flex-direction: column; /* 이미지와 텍스트를 세로로 배치 */
  justify-content: center;
  align-items: center;
`;

const BalloonContent = styled.div`
  position: relative; /* 상대 위치 설정 */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BalloonImage = styled.img`
  width: 100%;
  height: 70%; /* 이미지가 70%의 높이를 차지하도록 설정 */
`;

const BalloonText = styled.span`
  position: absolute; /* 절대 위치 설정 */
  bottom: 45%; /* 이미지 아래에 간격 추가 */
  right : 7%;
  color: black;
  font-size: 20px;
  font-family: "Pretendard Variable";
  width : 80%;
  white-space: pre-line;
`;


export default WebMain;
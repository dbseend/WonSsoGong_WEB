import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
// import Arrow from '../Assets/Arrow.svg';
import FluentArrow from "../Assets/FluentArrow.svg";
import Ellipse from "../Assets/Ellipse 6.svg";
const WebOnBoarding = () => {
  return (
    <>
      <GlobalStyle />
      <Top>
        <div>
          <Title>가상 국회 체험 서비스를 제공합니다.</Title>
          <SubT>
            사용자가 가상의 국회 의원이 되어 법안을 발의하고, 토론에 참여하며,
            투표를 진행하는 등의 활동을 체험할 수 있는 서비스. 국회의 의사결정
            과정의 이해와 정치적 관심을 높임
          </SubT>
        </div>
        <Button>시작하기</Button>
      </Top>
      <RectArea>
        <Rect>법안 발의</Rect>
        <Rect>토론 참여</Rect>
        <Rect>투표 진행</Rect>
        <Rect>법안 분석</Rect>
      </RectArea>
      <img src={Ellipse} />
      <img src={FluentArrow} />
    </>
  );
};

const Top = styled.div`
  margin-top: 168px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const Title = styled.div`
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 40px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

const SubT = styled.div`
  width: 887px;
  height: 60px;
  flex-shrink: 0;
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 25.2px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 32px;
`;

const Button = styled.div`
  width: 240px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 84px;
  background: #ffa438;
  color: #5379c2;
  font-family: "Pretendard Variable";
  font-size: 25.2px;
  font-style: normal;
  font-weight: 800;
  line-height: 40px;
  text-align: center;
  margin-top: 65px;
`;

const RectArea = styled.div`
  display: flex;
  flex-direction: row;
  gap: 26px;
  margin-top: 88px;
`;
const Rect = styled.div`
  width: 206px;
  height: 612px;
  flex-shrink: 0;
  border-radius: 103px;
  background: linear-gradient(
    180deg,
    rgba(246, 246, 246, 0.9) 6%,
    rgba(246, 246, 246, 0) 100%
  );
  box-shadow: 0px 3.6px 3.6px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  text-align: center;
  color: #0e0e0e;
  font-family: "Pretendard Variable";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 150px;
`;

const ButtonEllipse = styled.img`
  width: 64px;
  height: 64px;
  flex-shrink: 0;
  fill: linear-gradient(180deg, #f6f6f6 -18%, rgba(246, 246, 246, 0) 120.5%);
  opacity: 0.8;
  filter: drop-shadow(0px 3.2px 3.2px rgba(0, 0, 0, 0.25));
`;

// const FluentArrow = styled.img`
//   z-index: 2;
// `;
export default WebOnBoarding;

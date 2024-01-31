import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

const WebMain = () => {
  const navigate = useNavigate();
  const moveToNext = () => {
    navigate("/chapter12");
  };
  return (
    <>
      <GlobalStyle />
      <ChapTitle>Chapter 1.</ChapTitle>
      <Title>법안 발의</Title>
      <SubText>
        사용자가 가상 국회의원이 되어 AI의 도움을 받아...~~~~~ 법안을 발의하는
        시뮬레이션입니다. 칩을 이용해 ~~~를 하고 AI의 도움을 받아 ~~~~할 수
        있습니다.
      </SubText>
      <Button onClick={moveToNext}>다음으로 넘어가기</Button>
    </>
  );
};

const ChapTitle = styled.div`
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 30px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-bottom: 8px;
  margin-top: 80px;
`;

const Title = styled.div`
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 64px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin-bottom: 80px;
`;

const SubText = styled.div`
  width: 900px;
  color: var(--white-text, #f6f6f6);
  font-family: "Pretendard Variable";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 215px;
`;

const Button = styled.div`
  width: 1016px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 84px;
  background: #ffa438;
  color: #5379c2;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
`;

export default WebMain;

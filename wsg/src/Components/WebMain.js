import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import Group118 from "../Assets/Group 118.svg";
import Group63 from "../Assets/Group 63.png";
import BG from "../Assets/BG.svg";
import { Background } from "./WebOnBoarding";
const WebMain = () => {
  const navigate = useNavigate();
  const moveToNext = () => {
    navigate("/chapter12");
  };
  return (
    <Div>
      <GlobalStyle />
      <Background src={BG} />

      <ChapterArea>
        <ChapTitle>Chapter 1.</ChapTitle>
        <Title>법안 발의</Title>
      </ChapterArea>

      <BalloonContainer>
        <Group118Image src={Group118} alt="Main Group118" />
        <Group63Image src={Group63} alt="Main Group63" />
      </BalloonContainer>

      <Button onClick={moveToNext}>다음으로 넘어가기</Button>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChapterArea = styled.div`
margin-left: -80%;
margin-top: 30px;
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
  z-index: 1;
`;

const Title = styled.div`
  background: linear-gradient(
    90deg,
    #ffc634 0%,
    #ffd34a 10%,
    #ffea5f 30%,
    #fff275 50%,
    #d8f5dd 100%
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


const Group63Image = styled.img``;

const BalloonContainer = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: row;
  gap: 200px;
`;

const Group118Image = styled.img`
`;
const Button = styled.div`
  width: 1050px;
  height: 40px;
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
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
`;

export {Button};
export default WebMain;

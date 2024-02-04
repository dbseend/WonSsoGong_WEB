import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import Group118 from "../Assets/Group 118.svg";
import Group63 from "../Assets/Group 63.png";
import Ellipse5 from "../Assets/Ellipse 5.svg";
import Ellipse7 from "../Assets/Ellipse 7.svg";
import Balloon1 from "../Assets/Balloon1.png";
import Test from "../Assets/test.png";

const WebMain = () => {
  const navigate = useNavigate();
  const moveToNext = () => {
    navigate("/chapter12");
  };
  return (
    <>
      <GlobalStyle />
      <Ellipse5Image src={Ellipse5} alt="Main Ellipse5" />
      <Ellipse7Image src={Ellipse7} alt="Main Ellipse7" />
      <ChapTitle>Chapter 1.</ChapTitle>
      <Title>법안 발의</Title>

      <BalloonContainer>
        <BalloonContent>
          <Group118Image src={Group118} alt="Main Group118" />
        </BalloonContent>
      </BalloonContainer>
      <SubText>
      </SubText>
      <Group63Image src={Group63} alt="Main Group63" />
      <img src ={Test} />
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
text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.20);
`;

const Title = styled.div`
background: linear-gradient(
    90deg,
    #FFC634 0%,
    #FFD34A 3%,
    #FFEA5F 8%,
    #FFF275 17%,
    #D8F5DD 24%
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
  bottom: 18%;
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

const Group63Image = styled.img` //호버
  position: absolute;
  top: 24%;
  right: 22%;
  width: 22%;
  height: 50%;
`;

const BalloonContainer = styled.div`
  position: absolute;
  top: 15%;
  right: 42%;
  width: 38%;
  height: 60%;
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

const Group118Image = styled.img`
  // width: 90%;
  // height: 70%
  `;

const BalloonText = styled.span`
  position: absolute; /* 절대 위치 설정 */
  bottom: 39%; /* 이미지 아래에 간격 추가 */
  right : 0;
  color: black;
  font-size: 20px;
  font-family: "Pretendard Variable";
  width : 70%;
  white-space: pre-line;
  strong {
    font-weight: bold;
  }
`;

const Ellipse5Image = styled.img` //작은 원
  position: absolute;
  top: 5%; /* 중심을 화면 상단에 위치하도록 설정 */
  left: 0%; /* 원하는 가로 위치로 조절 */
  width: 100%;
  height: 76%; /* 이미지가 70%의 높이를 차지하도록 설정 */
`;

const Ellipse7Image = styled.img` //큰 원
  position: absolute;
  top: 5%; /* 중심을 화면 상단에 위치하도록 설정 */
  left: 0%; /* 원하는 가로 위치로 조절 */
  width: 100%;
  height: 83%; /* 이미지가 70%의 높이를 차지하도록 설정 */
`;

export { Button };

export default WebMain;
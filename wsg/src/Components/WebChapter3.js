import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import Group55 from "../Assets/Group 55.svg";
import Group75 from "../Assets/Group 75.svg";
import Ellipse5 from "../Assets/Ellipse 5.svg";
import Ellipse7 from "../Assets/Ellipse 7.svg";

const WebChapter3 = () => {
  const navigate = useNavigate();
  const moveToNext = () => {
    navigate("/chapter33");
  };
  return (
    <>
      <GlobalStyle />
      <Ellipse5Image src={Ellipse5} alt="Chapter 3 Ellipse5" />
      <Ellipse7Image src={Ellipse7} alt="Chapter 3 Ellipse7" />
      <ChapTitle>Chapter 3.</ChapTitle>
      <Title>투표 진행</Title>
      <BalloonContainer>
        <BalloonContent>
          <Group55Image src={Group55} alt="Chapter 3 Group55" />
          <BalloonText>
            토론과 투표 결과는 <strong>실제로<br />
            가상 국회에 영향을 미친답니다.</strong><br /><br />
            결과를 확인한 뒤<br /> 
            다음 법안에 꼭 참여해보세요!
          </BalloonText>
        </BalloonContent>
      </BalloonContainer>
      <SubText>
      </SubText>
      <Group75Image src={Group75} alt="Chapter 3 Group75" />
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

const Group75Image = styled.img`
  position: absolute;
  top: 30%;
  right: 11%;
  width: 25%;
  height: 45%;
`;

const BalloonContainer = styled.div`
  position: absolute;
  top: 18%;
  right: 37%;
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

const Group55Image = styled.img`
  width: 100%;
  height: 70%; /* 이미지가 70%의 높이를 차지하도록 설정 */
`;

const BalloonText = styled.span`
  position: absolute; /* 절대 위치 설정 */
  bottom: 42%; /* 이미지 아래에 간격 추가 */
  right : 5%;
  color: black;
  font-size: 20px;
  font-family: "Pretendard Variable";
  width : 65%;
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

export default WebChapter3;
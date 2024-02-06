import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Group151 from "../../Assets/Group 151.png";
import { SmallBackground } from "../Chapter1/WebChapter12";
import smallBg from "../../Assets/bg1.svg";
import Group150 from "../../Assets/Group 150.png";
import GlobalStyle from "../Etc/GlobalStyle";
import {
  Div,
} from "../Chapter1/WebChapter11";

const WebChapter3Result2 = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { votes1, votes2, votes3 } = location.state;
  const moveToNext = () => {
    navigate("/");
  };

  return (
    <Div>
      <GlobalStyle />
      <SmallBackground src={smallBg} />
      <Part0>
        <ChapTitle>Chapter 3.</ChapTitle>
        <ChapTitle>
        <Title>투표 진행 : </Title> 
        결과 발표
        </ChapTitle>
      </Part0>
      <Hr />
      <Chapter3ResultImageContainer>
        <Chapter3ResultImage src={Group151} alt="Chapter 34 Chapter3Result" />
        <GradientOverlay />
      </Chapter3ResultImageContainer>
      <TextContainer>
        <AgreeText>
          반대
        </AgreeText>
      </TextContainer>
      <VoteContainer>
        <Votes1Text>{votes1}표</Votes1Text>
        <Votes2Text>{votes2}표</Votes2Text>
        <Votes3Text>{votes3}표</Votes3Text>
      </VoteContainer>
      <ImageContainer>
        <Group149ResultImage src={Group150} alt="Chapter 34 Group149" />
      </ImageContainer>
      <ButtonContainer>
        <Button onClick={moveToNext}>홈으로 돌아가기</Button>
      </ButtonContainer>
    </Div>
  );
};

const VoteContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 8%;
  margin-right: 28%;
  margin-bottom: -8%;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: -21%;
  margin-bottom: 5.5%;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 10%;
  margin-top: 4%;
`;

const Part0 = styled.div`
  margin-left: -65%;
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
  margin-top: 1%;
  margin-bottom: 10%;
  position: relative;
`;

const Button = styled.div`
  width: 333px;
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

const Chapter3ResultImageContainer = styled.div`
  position: relative;
  width: 1000px;
  height: 263px;
  overflow: hidden;
  left: 30px;
  top: -30px;
  z-index: 1;
`;

const Chapter3ResultImage = styled.img`
  width: 948px;
  height: 263px;
  right: 250px;
  top: 250px;
  z-index: 2;
`;

const AgreeText = styled.div`
  white-space: nowrap;
  width: 56px;
  height: 38px;
  background-color: transparent;
  color: #FFCBCD;
  font-family: "Pretendard Variable";
  font-size: 36px; /* 폰트 크기 수정 */
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 700px;
  top: 300px;
  z-index: 3; /* 기존 이미지보다 위에 오도록 설정 */
  -webkit-text-stroke: 1px #000; /* 텍스트의 테두리 추가 */
  text-stroke: 1px #000;
`;

const Votes1Text = styled.div`
  white-space: nowrap;
  width: 164px;
  height: 76px;
  background-color: transparent;
  color: white;
  font-family: "Pretendard Variable SemiBold";
  font-size: 64px;
  font-weight: 350;
  letter-spacing: 1px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  right: 950px;
  top: 350px;
  z-index: 3;
  margin-top: -30%;
  margin-right: 42.7%;
`;

const Votes2Text = styled.div`
  white-space: nowrap;
  margin-top: -30%;
  margin-right: 45%;
  width: 132px;
  height: 76px;
  background-color: transparent;
  color: white;
  font-family: "Pretendard Variable";
  font-size: 64px; /* 폰트 크기 수정 */
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 660px;
  top: 350px;
  z-index: 3; /* 기존 이미지보다 위에 오도록 설정 */
  -webkit-text-stroke: 1px #000;
`;

const Votes3Text = styled.div`
  white-space: nowrap;
  margin-top: -30%;
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

const Group149ResultImage = styled.img`
  width: 700px;
  height: 350px; /* 이미지가 70%의 높이를 차지하도록 설정 */
  margin-right: 20%;
  top: 500px;
  z-index: 5;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: -9.1%;
  margin-right: -55%;
`;

export default WebChapter3Result2;
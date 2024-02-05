import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Background } from "../Main/WebOnBoarding";
import BG from "../../Assets/BG.svg";
import Group121 from "../../Assets/Group 121.svg";
import Group75 from "../../Assets/Group 75.png";
import GlobalStyle from "../Etc/GlobalStyle";

const WebChapter3 = () => {
  const navigate = useNavigate();
  const moveToNext = () => {
    navigate("/chapter32");
  };

  return (
    <>
      <GlobalStyle />
      <Background src = {BG} />
      <ChapTitle>Chapter 3.</ChapTitle>
      <Title>투표 진행</Title>
      <BalloonContainer>
        <BalloonContent>
          <Group121Image src={Group121} alt="Chapter 3 Group121" />
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
  margin-bottom: 800px;
`;

const Button = styled.div`
  position: absolute;
  bottom: 150px;
  left: 715px;
  transform: translateX(-520px);
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
  top: 215px;
  right: 200px;
  width: 400px;
  height: 400px;
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

const Group121Image = styled.img`
  width: 500px;
  height: 500px;
`;

export { Button };

export default WebChapter3;
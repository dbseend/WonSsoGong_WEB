import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Ellipse7 from "../../Assets/Ellipse 7.svg";
import Note from "../../Assets/WebChapter32 Note.png";
import GlobalStyle from "../Etc/GlobalStyle";
import smallBg from "../../Assets/bg1.svg";

const WebChapter32 = () => {
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const moveToNext = () => {
    navigate("/chapter3/3");
  };
  return (
    <Div>
      <GlobalStyle />
      <SmallBackground src={smallBg} />
      <Part0>
        <ChapTitle>Chapter 3.</ChapTitle>
        <ChapTitle>
        <Title>투표 진행 : </Title> 
        법안리마인드
        </ChapTitle>
      </Part0>
      <Hr />
      <NoteImage src={Note} alt="Chapter 32 Note" />
      <ButtonContainer>
        <Button onClick={moveToNext}>다음으로 넘어가기</Button>
      </ButtonContainer>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Part0 = styled.div`
  margin-left: -63%;
  margin-top: -3%;
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
  margin-top: 20px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: fixed;
  margin-top: 35%;
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

const NoteImage = styled.img`
  width: 366px;
  height: 332px; /* 이미지가 70%의 높이를 차지하도록 설정 */
  right: 700px;
  top: 270px;
`;

const Ellipse7Image = styled.img` //큰 원
  position: absolute;
  top: 5%; /* 중심을 화면 상단에 위치하도록 설정 */
  left: 0%; /* 원하는 가로 위치로 조절 */
  width: 100%;
  height: 83%; /* 이미지가 70%의 높이를 차지하도록 설정 */
`;

const SmallBackground = styled.img`
  position: absolute;
  overflow: hidden;
  width: 1512px;
  min-height: 852px;
  height: 70%;
  z-index: -2;
  top: 0px;

  @media (min-width: 1512px) {
    width: 100%;
    height: auto;
  }
`;

export default WebChapter32;
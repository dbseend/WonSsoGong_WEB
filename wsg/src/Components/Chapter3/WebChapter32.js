import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { SmallBackground } from "../Chapter1/WebChapter12";
import smallBg from "../../Assets/bg1.svg";
import Note from "../../Assets/WebChapter32 Note.png";
import GlobalStyle from "../Etc/GlobalStyle";

const WebChapter32 = () => {
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const moveToNext = () => {
    navigate("/chapter3/3");
  };
  return (
    <>
      <GlobalStyle />
      <SmallBackground src={smallBg} />
      <Button onClick={moveToNext}>다음으로 넘어가기</Button>
      <Part0>
        <ChapTitle>Chapter 3.</ChapTitle>
        <ChapTitle>
        <Title>투표 진행 : </Title> 
        법안리마인드
        </ChapTitle>
      </Part0>
      <Hr />
      <NoteImage src={Note} alt="Chapter 32 Note" />
    </>
  );
};


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
  bottom: 120px;
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

const NoteImage = styled.img`
  width: 366px;
  height: 332px; /* 이미지가 70%의 높이를 차지하도록 설정 */
  position: absolute;
  right: 220px;
  top: 270px;
`;

export default WebChapter32;
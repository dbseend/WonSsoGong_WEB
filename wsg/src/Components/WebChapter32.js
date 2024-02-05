import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import Ellipse7 from "../Assets/Ellipse 7.svg";
import Group89 from "../Assets/Group 89.svg";
import Group90 from "../Assets/Group 90.svg";
import Group82 from "../Assets/Group 82.svg";
import Group81 from "../Assets/Group 81.svg";
import Group84 from "../Assets/Group 84.svg";
import Group63 from "../Assets/Group 63.svg";
import Group125 from "../Assets/Group 125.png";
import Group126 from "../Assets/Group 126.png";
import ChatAi from "../Assets/ChatAi.png";
import ChatPerson from "../Assets/ChatPerson.png";
import Note from "../Assets/WebChapter32 Note.png";
import Rectangle24 from "../Assets/Rectangle 24.svg";
import Rectangle10 from "../Assets/Rectangle 10.svg";

const WebChapter32 = () => {
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const moveToNext = () => {
    navigate("/chapter33");
  };
  return (
    <>
      <Container />
      <Ellipse7Image src={Ellipse7} alt="Chapter 22 Ellipse7" />
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

const Container = createGlobalStyle`
body {
  margin: 0;
  margin-top : 90px;
  padding: 0;
  background: var(--secondary-bg, #77A1F5);
  /* z-index: auto; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
`;

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

const Ellipse7Image = styled.img` //큰 원
  position: absolute;
  top: 40px; /* 중심을 화면 상단에 위치하도록 설정 */
  left: 0; /* 원하는 가로 위치로 조절 */
  width: 1450px;
  height: 680px; /* 이미지가 70%의 높이를 차지하도록 설정 */
`;

export default WebChapter32;
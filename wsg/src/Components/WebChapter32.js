import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Ellipse7 from "../../Assets/Ellipse 7.svg";
import Note from "../../Assets/WebChapter32 Note.png";
import GlobalStyle from "../Etc/GlobalStyle";

const WebChapter32 = () => {
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const moveToNext = () => {
    navigate("/chapter33");
  };
  return (
    <Div>
      <GlobalStyle />
      <Ellipse7Image src={Ellipse7} alt="Chapter 22 Ellipse7" />
      <Part0>
        <ChapTitle>Chapter 3.</ChapTitle>
        <ChapTitle>
        <Title>투표 진행 : </Title> 
        법안리마인드
        </ChapTitle>
      </Part0>
      <Hr />
      <NoteImage src={Note} alt="Chapter 32 Note" />
      <Button onClick={moveToNext}>다음으로 넘어가기</Button>
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
  margin-top: 20px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

const Button = styled.div`
  margin-top: 28%;
  left: 50%;
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

export default WebChapter32;
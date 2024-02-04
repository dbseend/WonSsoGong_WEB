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
import Rectangle24 from "../Assets/Rectangle 24.svg";
import Rectangle10 from "../Assets/Rectangle 10.svg";

const WebChapter22 = () => {
  const [content, setContent] = useState("");

  return (
    <>
      <Container />
      <Ellipse7Image src={Ellipse7} alt="Chapter 22 Ellipse7" />
      <Button>토론 끝내기</Button>
      <Part0>
        <ChapTitle>Chapter 2.</ChapTitle>
        <Title>토론 참여</Title>
      </Part0>
      <Hr />
      <Group125Image src={Group125} alt="Chapter 22 Group125" />
      <Group126Image src={Group126} alt="Chapter 22 Group126" />
      <ChatAiImage src={ChatAi} alt="Chapter 22 ChatAi" />
      <ChatPersonImage src={ChatPerson} alt="Chapter 22 ChatPerson" />
      <CurveHr />
      
      <ContentInput
        type="text"
        placeholder="발언을 입력하세요."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <SendButton>전송</SendButton>
    </>
  );
};
const Container = createGlobalStyle`
body {
  margin: 0;
  margin-top : 6.5%;
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
  margin-left: 6%;
  margin-top: 0;
`;

const ChapTitle = styled.div`
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const Title = styled.div`
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Hr = styled.hr`
  width: 1131px;
  background: #fff;
  margin-top: 18px;
  position: relative;
`;

const Button = styled.div`
   position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translateX(-50%);
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

const CurveHr = styled.hr`
  width: 1131px;
  height: 0.1px;
  background: #fff;
  margin-top: 18px;
  position: absolute;
  bottom: 32%;
`;
//빵긋이
const Group125Image = styled.img`
width: 197.47px;
height: 290px;
top: 346px;
left: 324px;
position: fixed;


`;
//유저
const Group126Image = styled.img`
position: absolute;
width: 197.47px;
height: 290px;
top: 330px;
left: 1069px;
`;

const ContentInput = styled.input`
  width: 56%;
  margin-left: 6%;
  position: absolute;
  bottom: 26%;
  padding: 10px;
  font-size: 16px;
  border: none;
  background: rgba(246, 246, 246, 0.30); 
  box-shadow: 0px 10px 100px rgba(0, 0, 0, 0.1); /* 그림자 추가 */ 
`;

const ChatAiImage = styled.img`
  width: 13%;
  height: 10%; /* 이미지가 70%의 높이를 차지하도록 설정 */
  position: absolute;
  right: 57%;
  top: 31%;
`;

const ChatPersonImage = styled.img`
  width: 13%;
  height: 10%; /* 이미지가 70%의 높이를 차지하도록 설정 */
  position: absolute;
  right: 31%;
  top: 31%;
`;

const Ellipse7Image = styled.img` //큰 원
  position: absolute;
  top: 5%; /* 중심을 화면 상단에 위치하도록 설정 */
  left: 0%; /* 원하는 가로 위치로 조절 */
  width: 100%;
  height: 83%; /* 이미지가 70%의 높이를 차지하도록 설정 */
`;

const SendButton = styled.button`
  width: 8%;
  margin-left: 65%;
  position: absolute;
  bottom: 26.1%;
  padding: 10px 40px;
  background-color: rgba(255, 198, 52, 0.8);
  color: white;
  border: none;
  border-radius: 84px 84px 84px 84px; /* 상단 양쪽 모서리만 84픽셀 radius */
  cursor: pointer;
  flex-shrink: 0;
  font-weight: bold; /* 볼드체로 설정 */
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1); /* 그림자 추가 */
`;

export default WebChapter22;
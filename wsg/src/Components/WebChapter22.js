import React, { useState } from "react";
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
import Rectangle24 from "../Assets/Rectangle 24.svg";
import Rectangle10 from "../Assets/Rectangle 10.svg";

const WebChapter22 = () => {

  const [content, setContent] = useState("");
  const [messages, setMessages] = useState([]);

  const addMessage = () => {
    if (content.trim() !== "") {
      setMessages((prevMessages) => [...prevMessages, content]);
      setContent("");
    }
  };

  return (
    <>
      <GlobalStyle />
      <Ellipse7Image src={Ellipse7} alt="Chapter 22 Ellipse7" />
      <Button>토론 끝내기</Button>
      <Part0>
        <ChapTitle>Chapter 2.</ChapTitle>
        <Title>토론 참여</Title>
      </Part0>
      <Hr />
      <Group125Image src={Group125} alt="Chapter 22 Group125" />
      <Group126Image src={Group126} alt="Chapter 22 Group126" />
      
      
      <CurveHr />
      {messages.map((message, index) => (
        <Balloon key={index}>{message}</Balloon>
      ))}
      <ContentInput
        type="text"
        placeholder="발언을 입력하세요."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <SendButton onClick={addMessage}>전송</SendButton>
    </>
  );
};

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

const CurveHr = styled.hr`
  width: 1131px;
  height: 0.1px;
  background: #fff;
  margin-top: 18px;
  position: absolute;
  bottom: 30%;
`;

const Group125Image = styled.img`
  width: 13%;
  height: 35%; /* 이미지가 70%의 높이를 차지하도록 설정 */
  position: absolute;
  right: 72%;
  top: 33%;
`;

const Group126Image = styled.img`
  width: 13%;
  height: 35%; /* 이미지가 70%의 높이를 차지하도록 설정 */
  position: absolute;
  right: 15%;
  top: 33%;
`;

const ContentInput = styled.input`
  width: 56%;
  margin-left: 6%;
  position: absolute;
  bottom: 24%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid var(--white-text, #F6F6F6);
  background: rgba(246, 246, 246, 0.30);  
`;

const MessageBubble = styled.div`
  background: rgba(246, 246, 246, 0.30);
  width: 505.156px;
  height: 44px;
  padding: 10px;
  margin-bottom: 10px;
`;

const Ellipse7Image = styled.img` //큰 원
  position: absolute;
  top: 5%; /* 중심을 화면 상단에 위치하도록 설정 */
  left: 0%; /* 원하는 가로 위치로 조절 */
  width: 100%;
  height: 83%; /* 이미지가 70%의 높이를 차지하도록 설정 */
`;

const SendButton = styled.button`
  margin-left: 65%;
  position: absolute;
  bottom: 24.1%;
  padding: 10px 40px;
  background-color: rgba(255, 198, 52, 0.7);
  color: white;
  border: 2px solid #FFC634; /* 테두리 색상 및 두께 설정 */
  border-radius: 84px 84px 84px 84px; /* 상단 양쪽 모서리만 84픽셀 radius */
  cursor: pointer;
  flex-shrink: 0;
`;

const Balloon = styled.div`
display: inline-block;
  position: absolute;
  top: 35%;
  left: 60%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 198, 52, 0.7);
  height: 60px;
  width: 200px;
  margin: 0 auto 10px;
  border: 2px solid #FFC634;

  &:after {
    content: '';
    position: absolute;
    border-bottom: 20px solid transparent;
    border-left: 20px solid rgba(255, 198, 52, 0.7);  /* 꼬리의 색상 설정 */
    right: -20px;  /* 말풍선에서 오른쪽으로 얼마나 떨어질지 설정 */
    top: 9px;  /* 말풍선의 중앙에서 시작되도록 설정 */
    transform: translateY(-50%);
  }
`;

export default WebChapter22;
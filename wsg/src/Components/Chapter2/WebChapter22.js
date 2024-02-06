import React, { useState } from "react";
import styled from "styled-components";
import {
  SmallBackground,
  Div,
  Button,
  Hr,
  ChapTitle,
  Part0,
  Title,
  Type,
  TypeArea,
  SubTitle,
  Container,
  Part1,
} from "../Chapter1/WebChapter12";
import smallBg from "../../Assets/bg1.svg";
import GlobalStyle from "../Etc/GlobalStyle";
import AiChar from "../../Assets/AiChar.png";
import HumanChar from "../../Assets/HumanChar.png";


const WebChapter22 = () => {
  const [messages, setMessages] = useState([]);
  const [aiMessages, setAiMessages] = useState([
    "나는",
    "기계",
    "인간",
    "멍청하다",
  ]);
  const [userInput, setUserInput] = useState("");
  // const [content, setContent] = useState("");

  return (
    <>
      <Div>
        <GlobalStyle />
        <SmallBackground src={smallBg} />

        <Part0>
          <ChapTitle>Chapter 2.</ChapTitle>
          <Title>토론 참여</Title>
        </Part0>
        <Hr />
        <CenteredContainer>
          {messages.map((message, index) => (
            <SpeechBubble key={index}>{message}</SpeechBubble>
          ))}{" "}
        </CenteredContainer>

        <SendArea>
          <ContentInput
            type="text"
            placeholder="발언을 입력하세요."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <SendButton>전송</SendButton>
        </SendArea>
        <Button>토론 끝내기</Button>
      </Div>
    </>
  );
};

const ContentInput = styled.input`
  width: 800px;
  margin-left: 88px;
  padding: 10px;
  font-size: 16px;
  border: none;
  background: rgba(246, 246, 246, 0.3);
  box-shadow: 0px 10px 100px rgba(0, 0, 0, 0.1); /* 그림자 추가 */
`;

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SpeechBubble = styled.div`
  margin-left: 450px;
  margin-bottom: 50px;
  position: relative;
  background: #ffc634;
  border-radius: 0.4em;
  width: auto;
  height: auto;
  padding: 20px;

  &:after {
    content: "";
    position: absolute;
    right: 5px;
    top: 50%;
    /* width: 0; */
    /* height: 0; */
    border: 16px solid transparent;
    border-left-color: #ffc634;
    border-right: 0;
    border-top: 0;
    margin-top: -15px;
    margin-right: -16px;
  }
`;

const SendArea = styled.div`
  display: flex;
  flex-direction: row;
`;
const SendButton = styled.button`
  width: 113px;
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

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  SmallBackground,
  Div,
  Button,
  Hr,
  ChapTitle,
  Part0,
  Title,
} from "../Chapter1/WebChapter12";
import smallBg from "../../Assets/bg1.svg";
import GlobalStyle from "../Etc/GlobalStyle";
import AiChar from "../../Assets/Group 167.png";
import HumanChar from "../../Assets/Group 168.png";
import { debate } from "../../Api/BillAPI";

const WebChapter22 = () => {
  const [messages, setMessages] = useState([]);
  const [aiMessages, setAiMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [aiAnswer, setAiAnswer] = useState("");
  const [converSation, setConversation] = useState([]);
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (userInput.trim() !== "") {
      const userMessage = { text: userInput, sender: "user" };
      setMessages([...messages, userMessage]);

      try {
        const answer = await debate(userInput);
        const aiMessage = { text: answer, sender: "Ai" };

        setAiAnswer(answer);
        setAiMessages([...aiMessages, aiMessage]);
        setConversation([...converSation, userMessage, aiMessage]);
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
      setUserInput("");
    }
  };

  useEffect(() => {
    console.log(messages);
  }, [messages]);

  useEffect(() => {
    console.log(aiMessages);
  }, [aiMessages]);
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

        <Container>
          <AiCharImg src={AiChar} />
          <HumanCharImg src={HumanChar} />
        </Container>

        <CenteredContainer>
          <OppositeMessageBubble className="push">
            가상 국회의원들과 토론을 진행하세요. 먼저 의견을 내면 토론이
            시작됩니다.
          </OppositeMessageBubble>
          {messages.map((message, index) => (
            <MessageBubble
              className={message.sender === "user" ? "pull" : "push"}
              key={index}
            >
              {message.text}
            </MessageBubble>
          ))}

          {aiMessages.map((aiMessage, index) => (
            <OppositeMessageBubble
              className={aiMessage.sender === "Ai" ? "pull" : "push"}
              key={index}
            >
              {aiMessage.text}
            </OppositeMessageBubble>
          ))}
        </CenteredContainer>
        <SendArea>
          <ContentInput
            type="text"
            placeholder="발언을 입력하세요."
            value={userInput}
            onChange={handleInputChange}
          />
          <SendButton onClick={handleSendMessage}>전송</SendButton>
        </SendArea>
        <Button>토론 끝내기</Button>
      </Div>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 600px;
  margin-top: 130px;
  margin-bottom: 20px;
  z-index: 1;
`;

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 30px;
  z-index: 1000;
  margin-top: -35%;
  width: 45%;
  height: 300px;
  margin-bottom: 90px;
  overflow: scroll;
  overflow-y: auto;
  overflow-x: hidden;
`;

const MessageBubble = styled.div`
  width: auto;
  height: auto;
  max-width: 300.976px;
  flex-shrink: 0;
  background-color: rgba(255, 198, 52, 0.7);
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.1));
  margin-bottom: 29.56px;
  padding-top: 7.34px;
  padding-bottom: 7.34px;
  padding-left: 13.92px;
  padding-right: 13.92px;
  margin-right: -85%;
  &.pull:after {
    align-self: flex-end;
    content: "";
    position: absolute;
    top: 0px;
    right: -40px;
    border-bottom: 10px solid transparent;
    border-right: 20px solid transparent;
    border-left: 20px solid #ffc634;
    border-top: 0px solid #ffc634;
    opacity: 0.7;
  }
`;
const OppositeMessageBubble = styled.div`
  width: auto;
  height: auto;
  max-width: 300.976px;
  flex-shrink: 0;
  background-color: rgba(246, 246, 246, 0.3);
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.1));
  margin-bottom: 29.56px;
  padding-top: 7.34px;
  padding-bottom: 7.34px;
  padding-left: 13.92px;
  padding-right: 13.92px;
  margin-left: -25%;
  &.push:after {
    align-self: flex-start;
    content: "";
    position: absolute;
    top: 0px;
    left: -20px;
    border-top: 0px solid #f6f6f64d;
    border-right: 20px solid #f6f6f64d;
    border-left: 20px solid #transparent;
    border-bottom: 10px solid transparent;
  }
`;
const SendArea = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  gap: 30px;
  z-index: 1000;
`;
const ContentInput = styled.input`
  width: 800px;
  padding-left: 20px;
  font-size: 18px;
  border: none;
  background: rgba(246, 246, 246, 0.3);
  box-shadow: 0px 10px 100px rgba(0, 0, 0, 0.1); /* 그림자 추가 */
  &::placeholder {
    color: #fff;
  }
  color: #fff;
`;
const SendButton = styled.button`
  width: 149px;
  height: 40px;
  flex-shrink: 0;
  background-color: rgba(255, 198, 52, 0.8);
  color: white;
  border: none;
  border-radius: 84px 84px 84px 84px; /* 상단 양쪽 모서리만 84픽셀 radius */
  cursor: pointer;
  flex-shrink: 0;
  font-weight: bold; /* 볼드체로 설정 */
  font-size: 20px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1); /* 그림자 추가 */
`;

const AiCharImg = styled.img`
  width: 197.47px;
  height: 290px;
`;

const HumanCharImg = styled.img`
  width: 189px;
  height: 284px;
`;
export default WebChapter22;

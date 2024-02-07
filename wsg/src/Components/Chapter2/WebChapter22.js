import React, { useState, useEffect, useRef } from "react";
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
import { useRecoilState } from "recoil";
import { debateContents } from "../../Recoil/atom";
import TimerVector from "../../Assets/Timer.svg";
import { useNavigate } from "react-router-dom";

const WebChapter22 = () => {
  const [messages, setMessages] = useState([]);
  const [aiMessages, setAiMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [aiAnswer, setAiAnswer] = useState("");
  const [conversation, setConversation] = useState([]);
  const containerRef = useRef(null);
  const [debateContentsState, setDebateContentsState] =
    useRecoilState(debateContents);
  const [isDebateStarted, setIsDebateStarted] = useState(false);
  const [count, setCount] = useState(300);
  const [minutes, setMinutes] = useState(Math.floor(count / 60));
  const [seconds, setSeconds] = useState(count % 60);
  const navigate = useNavigate();

  useEffect(() => {
    if (isDebateStarted) {
      const id = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
      // 토론 시간이 종료되면 clearInterval을 호출하여 타이머를 멈춥니다.
      setTimeout(() => {
        clearInterval(id);
        setIsDebateStarted(false); // 토론 종료 시 상태 업데이트 등 추가 로직을 수행할 수 있습니다.
        moveToNext();
      }, count * 1000);
      return () => clearInterval(id);
    }
  }, [count]);

  // 분과 초 업데이트
  useEffect(() => {
    setMinutes(Math.floor(count / 60));
    setSeconds(count % 60);
  }, [count]);

  // mm:ss 형태의 문자열 생성
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversation]);

  const scrollToBottom = () => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  };
  useEffect(() => {
    console.log(messages);
  }, [messages]);

  useEffect(() => {
    console.log(aiMessages);
  }, [aiMessages]);

  const moveToNext = () => {
    navigate("/chapter3/1");
  }
 
  const handleSendMessage = async () => {
    if (!isDebateStarted) {
      // 토론이 시작되지 않았다면 타이머 시작
      const id = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);

      setIsDebateStarted(true);

      // 토론 시간이 종료되면 clearInterval을 호출하여 타이머를 멈춥니다.
      setTimeout(() => {
        clearInterval(id);
        // 여기에서 추가적인 로직을 수행할 수 있습니다.
      }, count * 1000);
    }

    if (userInput.trim() !== "") {
      // 입력 필드를 즉시 비웁니다.
      setUserInput("");

      try {
        const userMessage = { text: userInput, sender: "user" };
        setMessages([...messages, userMessage]);

        const answer = await debate(userInput);
        const aiMessage = { text: answer, sender: "Ai" };

        setAiAnswer(answer);
        setAiMessages([...aiMessages.slice(0, -1), aiMessage]);
        setConversation([...conversation, userMessage, aiMessage]);
        setDebateContentsState(conversation);
      } catch (error) {
        console.error("데이터를 가져오는 중 에러 발생:", error);
      }
    }
  };
  
  return (
    <>
      <Div>
        <GlobalStyle />
        <SmallBackground src={smallBg} />
        <Big>
          <Part0>
            <ChapTitle>Chapter 2.</ChapTitle>
            <Title>토론 참여</Title>
          </Part0>

          <SameLine>
            <Clock src={TimerVector} />
            <TimeLeft>남은 시간 </TimeLeft>
            <Timer> {formattedTime}</Timer>{" "}
          </SameLine>
        </Big>
        <Hr />
        <Container>
          <AiCharImg src={AiChar} />
          <HumanCharImg src={HumanChar} />
        </Container>
        <CenteredContainer ref={containerRef}>
          <MessageContainer>
            <OppositeMessageBubble className="push">
              가상 국회의원들과 토론을 진행하세요. 먼저 의견을 내면 토론이
              시작됩니다.
            </OppositeMessageBubble>
            {conversation.map((message, index) => {
              const MessageComponent =
                message.sender === "user"
                  ? MessageBubble
                  : OppositeMessageBubble;
              return (
                <MessageComponent
                  className={index % 2 === 0 ? "pull" : "push"}
                  key={index}
                >
                  {message.text}
                </MessageComponent>
              );
            })}
          </MessageContainer>
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
        <Button onClick={moveToNext}>토론 끝내기</Button>
      </Div>
    </>
  );
};

const Big = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 210px;
`;
const Clock = styled.img``;
const SameLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-left: 70%;
  margin-bottom: -13%;
`;
const TimeLeft = styled.div`
  color: #fff;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: 8px;
  margin-right: 18px;
  min-width: 50%;
`;
const Timer = styled.div`
  color: #fff;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 900px;
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
  margin-top: -32.5%;
  width: 65%;
  height: 450px;
  margin-bottom: 40px;
  overflow: scroll;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 12px;  /* Chrome, Safari, Edge */
  }
`;

const MessageContainer = styled.div`
  margin-left: 5%;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const MessageBubble = styled.div`
  align-self: flex-end;
  width: auto;
  max-width: 500.976px;
  flex-shrink: 0;
  background-color: #d9bd6e;
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.1));
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 15px;

  &.pull:after {
    content: "";
    position: absolute;
    top: 10%;
    right: -13px;
    border-top: 5px solid transparent;
    border-left: 20px solid #d9bd6e;
    border-bottom: 10px solid transparent;
  }
`;

const OppositeMessageBubble = styled.div`
  align-self: flex-start;
  width: auto;
  max-width: 500.976px;
  flex-shrink: 0;
  background-color: #a7c1f6;
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.1));
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 15px;

  &.push:after {
    content: "";
    position: absolute;
    top: 10%;
    left: -15px;
    border-top: 5px solid transparent;
    border-right: 20px solid #a7c1f6;
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
  background: #acc5f6;
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.1));
  &::placeholder {
    color: #fff;
  }
  color: #fff;
`;
const SendButton = styled.button`
  width: 149px;
  height: 40px;
  background-color: #DCC06E;
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

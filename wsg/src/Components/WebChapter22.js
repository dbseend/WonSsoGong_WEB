import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";


const WebChapter22 = () => {
  return (
    <>
      <GlobalStyle />
      <Part0>
        <ChapTitle>Chapter 2.</ChapTitle>
        <Title>토론 참여</Title>
      </Part0>
      <Hr />
      <Conversation>
        <AssistantMessage>안녕하세요! 토론에 참여하러 오셨군요.</AssistantMessage>
        <UserMessage>네, 안녕하세요! 어떻게 참여하면 되나요?</UserMessage>
        {/* 다른 대화 내용 추가 */}
      </Conversation>
    </>
  );
};

const Part0 = styled.div`
  margin-left: 5%;
  margin-top: 30px;
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
  height: 0.5px;
  background: #fff;
  margin-top: 18px;
  position: relative;
`;

const Conversation = styled.div`
  margin-top: 20px;
`;

const MessageBubble = styled.div`
  background: rgba(246, 246, 246, 0.30);
  width: 505.156px;
  height: 44px;
  padding: 10px;
  margin-bottom: 10px;
`;

const AssistantMessage = styled(MessageBubble)`
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 16px;
  position: absolute;
  left: 5%;
`;

const UserMessage = styled(MessageBubble)`
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 16px;
  text-align: right;
  position: absolute;
  right: 5%;
`;

export default WebChapter22;
import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import Twinkle from "../Assets/Twinkle.svg"

const WebChapter12 = () => {
  const navigate = useNavigate();
  const moveToNext = () => {
    navigate("/");
  };

  const [selectedType, setSelectedType] = useState(null);

  const handleClick = (type) => {
    setSelectedType(type);
  };

  return (
    <>
      <GlobalStyle />
      <Part0>
        <ChapTitle>Chapter 1.</ChapTitle>
        <Title>법안 발의</Title>
      </Part0>
      <Hr />
      <Body>
        <Part1>
          <SubTitle>법안 주제</SubTitle>
          <Container>
            <TypeArea>
              <Type
                selected={selectedType === "생활"}
                onClick={() => handleClick("생활")}
              >
                생활
              </Type>
              <Type
                selected={selectedType === "안전"}
                onClick={() => handleClick("안전")}
              >
                안전
              </Type>
              <Type
                selected={selectedType === "도시"}
                onClick={() => handleClick("도시")}
              >
                도시
              </Type>
              <Type
                selected={selectedType === "교통"}
                onClick={() => handleClick("교통")}
              >
                교통
              </Type>
              <Type
                selected={selectedType === "주민"}
                onClick={() => handleClick("주민")}
              >
                주민
              </Type>
              <Type
                selected={selectedType === "법률"}
                onClick={() => handleClick("법률")}
              >
                법률
              </Type>
            </TypeArea>
            <Form1 placeholder="법안 주제를 입력해주세요." />
          </Container>
        </Part1>
        <Part2>
          <SubTitle>법안 설명</SubTitle>
          <Form2 placeholder="작성한 법안 주제를 설명해주세요." />
        </Part2>
        <ButtonContainer>
            <img src ={Twinkle} />
          <Button onClick={moveToNext}>AI로 완성하기</Button>
        </ButtonContainer>
      </Body>
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
`;

const Body = styled.div`
  /* margin-left: 5%; */
  display: flex;
  flex-direction: column;
`;

const Part1 = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 32px;
  justify-content: center;
`;

const SubTitle = styled.div`
  color: var(--Primary, #ffa130);
  font-family: "Pretendard Variable";
  font-size: 28px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`;

const Container = styled.div`
  margin-left: 37px;
  display: flex;
  flex-direction: column;
`;

const TypeArea = styled.div`
  display: flex;
  flex-direction: row;
  gap: 28px;
`;

const Type = styled.div`
  width: 122px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 52px;
  border: 1px solid var(--white-text, #f6f6f6);
  background: ${(props) =>
    props.selected ? "rgba(255, 161, 48, 0.70)" : "rgba(246, 246, 246, 0.3)"};
  text-align: center;
  line-height: 32px;
  color: ${(props) => (props.selected ? "#5379c2" : "#fff")};
  font-family: "Pretendard Variable";
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease, border 0.3s ease;

  &:hover {
    border: 2px solid var(--Primary, #ffa130);
    background: rgba(255, 161, 48, 0.7);
  }

  &:active {
    outline: none;
    border: 2px solid var(--Primary, #ffa130);
    background: rgba(255, 161, 48, 0.7);
  }
`;

const Form1 = styled.input`
  width: 877px;
  height: 44px;
  flex-shrink: 0;
  border-radius: 2px;
  border: 1px solid var(--white-text, #f6f6f6);
  background: rgba(246, 246, 246, 0.3);
  margin-top: 18px;
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  &::placeholder {
    color: #e7e7e7;
    position: absolute;
    top: 12px;
    left: 20px; 
  }
`;

const Part2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 37px;
  margin-top: 32px;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.div`
  width: 1016px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 84px;
  background: #ffa438;
  color: #5379c2;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  margin-top: 74px;
`;

const Form2 = styled.input`
  width: 877px;
  height: 302px;
  flex-shrink: 0;
  border-radius: 2px;
  border: 1px solid var(--white-text, #f6f6f6);
  background: rgba(246, 246, 246, 0.3);
  color: #e7e7e7;
  &::placeholder {
    color: #e7e7e7;
    position: absolute;
    top: 12px;
    left: 20px; 
  }
  font-family: "Pretendard Variable";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
`;

export default WebChapter12;
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from 'react-router-dom';
import { useRecoilState } from "recoil";
import { billContent } from "../../Recoil/atom"; // atoms 파일 경로에 맞게 수정해주세요.
import { createAssistant } from "../../Api/BillAPI";
import smallBg from "../../Assets/bg1.svg";
import left from "../../Assets/Group 169.svg";
import right from "../../Assets/Group 174.svg";
import GlobalStyle from "../Etc/GlobalStyle";
import { Div, SmallBackground, Title, Hr, Button } from "../Chapter1/WebChapter12";

const WebChapter42 = () => {
  const location = useLocation();
  const { billNo } = location.state;

  const [isClicked, setIsClicked] = useState(false);

  const [madeBill, setMadeBill] = useRecoilState(billContent);
  const titleRegex = /제목: (.+?)\n/;
  const rationaleRegex = /근거: (.+?)\n/;
  const contentRegex = /내용:\n([\s\S]*)/;
  const title = madeBill.match(titleRegex);
  const rationale = madeBill.match(rationaleRegex);
  const content = madeBill.match(contentRegex);
  

  const [summarizedBill, setSummarizedBill] = useState("");
  const [keywords, setKeywords] = useState(["쿵짝짝1", "쿵짝짝2", "쿵짝짝3"]);
  const [topic, setTopic] = useState("");
  const [reason, setReason] = useState("");
  const [description, setDescription] = useState("");
  const keywordRegex = /핵심 키워드: (.+?)\n/;
  const topicRegex = /법안의 주제: (.+?)\n/;
  const reasonRegex = /법안 제안의 이유: (.+?)\n/;
  const descriptionRegex = /법안 설명: (.+)/;


  useEffect(() => {
    createAssistant(billNo);
  }, []);

  const handleClickAfter = () => {
    setIsClicked(true);
  };

  const handleClickBefore = () => {
    setIsClicked(false);
  };

  return (
    <>
      <GlobalStyle />
      <Div>
        <SmallBackground src={smallBg} />
        <Title>법안 발의서 완성!</Title>
        <RowContainer>
          <AfterText onClick={handleClickAfter}>After</AfterText>
          <BeforeText onClick={handleClickBefore}>Before</BeforeText>
        </RowContainer>
        {isClicked ? <AfterState /> : <BeforeState />}
        <Hr />
        {isClicked ? (
          <>
            <TitleBox>
              <Font1>제안하신 법안주제</Font1>
              <Font2>00에 대한 법률 (XXX에 대하여)</Font2>
              <Font1>에 대해 정리해보았어요!</Font1>{" "}
            </TitleBox>
            <Sequence>핵심 키워드</Sequence>
            <RowContainer>
              {keywords.map((word, index) => (
                <KeywordBox key={index}>{word}</KeywordBox>
              ))}
            </RowContainer>
            <Sequence>제안 이유</Sequence>
            <RowContainer>
              <LeftCharacter src={left} />
              <ContentBox>쿵짝짝1</ContentBox>
            </RowContainer>
            <Sequence>제안 내용</Sequence>
            <RowContainer>
              <ContentBox>쿵짝짝2</ContentBox>
              <RightCharacter src={right} />
            </RowContainer>
          </>
        ) : (
          <>
            <TitleBox>
              <TitleText>00에 대한 법률 (XXX에 대하여)</TitleText>
            </TitleBox>
            <ExplainBill>
              <BillTitle>법안 설명</BillTitle>
              <Font3 >{title}</Font3>
              <Font3 >{rationale}</Font3>
              <Font3 >{content}</Font3>
            </ExplainBill>
          </>
        )}
        <NextButton>뒤로 가기</NextButton>
      </Div>
    </>
  );
};

const Font1 = styled.div`
  color: var(--sub_text, #464646);
  font-family: "Pretendard Variable";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center; /* 가운데 정렬 */
  margin-bottom: 20px;
`;

const Font2 = styled(Font1)`
  color: var(--sec_text, #5379c2);
`;

const Font3 = styled(Font1)`
  color: #FFF;
  font-size: 20px;
`

const AfterText = styled.div`
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: -40px;
  margin-bottom: -30px;
  cursor: pointer;
`;

const BeforeText = styled(AfterText)`
  margin-left: 450px;
  margin-right: -30px;
`;

const AfterState = styled.div`
  width: 8px;
  height: 88px;
  transform: rotate(-90deg);
  flex-shrink: 0;
  margin-bottom: -60px;
  margin-right: 46%;

  border-radius: 0px 5px 5px 0px;
  opacity: 0.9;
  background: linear-gradient(180deg, #ffc634 0%, #d8f5dd 100%);
`;

const BeforeState = styled(AfterState)`
  margin-left: 89.5%;
`;

const TitleBox = styled.div`
  width: 900px;
  height: 50px;
  margin-top: 80px;
  margin-bottom: 80px;
  flex-shrink: 0;
  background: rgba(246, 246, 246, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--sub_text, #464646);
  font-family: "Pretendard Variable";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const TitleText = styled(Font2)`
  margin-right: 50%;
`;


const Sequence = styled(Font2)`
  font-weight: 700;
  margin-left: -68%;
`;

const RowContainer = styled(Div)`
  flex-direction: row;
`;

const KeywordBox = styled(TitleBox)`
  width: 255px;
  height: 100px;
  margin-left: 34px;
  margin-right: 34px;
  margin-top: 0px;
  margin-bottom: 60px;

  border-radius: 10px;
  background: rgba(246, 246, 246, 0.5);
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);

  -webkit-text-stroke-width: 1;
  -webkit-text-stroke-color: #000;
  font-family: "Pretendard Variable";
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  background: var(--gra2, linear-gradient(90deg, #ffc634 0%, #d8f5dd 100%));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const ContentBox = styled(TitleBox)`
  width: 800px;
  height: 400px;
  border-radius: 10px;
  margin-left: -30px;
  margin-right: -20px;
  margin-top: 0px;
`;

const LeftCharacter = styled.img`
  width: 220px;
  height: 260px;
  flex-shrink: 0;
  margin-top: -200px;
  margin-right: -100px;
  z-index: 1;
`;

const RightCharacter = styled(LeftCharacter)`
  margin-right: 0px;
  margin-left: -100px;
`;

const NextButton = styled(Button)`
  margin-bottom: 55px;
`;

const ExplainBill = styled(Div)`
  width: 900px;
  height: 510px;
  background: rgba(198, 198, 198, 0.1);
  backdrop-filter: blur(50px);
  margin-top: -81px;
`;

const BillTitle = styled(Sequence)`
  margin-top: 20px;
  margin-right: 60px;
  /* margin-left: -20px; */
`;

export default WebChapter42;

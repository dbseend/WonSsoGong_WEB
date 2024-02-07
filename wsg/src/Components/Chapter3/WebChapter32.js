import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { billContent, debateContents } from "../../Recoil/atom";
import { summarizeBill, summarizeDebate } from "../../Api/BillAPI";
import { SmallBackground } from "../Chapter1/WebChapter12";
import smallBg from "../../Assets/bg1.svg";
import GlobalStyle from "../Etc/GlobalStyle";
import Note from "../../Assets/WebChapter32 Note.png";
import { Button } from "../Chapter1/WebChapter12";
import { Div } from "../Chapter1/WebChapter11";

const WebChapter32 = () => {
  const [content, setContent] = useState("");
  const [debateContentsState, setDebateContentsState] =
    useRecoilState(debateContents);
  const combinedString = debateContentsState.map((item) => item.text).join(" ");
  const [summarizedDebate, setSummarizedDebate] = useState("");
  const [billContentState, setBillContentState] = useRecoilState(billContent);
  const [summarizedBill, setSummarizedBill] = useState("");

  useEffect(() => {
    console.log(billContentState);
    summarizeBill(billContentState).then((response) => {
      console.log(response);
      setSummarizedBill(response);
    });

    console.log(combinedString);
    summarizeDebate(combinedString).then((response) => {
      console.log(response);
      setSummarizedDebate(response);
    });
  }, []);

  const navigate = useNavigate();
  const moveToNext = () => {
    navigate("/chapter3/3");
  };
  return (
    <Div>
      <GlobalStyle />
      <SmallBackground src={smallBg} />
      <Part0>
        <ChapTitle>Chapter 3.</ChapTitle>
        <ChapTitle>
          <Title>투표 진행 : </Title>
          법안리마인드
        </ChapTitle>
      </Part0>
      <Hr />
      {summarizedBill && summarizedDebate && (
        <>
          <SumDiv>
            <Font1>법안 요약</Font1>
            <Font2>{summarizedBill}</Font2>
            <Font1>토론 요약</Font1>
            <Font2>{summarizedDebate}</Font2>
          </SumDiv>
          <ImageContainer>
            <NoteImage src={Note} alt="Chapter 32 Note" />
          </ImageContainer>
        </>
      )}
      <Button onClick={moveToNext}>다음으로 넘어가기</Button>
    </Div>
  );
};

const SumDiv = styled(Div)`
  width: 800px;
  margin-left: 200px;
`;

const Font1 = styled.div`
  width: 300px;
  color: var(--Primary, #ffc634);
  font-family: "Pretendard Variable";
  font-size: 28px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin-right: 112%;
`;

const Font2 = styled.div`
  width: 100%;
  color: var(--white-text, #f6f6f6);
  font-family: "Pretendard Variable";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: 50%;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const ImageContainer = styled.div`
  display: relative;
  flex-direction: row;
  right: 200px;
  margin-top: -10%;
  margin-bottom: 5%;
  margin-right: -60%;
`;

const Part0 = styled.div`
  margin-left: -65%;
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

const NoteImage = styled.img`
  width: 366px;
  height: 332px; /* 이미지가 70%의 높이를 차지하도록 설정 */
`;

export default WebChapter32;

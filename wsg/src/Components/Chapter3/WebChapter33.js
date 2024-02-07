import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Button1 from "../../Assets/Button1.png";
import Button1Click from "../../Assets/Button1Click.png";
import Button2 from "../../Assets/Button2.png";
import Button2Click from "../../Assets/Button2Click.png";
import Button3 from "../../Assets/Button3.png";
import Button3Click from "../../Assets/Button3Click.png";
import { SmallBackground } from "../Chapter1/WebChapter12";
import smallBg from "../../Assets/bg1.svg";
import Group146 from "../../Assets/Group 146.png";
import GlobalStyle from "../Etc/GlobalStyle";
import { Button } from "../Chapter1/WebChapter12";
import {
  Div,
} from "../Chapter1/WebChapter11";

const WebChapter33 = () => {
  const [content, setContent] = useState("");
  const [button1Clicked, setButton1Clicked] = useState(false);
  const [button2Clicked, setButton2Clicked] = useState(false);
  const [button3Clicked, setButton3Clicked] = useState(false);
  const navigate = useNavigate();

  const moveToNext = () => {
    const votes1 = Math.floor(Math.random() * (99 - 20 + 1) + 20);
    const votes2 = Math.floor(Math.random() * (99 - 20 + 1) + 20);
    const votes3 = Math.floor(Math.random() * (99 - 20 + 1) + 20);

    if (votes1 >= votes2 && votes1 >= votes3) {
      navigate("/chapter3/result1", { state: { votes1, votes2, votes3 } });
    } else if (votes2 >= votes1 && votes2 >= votes3) {
      navigate("/chapter3/result2", { state: { votes1, votes2, votes3 } });
    } else {
      navigate("/chapter3/result3", { state: { votes1, votes2, votes3 } });
    }
  };

  const handleButton1Click = () => {
    setButton1Clicked((prev) => !prev);
    setButton2Clicked(false); 
    setButton3Clicked(false); 
  };
  const handleButton2Click = () => {
    setButton2Clicked((prev) => !prev); 
    setButton1Clicked(false); 
    setButton3Clicked(false); 
  };
  const handleButton3Click = () => {
    setButton3Clicked((prev) => !prev);
    setButton1Clicked(false); 
    setButton2Clicked(false); 
  };

  return (
    <Div>
      <GlobalStyle />
      <SmallBackground src={smallBg} />
      <Part0>
        <ChapTitle>Chapter 3.</ChapTitle>
        <ChapTitle>
        <Title>투표 진행 : </Title> 
        의사 결정
        </ChapTitle>
      </Part0>
      <Hr />
      <Group146Image src={Group146} alt="Chapter 33 Group146" />
      <ImageContainer>
        {button1Clicked ? (
          <Button1ClickImage src={Button1Click} alt="Chapter 33 Button1Click" onClick={handleButton1Click} />
        ) : (
          <Button1Image src={Button1} alt="Chapter 33 Button1" onClick={handleButton1Click} />
        )}
        {button2Clicked ? (
          <Button2ClickImage src={Button2Click} alt="Chapter 33 Button2Click" onClick={handleButton2Click} />
        ) : (
          <Button2Image src={Button2} alt="Chapter 33 Button2" onClick={handleButton2Click} />
        )}
        {button3Clicked ? (
          <Button3ClickImage src={Button3Click} alt="Chapter 33 Button3Click" onClick={handleButton3Click} />
        ) : (
          <Button3Image src={Button3} alt="Chapter 33 Button3" onClick={handleButton3Click} />
        )}
      </ImageContainer>
      <Button onClick={moveToNext}>다음으로 넘어가기</Button>
    </Div>
  );
};

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: -22.2%;
  margin-bottom: 22.1%;
  gap: 210px;
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
  margin-top: 1%;
  margin-bottom: 10%;
  position: relative;
`;

const Group146Image = styled.img`
  width: 1131px;
  height: 332px; /* 이미지가 70%의 높이를 차지하도록 설정 */
  right: 155px;
  top: 200px;
`;

const Button1Image = styled.img`
  width : 158.4px;
  height: 86.07px;
`;

const Button1ClickImage = styled.img`
  width : 158.4px;
  height: 86.07px;
  transform: translateY(10px);
`;

const Button2Image = styled.img`
  width : 158.4px;
  height: 86.07px;
`;

const Button2ClickImage = styled.img`
  width : 158.4px;
  height: 86.07px;
  transform: translateY(10px);
`;

const Button3Image = styled.img`
  width : 158.4px;
  height: 86.07px;
`;

const Button3ClickImage = styled.img`
width : 158.4px;
height: 86.07px;
transform: translateY(10px);
`;

export default WebChapter33;
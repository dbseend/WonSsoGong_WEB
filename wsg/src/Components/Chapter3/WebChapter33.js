import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import GlobalStyle from "../Etc/GlobalStyle";
import { useRecoilState } from "recoil";
import { useNavigate, useLocation } from "react-router-dom";
import Ellipse7 from "../Assets/Ellipse 7.svg";
import Group146 from "../Assets/Group 146.png";
import Button1 from "../Assets/Button1.png";
import Button1Click from "../Assets/Button1Click.png";
import Button2 from "../Assets/Button2.png";
import Button2Click from "../Assets/Button2Click.png";
import Button3 from "../Assets/Button3.png";
import Button3Click from "../Assets/Button3Click.png";

const WebChapter33 = () => {
  const [content, setContent] = useState("");
  const [button1Clicked, setButton1Clicked] = useState(false);
  const [button2Clicked, setButton2Clicked] = useState(false);
  const [button3Clicked, setButton3Clicked] = useState(false);
  const navigate = useNavigate();
  let votes1, votes2, votes3;

  const moveToNext = () => {
    const votes1 = Math.floor(Math.random() * (99 - 20 + 1) + 20);
    const votes2 = Math.floor(Math.random() * (99 - 20 + 1) + 20);
    const votes3 = Math.floor(Math.random() * (99 - 20 + 1) + 20);

    if (votes1 >= votes2 && votes1 >= votes3) {
      navigate("/chapter3Result1", { state: { votes1, votes2, votes3 } });
    } else if (votes2 >= votes1 && votes2 >= votes3) {
      navigate("/chapter3Result2", { state: { votes1, votes2, votes3 } });
    } else {
      navigate("/chapter3Result3", { state: { votes1, votes2, votes3 } });
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
    <>
      <Container />
      <Ellipse7Image src={Ellipse7} alt="Chapter 22 Ellipse7" />
      <Button onClick={moveToNext}>투표하기</Button>
      <Part0>
        <ChapTitle>Chapter 3.</ChapTitle>
        <ChapTitle>
        <Title>투표 진행 : </Title> 
            의사결정
        </ChapTitle>
      </Part0>
      <Hr />
      <Group146Image src={Group146} alt="Chapter 33 Group146" />
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
    </>
  );
};

const Container = createGlobalStyle`
body {
  margin: 0;
  margin-top : 90px;
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
  margin-left: 80px;
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

const Button = styled.div`
  position: absolute;
  bottom: 120px;
  left: 715px;
  transform: translateX(-520px);
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

const Group146Image = styled.img`
  width: 1131px;
  height: 332px; /* 이미지가 70%의 높이를 차지하도록 설정 */
  position: absolute;
  right: 155px;
  top: 250px;
`;

const Button1Image = styled.img`
  width: 170px;
  height: 86px; /* 이미지가 70%의 높이를 차지하도록 설정 */
  position: absolute;
  right: 1004px;
  top: 333px;
`;

const Button1ClickImage = styled.img`
  width: 170px;
  height: 86px; /* 이미지가 70%의 높이를 차지하도록 설정 */
  position: absolute;
  right: 1004px;
  top: 344px;
`;

const Button2Image = styled.img`
  width: 170px;
  height: 86px; /* 이미지가 70%의 높이를 차지하도록 설정 */
  position: absolute;
  right: 632px;
  top: 333px;
`;

const Button2ClickImage = styled.img`
  width: 170px;
  height: 86px; /* 이미지가 70%의 높이를 차지하도록 설정 */
  position: absolute;
  right: 632px;
  top: 344px;
`;

const Button3Image = styled.img`
  width: 170px;
  height: 86px; /* 이미지가 70%의 높이를 차지하도록 설정 */
  position: absolute;
  right: 260px;
  top: 333px;
`;

const Button3ClickImage = styled.img`
  width: 170px;
  height: 86px; /* 이미지가 70%의 높이를 차지하도록 설정 */
  position: absolute;
  right: 260px;
  top: 344px;
`;

const Ellipse7Image = styled.img` //큰 원
  position: absolute;
  top: 5%; /* 중심을 화면 상단에 위치하도록 설정 */
  left: 0%; /* 원하는 가로 위치로 조절 */
  width: 100%;
  height: 83%; /* 이미지가 70%의 높이를 차지하도록 설정 */
`;

export default WebChapter33;
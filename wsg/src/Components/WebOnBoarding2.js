import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import FluentArrow from "../Assets/FluentArrow.svg";
import WebFooter from "./WebFooter";
import { useNavigate } from "react-router-dom";
import Group1 from "../Assets/Group 50.svg";
import Group2 from "../Assets/Group 51.svg";
import Group3 from "../Assets/Group 52.svg";
import Group4 from "../Assets/Group 53.svg";
import onBoardingChar from "../Assets/onBoardingChar.svg";
import flower from "../Assets/flower.svg";
import diamond from "../Assets/diamond.svg";
import circle from "../Assets/circle.svg";
const WebOnBoarding2 = () => {
  const [showFooter, setShowFooter] = useState(false);
  const navigate = useNavigate();
  const moveToMain = () => {
    navigate("/main");
  };
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // 스크롤 이벤트 리스너 등록
    const handleScroll = () => {
      const scrolledHeight = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      if (scrolledHeight + windowHeight >= documentHeight) {
        // 스크롤이 일정 높이 이상 내려갔을 때 Footer 표시
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };
    window.addEventListener("scroll", handleScroll); // 스크롤 이벤트 리스너 등록
    return () => {
      // 컴포넌트 언마운트 시 이벤트 리스너 제거
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Div>
      <GlobalStyle />
      <Top>
        <div>
          <WhiteText>국회의 일부가 되어 국회 의원이 되어보는 경험,</WhiteText>{" "}
          <GradientText> 방방국국!</GradientText>
          <SubT>
            가상 국회 의원으로서 법안을 발의하고, 토론에 참여하며, 투표하는 등의
          </SubT>
          <SubT>다양한 활동을 체험할 수 있습니다.</SubT>
        </div>
        <Button onClick={moveToMain}>시작하기</Button>
      </Top>
        <RectArea>
        <StyledRect image={Group1}></StyledRect>
        <StyledRect image={Group2}></StyledRect>
        <StyledRect image={Group3}></StyledRect>
        <StyledRect image={Group4}></StyledRect>
      </RectArea>

      <img src="onBoardingChar" alt="빵긋이"></img>
      <img src="flower" />
      <img src="diamond" />
      <img src="circle" />
      <Arrow src={FluentArrow} onClick={handleScrollToTop} />
      {showFooter && <WebFooter />}
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  /* overflow: scroll; */
  align-items: center;
`;

const Top = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled.div`
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 40px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

const SubT = styled.div`
  width: 887px;
  height: auto; /* 높이를 자동으로 조절하도록 변경 */
  flex-shrink: 0;
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 25.2px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  /* margin-top: 32px; */
`;

const Button = styled.div`
  width: 240px;
  height: 40px;
  flex-shrink: 0;
  display: flex; /* 수평 가운데 정렬을 위한 설정 */
  justify-content: center; /* 수평 가운데 정렬을 위한 설정 */
  align-items: center; /* 수직 가운데 정렬을 위한 설정 */
  border-radius: 84px;
  background: linear-gradient(
    90deg,
    #ffc634 0%,
    #ffd34a 10%,
    #ffea5f 30%,
    #fff275 50%,
    #d8f5dd 100%
  );
  color: #5379c2;
  font-family: "Pretendard Variable";
  font-size: 25.2px;
  font-style: normal;
  font-weight: 800;
  line-height: 40px;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 10px;
  cursor: pointer;
`;

const RectArea = styled.div`
  display: flex;
  flex-direction: row;
  gap: 26px;
  margin-top: 88px;
`;

const StyledRect = styled.div`
  /* 기존 스타일 */
  /* ... */
  position: relative;
  width: 206px;
  height: 612px;
  flex-shrink: 0;
  border-radius: 103px;
  background: linear-gradient(
    180deg,
    rgba(246, 246, 246, 0.9) 6%,
    rgba(246, 246, 246, 0) 100%
  );
  box-shadow: 0px 3.6px 3.6px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  text-align: center;
  color: #0e0e0e;
  font-family: "Pretendard Variable";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 150px;
  cursor: pointer;
  transition: background 0.3s ease, box-shadow 0.3s ease,
    backdrop-filter 0.3s ease;

  &:hover {
    /* 호버 상태일 때의 스타일 */
    border-radius: 103px;
    background: linear-gradient(
      180deg,
      rgba(246, 246, 246, 0.72) 6%,
      rgba(0, 0, 0, 0) 100%
    );
    box-shadow: 0px 3.6px 3.6px 0px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(4.5px);

    /* 호버 상태일 때 이미지 변경 */
    &::before {
      content: url(${(props) => props.image});
      display: block;
      position: absolute;
      top: 25%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 1;
      transition: opacity 0.5s ease;
    }
  }

  /* 호버가 아닌 상태에서 이미지는 표시되지 않도록 함 */
  &::before {
    content: url(${(props) => props.image});
    display: block;
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.5s ease;
  }
`;
// const StyledRect = styled.div`
  
//   &::before {
//     /* content: url(${(props) => props.image});
//     display: block;
//     position: absolute;
//     top: 25%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     opacity: 0;
//     transition: opacity 0.5s ease; */
//   }

//   &:hover {
//     border-radius: 103px;
//     background: linear-gradient(
//       180deg,
//       rgba(246, 246, 246, 0.72) 6%,
//       rgba(0, 0, 0, 0) 100%
//     );
//     box-shadow: 0px 3.6px 3.6px 0px rgba(0, 0, 0, 0.25);
//     backdrop-filter: blur(4.5px);
//   }
// `;

const Arrow = styled.img`
  margin-top: 750px;
  align-self: center;
  cursor: pointer;
`;

const GradientText = styled.div`
  font-family: "Pretendard Variable";
  font-size: 40px;
  font-weight: 800;
  display: inline-block;
  background: linear-gradient(
    90deg,
    #ffc634 0%,
    #ffd34a 10%,
    #ffea5f 30%,
    #fff275 50%,
    #d8f5dd 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 40px;
`;


const WhiteText = styled.span`
  color: white;
  font-family: "Pretendard Variable";
  font-size: 40px;
  font-weight: 800;
`;

export default WebOnBoarding2;

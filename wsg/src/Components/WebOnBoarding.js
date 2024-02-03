import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import FluentArrow from "../Assets/FluentArrow.svg";
import WebFooter from "./WebFooter";
import { useNavigate } from "react-router-dom";

const WebOnBoarding = () => {
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

  const rectData = [
    {
      title: "법안 발의",
      content: "가상의 국회의원이 되어보는 시간! AI 도우미 빵긋이와 쉽고 재미있게 법안을 발의해봐요."
    },
    {
      title: "토론 참여",
      content: "AI 가상 의원들과 발의한 법안에 대해 자유롭게 토론을 나누어보아요.",
    },
    {
      title: "투표 진행",
      content:
        "토론과 투표 결과는 실제로 가상 국회에 영향을 미친답니다.",
    },
    {
      title: "법안 분석",
      content:
        "현재 우리 국회에 어떤 법안들이 존재하는지 AI 도우미 빵긋이와 알아봐요",
    },
    // Add more data for other Rects
  ];

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
        {/* <StyledCircleWrapper> */}
        {/* <StyledSecondCircle/> 그 위에 원 */}
        {/* <StyledCircle /> 맨 아래 원 */}
        {/* </StyledCircleWrapper> */}
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
        {rectData.map((data, index) => (
          <Rect
            key={index}
            title={data.title}
            content={data.content}
          />
        ))}
      </RectArea>
      <Arrow src={FluentArrow} onClick={handleScrollToTop} />
      {showFooter && <WebFooter />}
    </Div>
  );
};
function splitBoldText(content, boldText) {
  const parts = [];
  let currentIndex = 0;

  while (true) {
    const boldStartIndex = content.indexOf(boldText, currentIndex);
    if (boldStartIndex === -1) {
      parts.push(content.slice(currentIndex));
      break;
    }

    const beforeBoldText = content.slice(currentIndex, boldStartIndex);
    parts.push(beforeBoldText);

    parts.push(boldText);
    currentIndex = boldStartIndex + boldText.length;
  }

  return parts;
}


const Rect = ({ title, content }) => {
  const [boldText, normalText] = splitBoldText(content, "쉽고 재미있게");

  return (
    <StyledRect>
      <BillText className="bill-text">{title}</BillText>
      <NewText className="new-text">{title}</NewText>
      <NewSubText className="newSub-text1">{normalText}</NewSubText>
      <NewSubTextBold className="newSub-text-bold">{boldText}</NewSubTextBold>
    </StyledRect>
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

  &::before {
    /* content: url(${(props) => props.image});
    display: block;
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.5s ease; */
  }

  &:hover {
    border-radius: 103px;
    background: linear-gradient(
      180deg,
      rgba(246, 246, 246, 0.72) 6%,
      rgba(0, 0, 0, 0) 100%
    );
    box-shadow: 0px 3.6px 3.6px 0px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(4.5px);

    &::before {
      opacity: 1;
    }
    .bill-text {
      opacity: 0;
    }
    .new-text {
      opacity: 1;
    }
    .newSub-text {
      opacity: 1;
    }

    .newSub-text-bold {
      opacity: 1;
    }
  }
`;

const StyledCircle = styled.div`
  position: relative;
  width: 2290px;
  height: 1000px;
  flex-shrink: 0;
  border-radius: 50%;
  opacity: 0.4;
  background: linear-gradient(180deg, rgba(246, 246, 246, 0) 54%, #f6f6f6 100%);
`;

const StyledCircleWrapper = styled.div`
  position: absolute;
  top: 50%; /* 중앙 정렬을 위해 top 50% 설정 */
  left: 50%; /* 중앙 정렬을 위해 left 50% 설정 */
  transform: translate(-50%, -50%); /* 중앙 정렬을 위한 transform 설정 */
  z-index: -1; /* 다른 요소보다 뒤에 위치하도록 설정 */
`;

const StyledSecondCircle = styled.div`
  position: absolute;
  top: calc(50% - 50px); /* 중앙에서 100px 위로 이동 */
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  /* width: 2290px;
  height: 1000px; */
  flex-shrink: 0;
  border-radius: 50%;
  opacity: 0.4;
  background: linear-gradient(180deg, rgba(246, 246, 246, 0) 54%, #f6f6f6 100%);
  z-index: -2; /* 다른 요소보다 뒤에 위치하도록 설정 */
`;

const BillText = styled.div`
  opacity: 1;
  /* transition: opacity 1s ease; */
`;

const NewText = styled.div`
  opacity: 0;
  transition: opacity 0.5s ease;
  position: absolute;
  top: 12%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--Primary, #F6F6F6);
  text-shadow: 1px 1px 1px #000;
  font-family: "Pretendard Variable";
  font-size: 24px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  z-index: 2;
`;

const NewSubText = styled.div`
  opacity: 0;
  transition: opacity 0.5s ease;
  position: absolute;
  top: 45.5%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 152px;
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const NewSubTextBold = styled.div`
  opacity: 0;
  transition: opacity 0.5s ease;
  position: absolute;
  top: 45.5%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 152px;
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;
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

export default WebOnBoarding;

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import FluentArrow from "../Assets/FluentArrow.svg";
import intersectImage1 from "../Assets/Intersect-3.png";
import intersectImage2 from "../Assets/Intersect-1.png";
import intersectImage3 from "../Assets/Intersect.png";
import intersectImage4 from "../Assets/Intersect-2.png";
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
      content: "사용자가 가상 국회의원이 되어 법안을 발의하는 시뮬레이션",
      image: intersectImage1,
    },
    {
      title: "토론 참여",
      content: "다른 가상 의원들과 법안에 대해 토론 및 사용자 의견 제시",
      image: intersectImage2,
    },
    {
      title: "투표 진행",
      content:
        "토론 시간이 끝난 후 법안에 대한 최종 투표(찬성, 반대, 기권) 참여",
      image: intersectImage3,
    },
    {
      title: "법안 분석",
      content:
        "내가 선택한 법안 주제와 같은 주제의 법안을 이해하기 쉬운 언어로 요약 및 정보 제공",
      image: intersectImage4,
    },
    // Add more data for other Rects
  ];

  useEffect(() => {
    // 스크롤 이벤트 리스너 등록
    const handleScroll = () => {
      const scrolledHeight = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      if (scrolledHeight + windowHeight >= documentHeight) { // 스크롤이 일정 높이 이상 내려갔을 때 Footer 표시
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };
    window.addEventListener("scroll", handleScroll); // 스크롤 이벤트 리스너 등록
    return () => { // 컴포넌트 언마운트 시 이벤트 리스너 제거
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Div>
      <GlobalStyle />
      <Top>
      <StyledCircleWrapper>
        <StyledSecondCircle/> {/* 그 위에 원 */}
        <StyledCircle /> {/* 맨 아래 원 */}
      </StyledCircleWrapper>
        <div>
            <WhiteText>국회의 일부가 되어 국회 의원이 되어보는 경험,</WhiteText>{" "}
            <GradientText> 방방국국!</GradientText>
            <SubT>
              가상 국회 의원으로서 법안을 발의하고, 토론에 참여하며, 투표하는 등의 다양한 활동을 체험할 수 있습니다.
            </SubT>
        </div>
        <Button onClick={moveToMain}>시작하기</Button>
      </Top>
      <RectArea>
        {rectData.map((data, index) => (
          <Rect
            key={index}
            title={data.title}
            content={data.content}
            image={data.image}
          />
        ))}
      </RectArea>
      <Arrow src={FluentArrow} onClick={handleScrollToTop} />
      {showFooter && <WebFooter />}
    </Div>
  );
};

const Rect = ({ title, content, image }) => (
  <StyledRect>
    <BillText className="bill-text">{title}</BillText>
    <NewText className="new-text">{title}</NewText>
    <NewSubText className="newSub-text">{content}</NewSubText>
    <RectImage className=" rect-image" src={image} alt={title} />
  </StyledRect>
);

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
  margin-top: 32px;
  white-space: pre-line; /* 줄 바꿈을 유지하도록 추가 */
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
    #FFC634 0%,
    #FFD34A 10%,
    #FFEA5F 30%,
    #FFF275 50%,
    #D8F5DD 100%
  );
  color: #5379C2;
  font-family: "Pretendard Variable";
  font-size: 25.2px;
  font-style: normal;
  font-weight: 800;
  line-height: 40px;
  text-align: center;
  margin-top: 65px;
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
    content: url(${(props) => props.image});
    display: block;
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.5s ease;
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
    .rect-image {
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
  }
`;

const StyledCircle = styled.div`
  position: relative;
  width: 2290px;
  height: 1000px;
  flex-shrink: 0;
  border-radius: 50%;
  opacity: 0.4;
  background: linear-gradient(180deg, rgba(246, 246, 246, 0.00) 54%, #F6F6F6 100%);
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
  width: 2290px;
  height: 1000px;
  flex-shrink: 0;
  border-radius: 50%;
  opacity: 0.4;
  background: linear-gradient(180deg, rgba(246, 246, 246, 0.00) 54%, #F6F6F6 100%);
  z-index: -2; /* 다른 요소보다 뒤에 위치하도록 설정 */
`;

const RectImage = styled.img`
  opacity: 0;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 0.5s ease;
  z-index: 0;
`;

const BillText = styled.div`
  opacity: 1;
  /* transition: opacity 1s ease; */
`;

const NewText = styled.div`
  opacity: 0;
  transition: opacity 0.5s ease;
  position: absolute;
  top: 12.5%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--Primary, #ffa130);
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
    #FFC634 0%,
    #FFD34A 10%,
    #FFEA5F 30%,
    #FFF275 50%,
    #D8F5DD 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const WhiteText = styled.span`
  color: white;
  font-family: "Pretendard Variable";
  font-size: 40px;
  font-weight: 800;
`;

export default WebOnBoarding;
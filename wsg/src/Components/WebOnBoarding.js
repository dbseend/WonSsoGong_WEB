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

      // 스크롤이 일정 높이 이상 내려갔을 때 Footer 표시
      if (scrolledHeight + windowHeight >= documentHeight) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Div>
      <GlobalStyle />
      <Top>
        <div>
          <Title>가상 국회 체험 서비스를 제공합니다.</Title>
          <SubT>
            사용자가 가상의 국회 의원이 되어 법안을 발의하고, 토론에 참여하며,
            투표를 진행하는 등의 활동을 체험할 수 있는 서비스. 국회의 의사결정
            과정의 이해와 정치적 관심을 높임
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
  margin-top: 168px;
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
  height: 60px;
  flex-shrink: 0;
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 25.2px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 32px;
`;

const Button = styled.div`
  width: 240px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 84px;
  background: #ffa438;
  color: #5379c2;
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

export default WebOnBoarding;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { makeBill } from "../../Api/Api";
import { useRecoilState } from "recoil";
import { billContent } from "../../Recoil/atom"; // atoms 파일 경로에 맞게 수정해주세요.
import Twinkle from "../../Assets/Twinkle.svg";
import smallBg from "../../Assets/bg1.svg";
import GlobalStyle from "../Etc/GlobalStyle";
import loading from "../../Assets/법안발의로딩페이지.svg";

const WebChapter12 = () => {
  const [keyword, setKeyword] = useState("");
  const [title, setTitle] = useState("");
  const [content, setcontent] = useState("");
  const [madeBill, setMadeBill] = useRecoilState(billContent);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const types = ["재난", "안전", "도시", "교통", "주민", "법률"];

  const navigate = useNavigate();

  const addBill = async (e) => {
    e.preventDefault();
    const isValid = validationCheck();

    if (isValid === true) {
      //기입 내용 모두 작성한 경우 api 호출
      setIsSubmitted(true);

      const userContent = `Keywords: ${keyword}\nTitle: ${title}\nDescription: ${content}`;
      makeBill(userContent).then((response) => {
        console.log(response);
        setMadeBill(response);
      });

      setTimeout(() => {
        //5초 대기(답변 생성 예상 시간) 후 페이지 이동
        navigate("/chapter1/3");
      }, 5 * 1000);
    }
  };

  const validationCheck = () => {
    if (keyword.trim() === "") {
      alert("주제를 선택해 주세요.");
      return false;
    }
    if (title.trim() === "") {
      alert("법안 주제를 입력해 주세요.");
      return false;
    }
    if (content.trim() === "") {
      alert("법안 주제를 설명해 주세요.");
      return false;
    }

    return true;
  };

  const handleKeywordChange = (type) => {
    setKeyword(type);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setcontent(e.target.value);
  };

  return (
    <>
      <GlobalStyle />
      <Div>
        {isSubmitted ? (
          <LoadingImage src={loading} alt="법안 분석" />
        ) : (
          <>
            <SmallBackground src={smallBg} />
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
                    {types.map((type) => (
                      <Type
                        key={type}
                        selected={keyword === type}
                        onClick={() => handleKeywordChange(type)}
                      >
                        {type}
                      </Type>
                    ))}
                  </TypeArea>
                  <Form1
                    value={title}
                    placeholder="법안 주제를 입력해주세요."
                    onChange={handleTitleChange}
                  />
                </Container>
              </Part1>
              <Part2>
                <SubTitle>법안 설명</SubTitle>
                <Form2
                  value={content}
                  placeholder="작성한 법안 주제를 설명해주세요."
                  onChange={handleContentChange}
                />
              </Part2>
              <ButtonContainer>
                <Button type="submit" onClick={addBill}>
                  <StyledTwinkle src={Twinkle} />
                  <div>AI로 완성하기</div>
                </Button>
              </ButtonContainer>
            </Body>
          </>
        )}
      </Div>
    </>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SmallBackground = styled.img`
  position: absolute;
  overflow: hidden;
  width: 1512px;
  min-height: 852px;
  height: 70%;
  z-index: -2;
  top: 0px;

  @media (min-width: 1512px) {
    width: 100%;
    height: auto;
  }
`;

const Part0 = styled.div`
  margin-top: 30px;
  z-index: 2;
  margin-left: -75%;
`;

const ChapTitle = styled.div`
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-left: 3px;
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
  background: #fff;
  margin-top: 18px;
`;

const Body = styled.div`
  /* margin-left: 5%; */
  display: flex;
  flex-direction: column;
  z-index: 2;
`;

const Part1 = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 32px;
  justify-content: center;
`;

const SubTitle = styled.div`
  color: var(--Primary, #ffc634);
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
  align-items: center;
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
  background: ${(props) =>
    props.selected ? "rgba(255, 198, 52, 0.7)" : "rgba(246, 246, 246, 0.3)"};
  text-align: center;
  line-height: 32px;
  color: ${(props) => (props.selected ? "#fff" : "#fff")};
  font-family: "Pretendard Variable";
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease, border 0.3s ease;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
`;

const Form1 = styled.textarea`
  width: 857px;
  height: 34px;
  flex-shrink: 0;
  border-radius: 2px;
  border: transparent;
  background: rgba(246, 246, 246, 0.3);
  margin-top: 18px;
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-left: 20px;
  padding-top: 12px;
  &::placeholder {
    color: #e7e7e7;
  }
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  resize: none;
`;

const Part2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 37px;
  margin-top: 32px;
  justify-content: center;
  margin-bottom: 60px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Button = styled.div`
  width: 1050px;
  height: 40px;
  flex-shrink: 0;
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
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
`;

const StyledTwinkle = styled.img`
  width: 30px;
  height: 30px;
  padding-top: 3px;
`;
const Form2 = styled.textarea`
  width: 857px;
  height: 292px;
  flex-shrink: 0;
  border-radius: 2px;
  border: transparent;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  background: rgba(246, 246, 246, 0.3);
  color: #ffffff;
  &::placeholder {
    color: #e7e7e7;
  }
  font-family: "Pretendard Variable";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  padding-left: 20px;
  padding-top: 12px;
  resize: none;
`;

const LoadingImage = styled.img`
  width: 70%;
  object-fit: cover;
  z-index: 9999; // 다른 요소 위에 표시되도록 z-index를 높게 설정합니다.
`;

export {
  Button,
  Hr,
  SmallBackground,
  Div,
  ChapTitle,
  Part0,
  Title,
  Type,
  TypeArea,
  SubTitle,
  Container,
  Part1,
};
export default WebChapter12;

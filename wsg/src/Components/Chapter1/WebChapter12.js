import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { createBill } from "../../Api/Api";
import Twinkle from "../../Assets/Twinkle.svg";
import smallBg from "../../Assets/bg1.svg";
import GlobalStyle from "../Etc/GlobalStyle";

const WebChapter12 = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [userBill, setUserBill] = useState({
    keyWord: "",
    title: "",
    content: "",
  });

  const navigate = useNavigate();

  const handleClick = (type) => {
    setSelectedType(type);
    setUserBill((prev) => ({
      ...prev,
      keyWord: type,
    }));
  };

  const addBill = async (e) => {
    try {
      e.preventDefault();
      // 입력했는지 확인
      if (userBill.keyWord.trim() === "") {
        alert("주제를 선택해 주세요.");
        return;
      }
      if (userBill.title.trim() === "") {
        alert("법안 주제를 입력해 주세요.");
        return;
      }
      if (userBill.content.trim() === "") {
        alert("법안 주제를 설명해 주세요.");
        return;
      }

      const billData = {
        keyWord: userBill.keyWord,
        title: userBill.title,
        content: userBill.content,
      };

      console.log("전송 데이터: ", billData);

      const response = await createBill(billData);
      alert("법안 주제가 입력되었습니다.");

      // 입력 내용 초기화
      setUserBill({
        keyWord: "",
        title: "",
        content: "",
      });
      setSelectedType(null);
      console.log(response);
    } catch (error) {
      console.error("법안 생성 중 오류 발생: ", error);
    }
  };
  return (
    <>
      <GlobalStyle />
      <Div>
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
              <Form1
                value={userBill.title}
                placeholder="법안 주제를 입력해주세요."
                onChange={(e) =>
                  setUserBill((prev) => ({
                    ...prev,
                    title: e.target.value,
                  }))
                }
              />
            </Container>
          </Part1>
          <Part2>
            <SubTitle>법안 설명</SubTitle>
            <Form2
              value={userBill.content}
              placeholder="작성한 법안 주제를 설명해주세요."
              onChange={(e) =>
                setUserBill((prev) => ({
                  ...prev,
                  content: e.target.value,
                }))
              }
            />
          </Part2>
          <ButtonContainer>
            <Button type="submit" onClick={addBill}>
              <StyledTwinkle src={Twinkle} />
              <div>AI로 완성하기</div>
            </Button>
          </ButtonContainer>
        </Body>
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
  margin-left: 55px;
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
  position: absolute;
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

export { Button, Hr, SmallBackground };
export default WebChapter12;

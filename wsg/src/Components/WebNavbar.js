import React, { useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { useRecoilState } from "recoil";
import { useNavigate, useLocation } from  "react-router-dom";

const WebNavbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleTutorial = () => {
        navigate("/tutorial");  // wirte페이지로 이동
    }
    const handleClick = () => {
        navigate("/board");  // board페이지로 이동
    };
    const handleChatbot = () => {
        navigate("/chat");  // chat페이지로 이동
    };
    const handleGoBack = () => { // 이전화면으로 이동
        navigate(-1);
    };
    const handleGoRoot = () => { // 첫화면으로 이동
        navigate("/");
    };

    return (
        <NavbarContainer>
            <Logo>로고</Logo>
            <ColorMenu onClick={handleGoRoot}>홈</ColorMenu>
            <Menu onClick={handleTutorial}>튜토리얼</Menu>
            <Menu>(서비스 이름)</Menu>
            <Menu>법안 분석</Menu>
            {/* <Menu onClick = {handleClick}>게시판</Menu> */}
            {/* <Menu onClick = {handleGoBack}>이전화면</Menu> */}
            {/* <Menu onClick = {handleGoRoot}>첫화면</Menu> */}
        </NavbarContainer>
    );
}

const NavbarContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 50px;
    flex-shrink: 0;
    background: rgba(43, 74, 154, 0.60);
    backdrop-filter: blur(10px);
    width: 100%;
    position: relative; /* 상대적인 위치 설정 */
`;

const Menu = styled.div`
    cursor: pointer;
    margin-left: 5px; /* 각 메뉴 사이의 간격 조정 */
    margin-right: 50px; /* 오른쪽 여백 설정 */
    color: white; /* 글자색 설정 */
    font-family: "Pretendard Variable";
    font-style: normal;
    line-height: normal;
`;
const ColorMenu = styled(Menu)`
    color: #FFA438;
`;

const Logo = styled.div`
  color: #FFA438;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-weight: bold;
  margin-right: auto;
  margin-left: 50px; /* 각 메뉴 사이의 간격 조정 */
`;

export default WebNavbar;
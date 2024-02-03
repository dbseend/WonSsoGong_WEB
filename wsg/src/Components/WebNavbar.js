import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from  "react-router-dom";
import GlobalStyle from "./GlobalStyle";

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
            <Menu onClick={handleGoRoot}>홈</Menu>
            <Menu onClick={handleTutorial}>튜토리얼</Menu>
            <ColorMenu>방방국국</ColorMenu>
            <Menu>법안 분석</Menu>
        </NavbarContainer>
    );
}

const NavbarContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 50px;
    flex-shrink: 0;
    background: var(--secondary-bg, #77A1F5);
    backdrop-filter: blur(10px);
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
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
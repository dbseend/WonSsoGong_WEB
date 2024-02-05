import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from  "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Logo from "../Assets/Logo.png";

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
            <LogoImage src={Logo} alt="Navbar Logo" />
            <Menu onClick={handleGoRoot} isActive={location.pathname === "/"}>
                홈
            </Menu>
            <Menu onClick={handleTutorial} isActive={location.pathname === "/tutorial" || location.pathname === "/tutorial2"
            || location.pathname === "/tutorial3" || location.pathname === "/tutorial4" || location.pathname === "/tutorial5"}>
                튜토리얼
            </Menu>
            <Menu isActive={location.pathname === "/board"}>법안 분석</Menu>
            <Menu onClick={handleClick} isActive={location.pathname === "/board"}>
                시작하기
            </Menu>
        </NavbarContainer>
    );
}

const NavbarContainer = styled.div`
    display: flex;
    position: relative;
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
    z-index: 1000;
`;

const Menu = styled.div`
    cursor: pointer;
    margin-left: 5px; /* 각 메뉴 사이의 간격 조정 */
    margin-right: 50px; /* 오른쪽 여백 설정 */
    color: white; /* 글자색 설정 */
    font-family: "Pretendard Variable";
    font-style: normal;
    line-height: normal;
    color: ${props => (props.isActive ? "#FFA438" : "white")};
`;

const ColorMenu = styled(Menu)`
    color: #FFA438;
`;

const LogoImage = styled.img`
    position: absolute; /* 상대적 위치 설정을 위해 */
    left: 2.5%; /* 왼쪽으로 10px 이동 */
    width: 10%;
    height: 80%;
`;

export default WebNavbar;
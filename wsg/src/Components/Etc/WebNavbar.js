import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../Assets/Logo.png";

const WebNavbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleTutorial = () => {
        navigate("/tutorial/1");  // wirte페이지로 이동
    }
    const handleClick = () => {
        navigate("/chapter1/1");  // board페이지로 이동
    };
    const handleBill = () => {
        navigate("/chapter4/1");  // chat페이지로 이동
    };
    const handleGoBack = () => { // 이전화면으로 이동
        navigate(-1);

    };
    const handleGoRoot = () => { // 첫화면으로 이동
        navigate("/");
    };

    return (
        <NavbarContainer>
            <LogoImage src={Logo} alt="Navbar Logo" onClick={handleGoRoot}/>
            <Menu onClick={handleGoRoot} isActive={location.pathname === "/"}>
                홈
            </Menu>
            <Menu onClick={handleTutorial} isActive={location.pathname === "/tutorial/1" || location.pathname === "/tutorial/2"
            || location.pathname === "/tutorial/3" || location.pathname === "/tutorial/4" || location.pathname === "/tutorial/5"
            || location.pathname === "/tutorial/6" || location.pathname === "/tutorial/7" || location.pathname === "/tutorial/8"
            || location.pathname === "/tutorial/9" || location.pathname === "/tutorial/10"}>
                튜토리얼
            </Menu>
            <Menu onClick={handleBill} isActive={location.pathname === "/chapter4/1" || location.pathname === "/chapter4/2"}>법안 분석</Menu>
            <Menu onClick={handleClick} isActive={location.pathname === "/chapter1/1" || location.pathname === "/chapter1/2"
            || location.pathname === "/chapter1/3" || location.pathname === "/chapter2/1" || location.pathname === "/chapter2/2"
            || location.pathname === "/chapter3/1" || location.pathname === "/chapter3/2" || location.pathname === "/chapter3/3"
            || location.pathname === "/chapter3/result1" || location.pathname === "/chapter3/result2" || location.pathname === "/chapter3/result3"}>
                시작하기
            </Menu>
        </NavbarContainer>
    );
}

const NavbarContainer = styled.div`
    display: flex;
    position: fixed;
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
    cursor: pointer;
    position: absolute; /* 상대적 위치 설정을 위해 */
    left: 2.5%; /* 왼쪽으로 10px 이동 */
    width: 150px;
    height: 45px;
`;

export default WebNavbar;
import React from "react";
import styled from "styled-components";

const WebFooter = () => {
    return (
        <FooterContainer>
            <Menu>© 2024 WonSsoGong. All rights reserved.</Menu>
        </FooterContainer>
    );
}

const FooterContainer = styled.div`
    display: flex;
    position: fixed;
    justify-content: center; /* 가운데 정렬을 위해 변경 */
    align-items: center;
    height: 40px; /* 높이 조정 */
    flex-shrink: 0;
    background: var(--secondary-bg, #77A1F5);
    backdrop-filter: blur(10px);
    width: 1450px;
    bottom: 0;
    left: 0;
`;

const Menu = styled.div`
    cursor: pointer;
    color: white;
    font-family: "Pretendard Variable";
    font-style: normal;
    line-height: 50px;
    margin-left: 5px;
    margin-right: 5px;
    font-size: 12px;
    display: flex;
    align-items: center; /* 수직으로 가운데 정렬 */
    justify-content: center; /* 수평으로 가운데 정렬 */
`;

export default WebFooter;
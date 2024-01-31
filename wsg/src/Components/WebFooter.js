import React, { useState } from "react";
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
    justify-content: center; /* 가운데 정렬을 위해 변경 */
    align-items: center;
    height: 40px; /* 높이 조정 */
    flex-shrink: 0;
    background: #5379c2;
    backdrop-filter: blur(10px);
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
`;

const Menu = styled.div`
    cursor: pointer;
    color: white; /* 글자색 설정 */
    font-family: "Pretendard Variable";
    font-style: normal;
    height: 100%; /* 높이를 100%로 설정 */
    display: flex;
    align-items: center; /* 상하 중앙 정렬 */
    margin: 0 10px; /* 좌우 간격 조정 */
    font-size: 10px;
    text-align: center; /* 텍스트 가운데 정렬 */
`;

export default WebFooter;
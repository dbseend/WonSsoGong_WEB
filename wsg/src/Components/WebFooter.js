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
    line-height: 50px; /* 부모인 FooterContainer의 높이와 동일하게 맞춤 */
    margin-left: 5px; /* 왼쪽 여백 조정 */
    margin-right: 50px; /* 오른쪽 여백 조정 */
    font-size: 10px;
`;

export default WebFooter;
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { billContent } from "../../Recoil/atom"; // atoms 파일 경로에 맞게 수정해주세요.

const WebChapter13 = () => {
  const [madeBill, setMadeBill] = useRecoilState(billContent);

  console.log(madeBill);
  
  return (
    <>
      <h1>나는</h1>
      <h1>윤성현</h1>
      <h1>냠냠</h1>
      <p>{madeBill}</p>
    </>
  );
};

export default WebChapter13;

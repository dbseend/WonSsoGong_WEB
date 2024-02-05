import { atom } from "recoil";

//ai를 통해 생성된 법률안 정보
export const billContent = atom({
  key: "billContent",
  default: "",
});

//사용자와 ai 국회의원의 토론 기록
export const debateContents = atom({
  key: "debateContents",
  default: "",
});

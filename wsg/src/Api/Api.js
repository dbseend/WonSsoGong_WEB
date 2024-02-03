import axios from "axios";

export const createBill = async (data) => {
  const response = await axios.post(`${process.env.REACT_APP_URL}/bot`, data
  // {
    // keyWord: "재난, 예방, 대응, 복구, 국민 안전, 정책, 법률안",
    // title: "국민의 생명과 재산을 보호하기 위한 재난 관리 통합 법률안 제정",
    // content:
    //   "본 법률안은 재난에 대한 효율적인 예방, 대응, 복구를 위한 체계적인 정책 구축을 목표로 합니다. 최근 증가하는 자연 재난 및 인공 재난에 대비하여 국민의 생명과 재산을 보호하고, 재난 발생 시 신속하고 효과적인 대응을 위한 법적 기반을 마련하는 것이 필요하다는 판단하에 제안하게 되었습니다. 또한, 재난 관련 정보의 투명한 공개와 국민들의 재난에 대한 이해를 높이는 교육을 강화하며, 이를 통해 사회 전체가 재난에 대응할 수 있는 역량을 갖추도록 돕는 것을 목표로 합니다",
  // }
  );
  console.log(response.data);
  return (response.data);
};

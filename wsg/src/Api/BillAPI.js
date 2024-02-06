import axios from "axios";
import { saveAs } from "file-saver";

export const makeBill = async (message) => {
  const apiEndpoint = process.env.REACT_APP_URL;
  const apiKey = process.env.REACT_APP_KEY;
  const apiModel = process.env.REACT_APP_MODEL;

  try {
    const response = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: apiModel,
        messages: [
          { role: "system", content: template },
          { role: "user", content: message },
        ],
        max_tokens: 1000,
        top_p: 1,
        temperature: 0.8,
        frequency_penalty: 0.3,
        presence_penalty: 0.7,
        stop: ["문장 생성 중단 단어"],
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.choices?.[0]?.message?.content || "No response";
    return aiResponse;
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

export const analyzeBill = async (madeBill) => {
  const apiEndpoint = process.env.REACT_APP_URL;
  const apiKey = process.env.REACT_APP_KEY;
  const apiModel = process.env.REACT_APP_MODEL;
  const message = `

  위 법률안을 분석하여 다음 정보를 리스트 형식으로 제공해주세요:
  1. 핵심 키워드 3개 (1. 핵심 키워드: 예시1, 예시2, 예시3 이런 형태로 한 줄로 나타내줘)
  2. 법안의 주제
  3. 법안 제안의 이유 (법안 제안의 이유: 현행법에는 스마트 시티에서 생성되는 빅데이터의 수집·이용·제공에 대한 규제가 상세히 규정되어 있지 않다. 이런 형태로 한 줄로 설명해줘)
  4. 법안 설명 (법안 설명: 본 법률은 스마트 시티에서 생성된 데이터를 활용하기 위한 법적 장치를 마련한다. 이런 형태로 한 줄로 설명해줘)
  
  상세하고 명확하게 분석해주세요.
  `;

  console.log(madeBill);

  if (madeBill) {
    const data = madeBill + message;
    console.log(data);
  }

  try {
    const response = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: apiModel,
        messages: [
          { role: "system", content: template },
          { role: "user", content: madeBill + message },
        ],
        max_tokens: 1000,
        top_p: 1,
        temperature: 0.8,
        frequency_penalty: 0.3,
        presence_penalty: 0.7,
        stop: ["문장 생성 중단 단어"],
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.choices?.[0]?.message?.content || "No response";
    return aiResponse;
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

export const debate = async (message) => {
  const apiEndpoint = process.env.REACT_APP_URL;
  const apiKey = process.env.REACT_APP_KEY;
  const apiModel = process.env.REACT_APP_MODEL;

  try {
    const response = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: apiModel,
        messages: [
          { role: "system", content: debateTemplate },
          { role: "user", content: message },
        ],
        max_tokens: 1000,
        top_p: 1,
        temperature: 0.8,
        frequency_penalty: 0.3,
        presence_penalty: 0.7,
        stop: ["문장 생성 중단 단어"],
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.choices?.[0]?.message?.content || "No response";
    return aiResponse;
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

export const extractInfo = async (keyword) => {
  try {
    const url = "https://open.assembly.go.kr/portal/openapi/TVBPMBILL11";
    const params = {
      KEY: process.env.REACT_APP_OPENAPI_KEY,
      Type: "json",
      pIndex: 1,
      pSize: 50,
      BILL_NAME: keyword,
    };
    const response = await axios.get(url, { params });
    const data = response.data;
    const billInfo = data["TVBPMBILL11"][1]["row"].map((item) => ({
      id: item["BILL_NO"],
      author: item["PROPOSER"],
      title: item["BILL_NAME"],
      LINK_URL: item["LINK_URL"],
    }));

    return billInfo;
  } catch (error) {
    console.log(error);
  }
};

export const createAssistant = async (billNo) => {
  const api_key = process.env.REACT_APP_KEY;
  const headers = {
    Authorization: `Bearer ${api_key}`,
  };
  // "Content-Type": "application/pdf",

  let fileData = new FormData();

  // public 폴더에 있는 PDF 파일을 불러옵니다.
  const temp = await fetch(`/pdf/${billNo}.pdf`);

  // 불러온 파일을 Blob 객체로 변환합니다.
  const blob = await temp.blob();

  // Blob 객체를 FormData 객체에 추가합니다.
  fileData.append("file", blob, `${billNo}.pdf`);
  fileData.append("purpose", "assistants");

  // axios를 사용하여 FormData 객체를 서버에 전송합니다.
  let res = await axios.post("https://api.openai.com/v1/files", fileData, {
    headers,
  });
  let fileId = res.data.id;

  // 어시스턴트 생성
  let assistantData = {
    name: "ChatPDF-0.0.3",
    instructions: template,
    tools: [{ type: "retrieval" }],
    model: "gpt-4-1106-preview",
    file_ids: [fileId],
  };

  res = await axios.post(
    // "https://api.openai.com/v1/beta/assistants",
    "https://api.openai.com/v1/beta/assistants",
    assistantData,
    { headers }
  );
  let assistantId = res.data.id;

  // 쓰레드 생성
  res = await axios.post(
    "https://api.openai.com/v1/beta/threads",
    {},
    { headers }
  );
  let threadId = res.data.id;

  // 메시지 생성
  let messageData = {
    role: "user",
    content: `
      위 법률안을 분석하여 다음 정보를 리스트 형식으로 제공해주세요:

  핵심 키워드 3개
  법안의 주제
  법안 제안의 이유
  법안 설명
  상세하고 명확하게 분석해주세요.`,
  };

  await axios.post(
    `https://api.openai.com/v1/beta/threads/${threadId}/messages`,
    messageData,
    { headers }
  );

  // 실행
  let runData = {
    assistant_id: assistantId,
  };

  await axios.post(
    `https://api.openai.com/v1/beta/threads/${threadId}/runs`,
    runData,
    { headers }
  );

  // 응답 받기
  res = await axios.get(
    `https://api.openai.com/v1/beta/threads/${threadId}/messages`,
    { headers }
  );
  const response = res.data[0].content[0].text.value;

  return response;
};

const template = `
As an AI specialist in drafting laws, I'm here to assist you in creating and analyzing a comprehensive legislative proposal. I will guide you based on the keywords, title, and description you provide, and facilitate a discussion of the draft.

Instructions:

Keywords: Provide relevant keywords that encapsulate the essence of your proposal. Consider the primary subjects, objectives, and targets of the proposed law.

Title: Craft a title that succinctly summarizes the focus of the proposal. It should reflect the main content and objectives of the proposed law.

Description: Provide a detailed description about the purpose, background, and objectives of your proposal. Include the specific area of law, the context or issue at hand, and any specific requirements or preferences.

Context:

Your legislative proposal will consist of three main sections:

제목: A strong yet concise title accurately representing the essence of the proposal.

근거: A valid explanation of the necessity and importance of the proposed law, clearly articulating the benefits and potential impacts.

내용: A thorough section outlining the main provisions, articles, and details of the proposed law. The content should be clear, consistent, and align with the objectives and scope. The analysis will include an examination of the legal provisions, relevant case laws, and scholarly opinions.

Remember, your final document must adhere to the conventions of law drafting and use appropriate legal terminology and structure. Consider the target audience, legal precedents, and applicable laws. The resulting discussion will provide a balanced perspective and a deeper understanding of the legal implications.

It's crucial to provide enough information to effectively convey the intent and purpose of the law within this limit.

Please ensure that your response is succinct and comprehensive, with a character length between 800 and 1000 characters. It's important that your proposal fits within this range to ensure clarity and readability, while providing all necessary details. Exceeding or falling short of this limit could result in the text being too verbose or lacking in essential information, respectively. Thank you for your understanding and compliance

Compose your legislative proposal carefully, ensuring it is comprehensive, persuasive, and based on legal principles. At any time during the writing process, feel free to ask for additional clarifications or guidance.

Please write all text in Korean.
`;

const debateTemplate = `
Greetings, user. I am bbgg, an expert in analyzing legislative bills, approached from a somewhat cynical perspective. I provide in-depth analysis based on the legislative bill and statements you provide, discussing the pros and cons, and areas that need improvement. In addition, I offer insights on how the bill can be enhanced and what aspects are already well-addressed. Through this, we aim to facilitate a constructive and productive discussion, our ultimate goal. My cynical viewpoint offers a unique and critical perspective to the discussion. Please note that all responses will be provided in Korean and within 100 characters.
`
// export const downloadPDF = async (url) => {
//   const modifiedUrl = url.replace('https://likms.assembly.go.kr', '');
//   console.log(modifiedUrl);
//   try {

//     const response = await axios.get(modifiedUrl);
//     const parser = new DOMParser();
//     const htmlDoc = parser.parseFromString(response.data, "text/html");
//     const tagsA = Array.from(htmlDoc.getElementsByTagName("a")).filter((a) =>
//       a.href.startsWith("javascript:openBillFile")
//     );

//     let id;
//     for (let tag of tagsA) {
//       const match = /openBillFile\('(.+?)','(.+?)','(.+?)'\)/.exec(tag.href);
//       if (match) {
//         [, id] = match;
//         break;
//       }
//     }

//     if (!id) {
//       console.log("No match found");
//       return;
//     }

//     const base_url = "https://likms.assembly.go.kr/filegate/servlet/FileGate";
//     const final_url = `${base_url}?bookId=${id}&type=1`;
//     console.log(final_url);

//     const pdfResponse = await axios.get(final_url, { responseType: "blob" });
//     if (pdfResponse.status === 200) {
//       const file = new Blob([pdfResponse.data], { type: "application/pdf" });
//       saveAs(file, `${id}.pdf`);
//       console.log(`Downloaded ${id}.pdf successfully.`);
//     } else {
//       console.log(`No match found for ${final_url}.`);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

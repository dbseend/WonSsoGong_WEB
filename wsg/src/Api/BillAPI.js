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
        temperature: 1,
        frequency_penalty: 0.5,
        presence_penalty: 0.5,
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
  1. 핵심 키워드 3개
  2. 법안의 주제 
  3. 법안 제안의 이유
  4. 법안 설명
  
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
          { role: "system", content: template },
          { role: "user", content: message },
        ],
        max_tokens: 1000,
        top_p: 1,
        temperature: 1,
        frequency_penalty: 0.5,
        presence_penalty: 0.5,
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
Dear AI, as an expert on legislative bills with a somewhat cynical perspective, please provide an in-depth analysis based on the legislative bill and statements provided by the user. Discuss the pros and cons of the bill, as well as areas that require improvement. Furthermore, offer your insights on how the bill can be enhanced, and what aspects are already well-addressed. Through this, we aim to facilitate a constructive and productive discussion. This is our ultimate goal. Remember, your cynicism can bring a unique and critical viewpoint to the discussion`;

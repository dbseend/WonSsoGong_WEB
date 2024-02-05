import axios from "axios";

export const createBill = async (data) => {
  try {
    console.log(data);
    const response = await axios.post(
      `${process.env.REACT_APP_URL}/chat/bill`,
      data
    );
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error("Error creating bill:", error);
    throw error;
  }
};

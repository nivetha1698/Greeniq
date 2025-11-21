import { axiosClient } from "./axiosClient";

export const sendContactMessage = async (form) => {
  const response = await axiosClient.post("/api/v1/contact_messages", {
    contact_message: form
  });
  return response.data;
};

import { Message } from "@/features/messages/types";
import api from "./api";
import { TmessageSchema } from "@/schema/message";

type MessagesData = {
  messages: Message[];
  message: string;
};
type MessageData = {
  message: Message;
};

export async function getMessages() {
  try {
    return (await api.get<MessagesData>("/messages")).data.messages;
  } catch (error: any) {
    // console.error("Error:", error);
    throw new Error(
      error.response?.data?.message || "Error fetching Messages.",
    );
  }
}

export async function getMessage(id: string) {
  try {
    return (await api.get<MessageData>(`/messages/${id}`)).data.message;
  } catch (error: any) {
    // console.error("Error:", error);

    throw new Error(error.response?.data?.message || "Error fetching Message.");
  }
}

export async function createMessage(data: TmessageSchema) {
  try {
    await api.post("/messages", data);
  } catch (error: any) {
    // console.error("Error sending Message", error);
    throw new Error(error.response?.data?.message || "Error sending Message");
  }
}

export async function deleteMessage(id: string) {
  try {
    await api.delete(`/messages/${id}`);
  } catch (error: any) {
    // console.error("Error deleting message:", error);
    throw new Error(error.response?.data?.message || "Error message faq.");
  }
}

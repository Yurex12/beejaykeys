import { Faq } from "@/features/AdminFaqs/types";
import api from "./api";
import { TfaqSchema } from "@/schema/faqSchema";

type FaqData = {
  message: string;
  faqs: Faq[];
};

type TestimonialData = {
  message: string;
  faq: Faq;
};

export async function getFaqs() {
  try {
    return (await api.get<FaqData>("/faqs")).data.faqs;
  } catch (error: any) {
    console.error("Error:", error);

    throw new Error(error.response?.data?.message || "Error fetching faqs.");
  }
}

export async function getFaq(id: string) {
  try {
    return (await api.get<TestimonialData>(`/faqs/${id}`)).data.faq;
  } catch (error: any) {
    console.error("Error:", error);

    throw new Error(error.response?.data?.message || "Error fetching faq.");
  }
}

export async function createFaq(data: TfaqSchema) {
  // await new Promise((res) => setTimeout(res, 3000));
  try {
    await api.post("/faqs", data);
  } catch (error: any) {
    console.error("Error creating faq:", error);
    throw new Error(error.response?.data?.message || "Error creating faq.");
  }
}

export async function editFaq(data: TfaqSchema, id: string) {
  try {
    await api.put(`/faqs/${id}`, data);
  } catch (error: any) {
    console.error("Error editing faq:", error);
    throw new Error(error.response?.data?.message || "Error editing faq.");
  }
}

export async function deleteFaq(id: string) {
  try {
    // await new Promise((res) => setTimeout(res, 10000));
    await api.delete(`/faqs/${id}`);
  } catch (error: any) {
    console.error("Error deleting faqs:", error);
    throw new Error(error.response?.data?.message || "Error deleting faq.");
  }
}

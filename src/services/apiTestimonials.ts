import api from "./api";

import { Testimonial } from "@/features/AdminTestimonials/types";

import { TtestimonialData } from "@/schema/testimonialSchema";

type TestimonialsData = {
  message: string;
  testimonials: Testimonial[];
};

type TestimonialData = {
  message: string;
  testimonial: Testimonial;
};

export async function getTestimonials() {
  try {
    return (await api.get<TestimonialsData>("/testimonials")).data.testimonials;
  } catch (error: any) {
    console.error("Error:", error);

    throw new Error(
      error.response?.data?.message || "Error fetching testminonials.",
    );
  }
}

export async function getTestimonial(id: string) {
  try {
    return (await api.get<TestimonialData>(`/testimonials/${id}`)).data
      .testimonial;
  } catch (error: any) {
    console.error("Error:", error);

    throw new Error(
      error.response?.data?.message || "Error fetching testminonials.",
    );
  }
}

export async function createTestimonial(data: TtestimonialData) {
  // await new Promise((res) => setTimeout(res, 3000));
  try {
    await api.post("/testimonials", data);
  } catch (error: any) {
    console.error("Error creating testimonial:", error);
    throw new Error(
      error.response?.data?.message || "Error creating testminonials.",
    );
  }
}

export async function editTestimonial(data: TtestimonialData, id: string) {
  try {
    await api.put(`/testimonials/${id}`, data);
  } catch (error: any) {
    console.error("Error editing testimonial:", error);
    throw new Error(
      error.response?.data?.message || "Error editing testminonials.",
    );
  }
}

export async function deleteTestimonial(id: string) {
  try {
    // await new Promise((res) => setTimeout(res, 10000));
    await api.delete(`/testimonials/${id}`);
  } catch (error: any) {
    console.error("Error deleting testimonials:", error);
    throw new Error(
      error.response?.data?.message || "Error deleting testminonial.",
    );
  }
}

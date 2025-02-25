import axios from "axios";

const url = "http://localhost:8080/api/testimonials";

export async function getTestimonials() {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error: any) {
    console.error("Error:", error);

    throw new Error(
      error.response?.data?.message || "Error fetching testminonials.",
    );
  }
}

export async function getTestimonial(id: string) {
  try {
    const { data } = await axios.get(`${url}/${id}`);
    return data;
  } catch (error: any) {
    console.error("Error:", error);

    throw new Error(
      error.response?.data?.message || "Error fetching testminonials.",
    );
  }
}

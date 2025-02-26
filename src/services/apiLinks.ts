import api from "./api";

// const url = "http://localhost:8080/api/links";

export async function getLinks() {
  try {
    const { data } = await api.get("/links");
    return data;
  } catch (error: any) {
    console.error("Error:", error);

    throw new Error(error.response?.data?.message || "Error fetching links.");
  }
}

export async function getLink(name: string) {
  try {
    const { data } = await api.get(`/links/${name}`);
    return data;
  } catch (error: any) {
    console.error("Error:", error);

    throw new Error(error.response?.data?.message || "Error fetching Link.");
  }
}

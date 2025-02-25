import axios from "axios";

const url = "http://localhost:8080/api/links";

export async function getLinks() {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error: any) {
    console.error("Error:", error);

    throw new Error(error.response?.data?.message || "Error fetching links.");
  }
}

export async function getLink(name: string) {
  try {
    const { data } = await axios.get(`${url}/${name}`);
    return data;
  } catch (error: any) {
    console.error("Error:", error);

    throw new Error(error.response?.data?.message || "Error fetching Link.");
  }
}

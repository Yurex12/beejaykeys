import axios from "axios";

const url = "http://localhost:8080/api/services";

export async function getServices() {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error: any) {
    console.error("Error:", error);

    throw new Error(
      error.response?.data?.message || "Error fetching services.",
    );
  }
}

export async function getService(id: string) {
  try {
    const { data } = await axios.get(`${url}/${id}`);
    return data;
  } catch (error: any) {
    console.error("Error:", error);

    throw new Error(error.response?.data?.message || "Error fetching Service.");
  }
}

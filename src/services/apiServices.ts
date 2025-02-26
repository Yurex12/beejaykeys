import api from "./api";

export async function getServices() {
  try {
    const { data } = await api.get("/services");
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
    const { data } = await api.get(`services/${id}`);
    return data;
  } catch (error: any) {
    console.error("Error:", error);

    throw new Error(error.response?.data?.message || "Error fetching Service.");
  }
}

// export async function createItem(data) {
//   try {
//     // The interceptor adds the Authorization header automatically
//     const response = await api.post('/services', {});
//     return response.data;
//   } catch (error: any) {
//     console.error('Error creating item:', error);
//     throw error;
//   }
// }

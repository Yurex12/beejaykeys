// api.ts
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.PROD ? "/api" : import.meta.env.VITE_BACKEND_API_URI,
  withCredentials: true,
});

export default api;

import { TUserSchema } from "../schema/userSchema";
import api from "./api";

export async function login({ email, password }: Partial<TUserSchema>) {
  // await new Promise((res) => setTimeout(res, 10000));
  try {
    const { data } = await api.post(`users/login`, { email, password });
    console.log(data);

    return data;
  } catch (error: any) {
    console.error("Login error:", error);

    throw new Error(error.response?.data?.message || "Login failed");
  }
}

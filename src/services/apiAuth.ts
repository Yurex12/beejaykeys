import axios from "axios";

import { TUserSchema } from "../schema/userSchema";

const url = "http://localhost:8080/api/users";

export async function login({ email, password }: Partial<TUserSchema>) {
  await new Promise((res) => setTimeout(res, 10000));
  try {
    const res = await axios.post(`${url}/login`, { email, password });

    return res.data;
  } catch (error: any) {
    console.error("Login error:", error);

    throw new Error(error.response?.data?.message || "Login failed");
  }
}

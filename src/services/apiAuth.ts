import { User, UserPasswordData } from "@/features/auth/types";
import { TUpdateUserSchema, TUserSchema } from "../schema/userSchema";
import api from "./api";

type UserData = { message: string; user: User };

export async function login({ email, password }: Partial<TUserSchema>) {
  try {
    return (await api.post<UserData>(`/users/login`, { email, password })).data
      .user;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
}

export async function logout() {
  try {
    return (await api.post<{ message: string }>("/users/logout")).data;
  } catch (error: any) {
    // console.error("Logout error:", error);

    throw new Error(error.response?.data?.message || "Logout failed");
  }
}

export async function updateUserInfo(data: TUpdateUserSchema) {
  const formData = new FormData();

  formData.append("email", data.email);
  formData.append("username", data.username);
  if (typeof data.image !== "string") {
    formData.append("image", data.image);
  }

  try {
    return (await api.patch<UserData>(`/users/update-info`, formData)).data
      .user;
  } catch (error: any) {
    // console.error("Error updating user info.:", error);

    throw new Error(
      error.response?.data?.message || "Error updating user info.",
    );
  }
}

export async function updateUserPassword(data: UserPasswordData) {
  try {
    return (
      await api.patch<{ message: string }>(`/users/update-password`, data)
    ).data;
  } catch (error: any) {
    // console.error("Error updating password.:", error);

    throw new Error(
      error.response?.data?.message || "Error updating password.",
    );
  }
}

export async function getUserData() {
  try {
    return (await api.get<UserData>(`/users/user-data`)).data.user;
  } catch (error: any) {
    // console.error("Error getting user data:", error);

    throw new Error(
      error.response?.data?.message || "Error getting user data.",
    );
  }
}

import { v4 as uuidv4 } from "uuid";

import api from "./api";
import { Stats } from "@/features/Overview/types";

const statsId = "67f8aa9cb72c8460f2f65c60";

export async function getStats() {
  try {
    return (await api.get<Stats>(`/stats/${statsId}`)).data;
  } catch (error: any) {
    // console.error("Something went wrong", error);
    // throw new Error(error.response?.data?.message || "Error fetching stats.");
  }
}

export async function updateStats() {
  let deviceId = localStorage.getItem("deviceId");

  if (!deviceId) {
    deviceId = uuidv4();
    localStorage.setItem("deviceId", deviceId);
  }

  try {
    return (await api.post<Stats>(`/stats/${statsId}`, { ipAddress: deviceId }))
      .data;
  } catch (error) {
    // console.error("Something went wrong", error);
  }
}

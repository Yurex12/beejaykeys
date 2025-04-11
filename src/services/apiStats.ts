import { v4 as uuidv4 } from "uuid";

import api from "./api";
import { Stats } from "@/features/Overview/types";

const statsId = "67f8aa9cb72c8460f2f65c60";

export async function getStats() {
  try {
    return (await api.get<Stats>(`/stats/${statsId}`)).data;
  } catch (error) {
    console.error("Something went wrong", error);
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
    console.error("Something went wrong", error);
  }
}

// export async function getIpAddress() {
//   try {
//     return (
//       await axios.get<{ ip: string }>("https://api64.ipify.org?format=json")
//     ).data.ip;
//   } catch (error) {
//     console.error("Error fetching IP:", error);
//   }
// }

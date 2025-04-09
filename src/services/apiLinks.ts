import { Link } from "@/features/AdminLinks/types";
import { TlinkSchema } from "@/schema/linkSchema";
import api from "./api";

type LinksData = {
  links: Link[];
  message: string;
};
type LinkData = {
  link: Link;
  message: string;
};

export async function getLinks() {
  try {
    return (await api.get<LinksData>("/links")).data.links;
  } catch (error: any) {
    console.error("Error:", error);

    throw new Error(error.response?.data?.message || "Error fetching links.");
  }
}

export async function getLink(id: string) {
  try {
    return (await api.get<LinkData>(`/links/${id}`)).data.link;
  } catch (error: any) {
    console.error("Error:", error);

    throw new Error(error.response?.data?.message || "Error fetching Link.");
  }
}

export async function editLink(data: TlinkSchema, id: string) {
  console.log(data, id);

  try {
    await api.put(`/links/${id}`, data);
  } catch (error: any) {
    console.error("Error updating link", error);
    throw new Error(error.response?.data?.message || "Error updating link");
  }
}

import api from "./api";

import { TserviceSchema } from "@/schema/serviceSchema";

import { Service } from "@/features/AdminServices/types";

type ServicesData = {
  services: Service[];
  message: string;
};
type ServiceData = {
  service: Service;
  message: string;
};

export async function getServices() {
  try {
    return (await api.get<ServicesData>("/services")).data.services;
  } catch (error: any) {
    console.error("Error:", error);

    throw new Error(
      error.response?.data?.message || "Error fetching services.",
    );
  }
}

export async function getService(id: string) {
  try {
    return (await api.get<ServiceData>(`/services/${id}`)).data.service;
  } catch (error: any) {
    console.error("Error:", error);

    throw new Error(error.response?.data?.message || "Error fetching Service.");
  }
}

export async function editService(data: TserviceSchema, id: string) {
  try {
    await api.put(`/services/${id}`, data);
  } catch (error: any) {
    console.error("Error updating service", error);
    throw new Error(error.response?.data?.message || "Error updating service");
  }
}

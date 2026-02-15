import api from "./api";

import { Project } from "@/features/AdminProjects/types";
import { TprojectSchema } from "@/schema/projectSchema";

type ProjectsData = {
  message: string;
  projects: Project[];
};

type ProjectData = {
  message: string;
  project: Project;
};

export async function getProjects() {
  try {
    return (await api.get<ProjectsData>("/projects")).data.projects;
  } catch (error: any) {
    // console.error("Error:", error);

    throw new Error(
      error.response?.data?.message || "Error fetching Projects.",
    );
  }
}

export async function getProject(id: string) {
  try {
    return (await api.get<ProjectData>(`/projects/${id}`)).data.project;
  } catch (error: any) {
    // console.error("Error:", error);
    throw new Error(error.response?.data?.message || "Error fetching Project.");
  }
}

export async function createProject(data: TprojectSchema) {
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("description", data.description);
  formData.append("workedAs", JSON.stringify(data.workedAs));
  formData.append("status", data.status);
  formData.append("pitch", data.pitch);
  formData.append("image", data.image);

  try {
    await api.post("/projects", formData);
  } catch (error: any) {
    // console.error("Error creating Project:", error);
    throw new Error(error.response?.data?.message || "Error creating Project.");
  }
}

export async function editProject(data: TprojectSchema, id: string) {
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("description", data.description);
  formData.append("workedAs", JSON.stringify(data.workedAs));
  formData.append("status", data.status);
  formData.append("pitch", data.pitch);

  if (typeof data.image !== "string") {
    formData.append("image", data.image);
  }

  try {
    await api.put(`/projects/${id}`, formData);
  } catch (error: any) {
    // console.error("Error editing Project:", error);
    throw new Error(error.response?.data?.message || "Error editing Project.");
  }
}

export async function deleteProject(id: string) {
  try {
    await api.delete(`/projects/${id}`);
  } catch (error: any) {
    // console.error("Error deleting Projects:", error);
    throw new Error(error.response?.data?.message || "Error deleting Project.");
  }
}

export async function incrementProjectViews(projectId: string) {
  try {
    return (
      await api.patch<ProjectData>(`/projects/increment-views/${projectId}`)
    ).data.project;
  } catch (error: any) {
    // console.error("Failed to increment view count:", error);
  }
}

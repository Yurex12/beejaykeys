import { Project } from "@/features/AdminProjects/types";
import { TprojectSchema } from "@/schema/projectSchema";
import api from "./api";

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
    console.error("Error:", error);

    throw new Error(
      error.response?.data?.message || "Error fetching Projects.",
    );
  }
}

export async function getProject(id: string) {
  try {
    return (await api.get<ProjectData>(`/projects/${id}`)).data.project;
  } catch (error: any) {
    console.error("Error:", error);

    throw new Error(error.response?.data?.message || "Error fetching Project.");
  }
}

export async function createProject(data: TprojectSchema) {
  // await new Promise((res) => setTimeout(res, 3000));
  try {
    await api.post("/projects", data);
  } catch (error: any) {
    console.error("Error creating Project:", error);
    throw new Error(error.response?.data?.message || "Error creating Project.");
  }
}

export async function editProject(data: TprojectSchema, id: string) {
  try {
    await api.put(`/projects/${id}`, data);
  } catch (error: any) {
    console.error("Error editing Project:", error);
    throw new Error(error.response?.data?.message || "Error editing Project.");
  }
}

export async function deleteProject(id: string) {
  try {
    // await new Promise((res) => setTimeout(res, 10000));
    await api.delete(`/projects/${id}`);
  } catch (error: any) {
    console.error("Error deleting Projects:", error);
    throw new Error(error.response?.data?.message || "Error deleting Project.");
  }
}

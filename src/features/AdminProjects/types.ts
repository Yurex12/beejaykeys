import { Tag } from "react-tag-input";

export type Project = {
  _id: string;
  name: string;
  description: string;
  workedAs: Tag[];
  image: string;
  status: "done" | "in-progress";
  views: number;
  pitch: string;
  createdAt: string;
  updatedAt: string;
};

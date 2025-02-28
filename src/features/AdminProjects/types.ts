export type Project = {
  _id: string;
  name: string;
  description: string;
  workedAs: string;
  imageUrl: string;
  status: "done" | "in-progress";
  pitch: string;
};

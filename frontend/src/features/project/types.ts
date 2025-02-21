export type Project = {
  id: number;
  name: string;
  desc: string;
  workedAs: string[];
  imageUrl: string;
  status: "done" | "in-progress";
  solution: string;
  result: string;
  problem: string;
  conclusion: string;
};

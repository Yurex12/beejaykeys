import { ReactElement } from "react";

export type Service = {
  id: number;
  imageUrl: ReactElement;
  title: string;
  description: string;
};

export type ServicesType = Service[];

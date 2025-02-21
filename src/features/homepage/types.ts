import { ReactElement, ReactNode } from "react";

export type CardProps = {
  icon: ReactElement;
  title: string;
  description: string;
  children?: ReactNode;
};

export type Metric = {
  value: string;
  title: string;
};

export type Service = CardProps & { roles: string[] };

export type Testimonial = {
  id: number;
  name: string;
  review: string;
  color: string;
};

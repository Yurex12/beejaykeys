import { HiLightBulb, HiUsers, HiPaperAirplane } from "react-icons/hi";

import { WorkFlowsType } from "../types";

export const workflows: WorkFlowsType = [
  {
    icon: <HiLightBulb />,
    title: "Discover",
    description:
      "Engage clients in initial consultations to define project boundaries and set realistic objectives.",
  },
  {
    icon: <HiUsers />,
    title: "Collaborate",
    description:
      "We deliver your project with ease, keeping you informed every step of the way. Partner with us for a stress-free experience.",
  },
  {
    icon: <HiPaperAirplane />,
    title: "Deliver",
    description:
      "We strive for perfection. Review, revise, and approve your project – we're committed to exceeding your expectations.",
  },
];

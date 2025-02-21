import {
  HiLightBulb,
  HiOutlineChartBar,
  HiOutlineUserGroup,
  HiPaperAirplane,
  HiUsers,
} from "react-icons/hi";

import {
  HiOutlineMegaphone,
  HiOutlineEye,
  HiOutlineGlobeAlt,
  HiOutlineLightBulb,
  HiOutlineShieldCheck,
} from "react-icons/hi2";
import { CardProps, Metric, Service, Testimonial } from "../types";

export const workflows: CardProps[] = [
  {
    icon: <HiLightBulb className="text-indigo-400" />,
    title: "Discover",
    description:
      "Engage clients in initial consultations to define project boundaries and set realistic objectives.",
  },
  {
    icon: <HiUsers className="text-pink-400" />,
    title: "Collaborate",
    description:
      "We deliver your project with ease, keeping you informed every step of the way. Partner with us for a stress-free experience.",
  },
  {
    icon: <HiPaperAirplane className="text-green-400" />,
    title: "Deliver",
    description:
      "We strive for perfection. Review, revise, and approve your project – we're committed to exceeding your expectations.",
  },
];

export const metrics: Metric[] = [
  {
    value: "100+",
    title: "Satisfied Clients",
  },
  {
    value: "120+",
    title: "Projects completed",
  },
  {
    value: "140+",
    title: "Review's given",
  },
];

export const services: Service[] = [
  {
    icon: <HiOutlineMegaphone className="text-blue-400" />,
    title: "Ambassadorship & Influence",
    description:
      "Promote authentic brand representation with consistent messaging and engaging narratives that build trust and resonate with key audiences.",
    roles: ["Project Ambassador", "Brand Ambassador", "Key Opinion Leader"],
  },
  {
    icon: <HiOutlineChartBar className="text-pink-400" />,
    title: "Project Marketing",
    description:
      "Enhance project visibility with targeted campaigns and creative storytelling that capture attention and drive meaningful results.",
    roles: ["Project Marketer", "Graphic Designer"],
  },
  {
    icon: <HiOutlineUserGroup className="text-green-400" />,
    title: "Community Management",
    description:
      "Strengthen community ties through proactive management and clear communication that nurtures a collaborative, growth-focused environment.",
    roles: [
      "Human Resource Manager",
      "Community Manager/Moderator",
      "Social Media Manager",
    ],
  },
];

export const reasons: CardProps[] = [
  {
    icon: <HiOutlineLightBulb className="text-yellow-500" />,
    title: "Creativity",
    description:
      "Spark dynamic, imaginative strategies that give your project a vibrant edge in Web3.",
  },
  {
    icon: <HiOutlineEye className="text-blue-600" />,
    title: "Vision",
    description:
      "Envision the future of Web3 and elevate your project to new digital horizons.",
  },
  {
    title: "Resilience",
    icon: <HiOutlineShieldCheck className="text-green-600" />,
    description:
      "Build enduring strength and adaptability to keep your project thriving in a dynamic digital landscape.",
  },
  {
    icon: <HiOutlineGlobeAlt className="text-indigo-600" />,
    title: "Pioneering",
    description:
      "Break new ground with audacious strategies that drive your project to Web3 success.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Chill Girl",
    review:
      "We ensure a positive and engaging environment by managing interactions, fostering healthy discussions, and maintaining community guidelines to support your project's growth. discussions, and maintaining community guidelines to support your project's growth.",
    color: "red",
  },
  {
    id: 2,
    name: "Union Ex",
    review:
      "We ensure a positive and engaging environment by managing interactions, fostering healthy discussions, and maintaining community guidelines to support your project's growth. discussions, and maintaining community guidelines to support your project's growth.",
    color: "gray",
  },
  {
    id: 3,
    name: "Dogegrok",
    review:
      "We ensure a positive and engaging environment by managing interactions, fostering healthy discussions, and maintaining community guidelines to support your project's growth. discussions, and maintaining community guidelines to support your project's growth.",
    color: "yellow",
  },
];

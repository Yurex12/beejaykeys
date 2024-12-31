import { linksProps } from "../layoutTypes";

export const links: linksProps = [
  { id: "home", name: "Home" },
  { id: "services", name: "Services" },
  { id: "about-me", name: "About Me" },
  { id: "contact-me", name: "Contact Me" },
];

export const footerLinks = [
  {
    name: "Services",
    links: [
      {
        title: "Community Moderator",
        id: "community-mod",
      },
      {
        title: `Content Writing`,
        id: "content-writing",
      },
      {
        title: `Ambassador`,
        id: "ambassador",
      },
    ],
  },
  {
    name: "Company",
    links: [
      {
        title: "About Me",
        id: "about-me",
      },
      {
        title: "Contact Me",
        id: "contact-me",
      },
      {
        title: "Support",
        id: "support",
      },
    ],
  },
  {
    name: "suppport",
    links: [
      {
        title: "Cookie Policy",
        id: "support",
      },
      {
        title: "Terms of Use",
        id: "terms-of-use",
      },
      {
        title: "FAQs",
        id: "faqs",
      },
    ],
  },
];

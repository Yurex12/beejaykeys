import { FooterLink, Link } from "../types";

export const links: Link[] = [
  { href: "home", name: "Home" },
  { href: "portfolio", name: "Portfolio" },
  { href: "about-me", name: "About Me" },
  { href: "contact-me", name: "Contact Me" },
];

export const footerLinks: FooterLink[] = [
  {
    title: "Services",
    links: [
      {
        name: "Community Moderator",
        href: "community-mod",
      },
      {
        name: `Content Writing`,
        href: "content-writing",
      },
      {
        name: `Ambassador`,
        href: "ambassador",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        name: "About Us",
        href: "about-us",
      },
      {
        name: "Contact Us",
        href: "contact-us",
      },
      {
        name: "Support",
        href: "support",
      },
    ],
  },
  {
    title: "suppport",
    links: [
      {
        name: "Cookie Policy",
        href: "support",
      },
      {
        name: "Terms of Use",
        href: "terms-of-use",
      },
      {
        name: "FAQs",
        href: "faqs",
      },
    ],
  },
];

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import SocialType from "../types/social.type";
import React from "react";

const socialConfig: SocialType[] = [
  {
    name: "LinkedIn",
    icon: React.createElement(IconBrandLinkedin, {
      size: 28,
      className: "mr-2 text-white",
    }),
    id: "@Koustav Mondal",
    link: "https://linkedin.com/in/koustav-mondal",
  },
  {
    name: "Github",
    icon: React.createElement(IconBrandGithub, {
      size: 28,
      className: "mr-2 text-white",
    }),
    id: "@XxThunderBlastxX",
    link: "https://github.com/XxThunderBlastxX",
  },
  {
    name: "Email",
    icon: React.createElement(IconMail, {
      size: 28,
      className: "mr-2 text-white",
    }),
    id: "me@koustav.dev",
    link: "mailto:me@koustav.dev",
  },
];

export default socialConfig;

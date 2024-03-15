import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  TablerIconsProps,
} from "@tabler/icons-react";
import { SocialType } from "~/types/social.type";
import React from "react";

const iconProps: React.Attributes & TablerIconsProps = {
  size: 28,
  className: "mr-2 text-white",
};

const socialConfig: SocialType[] = [
  {
    name: "LinkedIn",
    icon: React.createElement(IconBrandLinkedin, iconProps),
    id: "@Koustav Mondal",
    link: "https://linkedin.com/in/koustav-mondal",
  },
  {
    name: "Github",
    icon: React.createElement(IconBrandGithub, iconProps),
    id: "@XxThunderBlastxX",
    link: "https://github.com/XxThunderBlastxX",
  },
  {
    name: "Email",
    icon: React.createElement(IconMail, iconProps),
    id: "me@koustav.dev",
    link: "mailto:me@koustav.dev",
  },
];

export default socialConfig;

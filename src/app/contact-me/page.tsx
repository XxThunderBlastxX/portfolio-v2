import React from "react";
import BackButton from "../../../components/ui/back-button";
import Link from "next/link";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

type SocialType = {
  name: string;
  icon: JSX.Element;
  id: string;
  link: string;
};

const socials: SocialType[] = [
  {
    name: "LinkedIn",
    icon: <IconBrandLinkedin size={28} className={"mr-2 text-white"} />,
    id: "@Koustav Mondal",
    link: "https://linkedin.com/in/koustav-mondal",
  },
  {
    name: "Github",
    icon: <IconBrandGithub size={28} className={"mr-2 text-white"} />,
    id: "@XxThunderBlastxX",
    link: "https://github.com/XxThunderBlastxX",
  },
  {
    name: "Email",
    icon: <IconMail size={28} className={"mr-2 text-white"} />,
    id: "me@koustav.dev",
    link: "mailto:me@koustav.dev",
  },
];

function ContactMe() {
  return (
    <section
      className={
        "flex h-screen w-full flex-col bg-gradient-to-tl from-black via-zinc-900/90 to-black px-12"
      }
    >
      <BackButton />
      <div className="flex flex-col pt-14 ">
        <h1 className="text-4xl font-bold text-white">Contact Me</h1>
        <p className="text-lg text-white/[0.78]">
          You can reach out to me via any medium.
        </p>
      </div>

      <ul
        className={"mt-5 flex items-center justify-evenly text-lg text-white"}
      >
        {socials.map((social, idx) => (
          <li key={idx}>
            <Link
              href={social.link}
              target="_blank"
              rel="noreferrer"
              className={"flex"}
            >
              {social.icon}
              {social.name}
            </Link>
          </li>
        ))}
      </ul>

      <div
        className={
          "m-auto max-w-2xl items-center justify-center rounded-2xl border-[1px] border-white/[0.45]"
        }
      >
        <form className={"p-8"}>
          <label className={"text-white"}>Name</label>
          <input
            type="text"
            className={
              "h-10 w-full rounded-md border-[1px] border-white/[0.45] bg-transparent px-2 py-4 text-white hover:border-white/[0.75] focus:border-white/[0.75]"
            }
          />
          <label className={"text-white"}>Email</label>
          <input
            type="text"
            className={
              "h-10 w-full rounded-md border-[1px] border-white/[0.45] bg-transparent px-2 py-4 text-white hover:border-white/[0.75] focus:border-white/[0.75]"
            }
          />
          <label className={"text-white"}>Message</label>
          <textarea
            className={
              "h-20 w-full rounded-md border-[1px] border-white/[0.45] bg-transparent px-2 py-2 text-white hover:border-white/[0.75] focus:border-white/[0.75]"
            }
          />
          <button
            type="submit"
            className={
              "mt-4 h-10 w-full rounded-md bg-white text-black hover:border-[1px] hover:border-white hover:bg-black hover:bg-transparent hover:text-white"
            }
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactMe;

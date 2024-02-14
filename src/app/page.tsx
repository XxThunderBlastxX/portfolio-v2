"use client";

import { Spotlight } from "../../components/ui/Spotlight";
import React from "react";
import Button from "../../components/ui/Button";
import Link from "next/link";

const navigation: { name: string; href: string }[] = [
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Contact Me", href: "/contact-me" },
];

export default function HomePage() {
  return (
    <>
      <div className="bg-grid-white/[0.02] relative flex h-screen w-full overflow-hidden  bg-black/[0.96] antialiased md:items-center md:justify-center">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:28px_28px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <nav className="absolute right-12 top-2">
          <ul className="flex items-center justify-center gap-4">
            {navigation.map((item, idx) => (
              <Link href={item.href} key={item.href}>
                <Button name={item.name} />
              </Link>
            ))}
          </ul>
        </nav>
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="white"
        />
        <div className=" relative z-10  mx-auto w-full max-w-7xl  p-4 pt-20 md:pt-0">
          <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
            Koustav Mondal <br />
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-center text-xl font-light text-neutral-400 ">
            I&apos;m a self-taught developer proficient in both Flutter and
            backend development. With a passion for crafting seamless and
            powerful applications, I thrive on learning new technologies and
            constantly pushing my skills further. I believe my self-driven
            nature and commitment to excellence make me a valuable asset to any
            team.
          </p>
        </div>
      </div>
    </>
  );
}

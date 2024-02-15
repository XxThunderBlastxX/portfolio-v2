import React from "react";
import BackButton from "../../../components/ui/back-button";
import SkillCard from "../../../components/ui/skill-card";

type SkillType = {
  name: string;
  icon: string;
};

const mobileDev: SkillType[] = [
  { name: "Flutter", icon: "/icons/flutter.svg" },
];

const backendDev: SkillType[] = [
  { name: "Golang", icon: "/icons/golang.svg" },
  { name: "NodeJs", icon: "/icons/nodejs.svg" },
  { name: "MongoDB", icon: "/icons/mongodb.svg" },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
  { name: "Appwrite", icon: "/icons/appwrite.svg" },
  { name: "Docker", icon: "/icons/docker.svg" },
];

const webDev: SkillType[] = [
  { name: "HTML", icon: "/icons/html.svg" },
  { name: "CSS", icon: "/icons/css.svg" },
  { name: "NextJs", icon: "/icons/nextjs.svg" },
  { name: "TailwindCSS", icon: "/icons/tailwind.svg" },
  { name: "React", icon: "/icons/react.svg" },
];

const langs: SkillType[] = [
  { name: "Golang", icon: "/icons/golang.svg" },
  { name: "Dart", icon: "/icons/dart.svg" },
  { name: "Python", icon: "/icons/python.svg" },
  { name: "Java", icon: "/icons/java.svg" },
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "C++", icon: "/icons/cpp.svg" },
];

function Skills() {
  return (
    <section
      className={
        "h-screen w-full bg-gradient-to-tl from-black via-zinc-900/90 to-black px-12"
      }
    >
      <BackButton />
      <div className="flex flex-col pt-14 ">
        <h1 className="text-4xl font-bold text-white">Skills</h1>
        <p className="text-lg text-white/[0.78]">
          Here are some of the skills I have acquired over the years.
        </p>
      </div>
      <div className={"my-8 grid grid-cols-2 grid-rows-2 gap-6"}>
        <SkillCard title={"Mobile App Development"} skill={mobileDev} />
        <SkillCard title={"Backend Development"} skill={backendDev} />
        <SkillCard title={"Web Development"} skill={webDev} />
        <SkillCard title={"Languages"} skill={langs} />
      </div>
    </section>
  );
}

export default Skills;

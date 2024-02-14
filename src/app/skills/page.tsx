import React from "react";
import BackButton from "../../../components/ui/back-button";

type SkillType = {
  name: string;
  icon: string;
};

const mobileAppDev: SkillType[] = [
  { name: "Flutter", icon: "flutter" },
  { name: "Dart", icon: "dart" },
];

const backendDev: SkillType[] = [
  { name: "Golang", icon: "node" },
  { name: "NodeJs", icon: "express" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Firebase", icon: "firebase" },
];

const database: SkillType[] = [
  { name: "MongoDB", icon: "firebase" },
  { name: "MySQL", icon: "mongodb" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Redis", icon: "firebase" },
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
    </section>
  );
}

export default Skills;

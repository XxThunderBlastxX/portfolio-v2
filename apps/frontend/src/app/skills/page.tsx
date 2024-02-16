import React from "react";
import BackButton from "../../../components/ui/back-button";
import SkillCard from "../../../components/ui/skill-card";
import skills from "../../../config/skills.config";

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
        <SkillCard
          title={"Mobile App Development"}
          skill={skills.mobileDevConfig}
        />
        <SkillCard
          title={"Backend Development"}
          skill={skills.backendDevConfig}
        />
        <SkillCard title={"Web Development"} skill={skills.webDevConfig} />
        <SkillCard title={"Languages"} skill={skills.langsConfig} />
      </div>
    </section>
  );
}

export default Skills;

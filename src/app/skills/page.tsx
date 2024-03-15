import React from "react";
import BackButton from "~/components/ui/back-button";
import SkillCard from "~/components/ui/skill-card";
import skills from "~/config/skills.config";

function Skills() {
  return (
    <section
      className={
        "w-full bg-gradient-to-tl from-black via-zinc-900/90 to-black px-12 sm:h-screen"
      }
    >
      <BackButton />
      <div className="flex flex-col pt-14 ">
        <h1 className="text-4xl font-bold text-white">Skills</h1>
        <p className="text-lg text-white/[0.78]">
          Here are some of the skills I have acquired over the years.
        </p>
      </div>
      <div
        className={
          "xl::max-w-screen-2xl m-auto my-8 grid grid-cols-1 grid-rows-2 gap-6 sm:w-full sm:max-w-screen-xl sm:grid-cols-2 sm:items-center sm:justify-center"
        }
      >
        <SkillCard
          title={"Mobile App Development"}
          skill={skills.mobileDevConfig}
        />
        <SkillCard
          title={"Backend Development"}
          skill={skills.backendDevConfig}
        />
        <SkillCard title={"Web Development"} skill={skills.webDevConfig} />
        <SkillCard title={"Languages"} skill={skills.langConfig} />
      </div>
    </section>
  );
}

export default Skills;

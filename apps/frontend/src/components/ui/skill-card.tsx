import React from "react";
import Image from "next/image";
import { CardHoverGlow } from "./card-hover-glow";

type SkillType = {
  name: string;
  icon: string;
};

function SkillCard({ title, skill }: { title: string; skill: SkillType[] }) {
  return (
    <>
      <CardHoverGlow>
        <div className={"h-full bg-black/[0.65] px-4 py-3"}>
          <h2 className={"text-2xl font-bold text-white"}>{title}</h2>
          <ul className={"flex flex-wrap gap-6 pt-7"}>
            {skill.map((skill, idx) => (
              <li key={idx}>
                <Image
                  width={24}
                  height={24}
                  src={skill.icon}
                  alt={skill.name}
                  className={"min-h-[24px]"}
                />
                <p className={"text-lg text-white"}>{skill.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </CardHoverGlow>
    </>
  );
}

export default SkillCard;

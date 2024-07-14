import React from "react";
import BackButton from "~/components/ui/back-button";
import { HoverEffect } from "~/components/ui/card-hover-background-effect";
import getProjects, {
  type Project,
} from "~/components/actions/projects_action";

async function Projects() {
  const projects: Project[] = await getProjects();

  return (
    <section
      className={
        "h-full w-full bg-gradient-to-tl from-black via-zinc-900/90 to-black px-12"
      }
    >
      <BackButton />
      <div className="flex flex-col pt-14 ">
        <h1 className="text-4xl font-bold text-white">Projects</h1>
        <p className="text-lg text-white/[0.78]">
          Here are some of my projects.
        </p>
      </div>
      <div className="mx-auto max-w-5xl px-8">
        <HoverEffect items={projects} />
      </div>
    </section>
  );
}

export default Projects;

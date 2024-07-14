import React from "react";
import BackButton from "~/components/ui/back-button";

function Loading() {
  return (
    <section
      className={
        "max-h-full w-full bg-gradient-to-tl from-black via-zinc-900/90 to-black px-12"
      }
    >
      <BackButton />
      <div className="flex flex-col pt-14 ">
        <h1 className="text-4xl font-bold text-white">Projects</h1>
        <p className="text-lg text-white/[0.78]">
          Here are some of my projects.
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(9).keys()].map((_, i) => (
          <div key={i} className={"p-2"}>
            <div
              role={"status"}
              className="group relative z-20 block h-full  animate-pulse overflow-hidden rounded-2xl border border-white/[0.18] bg-black p-4 px-8 py-10 group-hover:border-slate-700 dark:border-white/[0.2]"
            >
              <div className="mb-10 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              <div className="mb-2.5 h-2 max-w-[360px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
              <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              <div className="mb-2.5 h-2 max-w-[330px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
              <div className="mb-2.5 h-2 max-w-[300px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
              <div className="mt-10 h-2 max-w-[360px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Loading;

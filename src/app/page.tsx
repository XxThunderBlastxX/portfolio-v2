"use client";

import { useState } from "react";

export default function HomePage() {
  const [cmd, setCmd] = useState<string>("");

  function handleEnter(command: string): void {
    switch (command) {
      case "help":
        console.log("help");
        break;
      case "projects":
        console.log("projects");
        break;
      case "about-me" || "about":
        console.log("about");
        break;
      case "experience" || "cv":
        console.log("experience");
        break;
      case "contact-me" || "contact":
        console.log("contact");
        break;
      default:
        console.log("Invalid command");
        break;
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className={"flex flex-row items-center justify-center"}>
        <input
          type="text"
          placeholder="Type something"
          onChange={(e) => setCmd(e.target.value)}
          className={
            "mr-8 w-96 rounded-md border border-violet-500 bg-violet-400 p-3 text-2xl tracking-wide text-black shadow-[8px_5px_8px_rgba(0,0,0,1)] placeholder:text-slate-700 focus:outline-0"
          }
        />
        <button
          className={
            "inline-flex h-[65px] w-[120px] flex-row flex-nowrap rounded-[8px] border-2 border-x-[9px] border-b-[18px] border-[#1D1F22] border-x-[#27292d] border-b-[#1D1F22] bg-[#16171a] shadow-[5px_6px_8px_rgba(0,0,0,1)] brightness-125 transition-all duration-200 ease-in-out hover:brightness-110 active:translate-y-[2px] active:scale-95  active:shadow-none"
          }
          onClick={() => handleEnter(cmd)}
        >
          <span className={"ml-2 mt-0.5 text-lg"}>Enter</span>
        </button>
      </div>
    </main>
  );
}

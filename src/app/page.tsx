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
      <div>
        <input
          type="text"
          placeholder="Type something"
          onChange={(e) => setCmd(e.target.value)}
          className={
            "mr-8 w-96 rounded-md border border-violet-500 bg-violet-400 p-3 text-2xl tracking-wide text-black placeholder:text-slate-700 focus:outline-0"
          }
        />
        <button
          className={
            "rounded-md border border-violet-500 bg-violet-400 text-2xl tracking-wide text-black placeholder:text-slate-700 focus:outline-0"
          }
          onClick={() => handleEnter(cmd)}
        >
          Enter
        </button>
      </div>
    </main>
  );
}

"use client";

import React from "react";
import { sourceCode } from "~/app/fonts";
import Button from "~/components/ui/button";
import Link from "next/link";
import { Player } from "@lottiefiles/react-lottie-player";

function NotFound() {
  return (
    <div
      className={
        "relative flex h-screen w-full flex-wrap content-center items-center justify-center text-white"
      }
    >
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#2d2e2f_1px,transparent_1px)] [background-size:32px_32px]"></div>
      <Player
        src={"/lottie/404.json"}
        autoplay={true}
        loop={true}
        className={" sm:h-4/6 sm:w-4/6"}
      />
      <h1
        className={
          sourceCode.className +
          " w-full px-10 text-center text-2xl sm:text-3xl md:text-3xl xl:text-3xl"
        }
      >{`{status : 404 , \nmessage: "page not found"}`}</h1>
      <div className={" items-center justify-center pt-5"}>
        <Link href={"/"} referrerPolicy={"no-referrer"} scroll={false}>
          <Button name={"Go Home"} />
        </Link>
      </div>
    </div>
  );
}

export default NotFound;

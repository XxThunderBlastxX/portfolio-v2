import React from "react";
import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";

function BackButton() {
  return (
    <>
      <div className={"-mx-5 pt-6 text-white"}>
        <Link href={"/"}>
          <IconArrowLeft size={28} />
        </Link>
      </div>
    </>
  );
}

export default BackButton;

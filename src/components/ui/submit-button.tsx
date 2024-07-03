import React from "react";
import { ClipLoader } from "react-spinners";
import { useFormStatus } from "react-dom";
import { TokenStatus } from "~/components/ui/contact-form";

function SubmitButton({
  tokenStatus,
  token,
}: {
  tokenStatus: TokenStatus;
  token: string;
}) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={
        tokenStatus !== TokenStatus.solved || token.length === 0 || pending
      }
      className={
        "spinner-btn mt-4 h-10 w-full rounded-md bg-white text-black hover:border-[1px] hover:border-white hover:bg-black hover:bg-transparent hover:text-white"
      }
    >
      {pending ? <ClipLoader size={26} /> : "Submit"}
    </button>
  );
}

export default SubmitButton;

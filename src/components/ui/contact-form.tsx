"use client";

import React, { useRef, useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { env } from "~/env";
import submitContactForm from "~/components/actions/contact_form_action";
import toast from "react-hot-toast";
import SubmitButton from "~/components/ui/submit-button";

export enum TokenStatus {
  solved,
  expired,
  error,
}

function ContactForm() {
  const [token, setToken] = useState("");
  const [tokenStatus, setTokenStatus] = useState<TokenStatus>(
    TokenStatus.expired,
  );
  const formRef = useRef<HTMLFormElement | null>(null);

  async function onClickSubmitAction(formData: FormData) {
    formRef.current?.reset();
    try {
      await submitContactForm(formData, token);
      toast.success("Email sent successfully");
    } catch (err) {
      toast.error("Ops!! Failed to send");
    }
  }

  return (
    <>
      <form className={" p-8"} action={onClickSubmitAction} ref={formRef}>
        <label className={"text-white"}>Name</label>
        <input
          type="text"
          required={true}
          name={"name"}
          placeholder={"Enter your name"}
          className={
            "mb-2 h-10 w-full rounded-md border-[1px] border-white/[0.45] bg-transparent px-2 py-4 text-white hover:border-white/[0.75] focus:border-white/[0.75]"
          }
        />
        <label className={"text-white"}>Email</label>
        <input
          type="email"
          required={true}
          name={"email"}
          placeholder={"Enter your email"}
          className={
            "mb-2 h-10 w-full rounded-md border-[1px] border-white/[0.45] bg-transparent px-2 py-4 text-white hover:border-white/[0.75] focus:border-white/[0.75]"
          }
        />
        <label className={"text-white"}>Message</label>
        <textarea
          required={true}
          name={"message"}
          placeholder={"Enter your message"}
          className={
            "h-20 w-full rounded-md border-[1px] border-white/[0.45] bg-transparent px-2 py-2 text-white hover:border-white/[0.75] focus:border-white/[0.75]"
          }
        />
        <Turnstile
          siteKey={env.NEXT_PUBLIC_SITE_KEY}
          className={"pt-2"}
          onSuccess={(token) => {
            setToken(token);
            setTokenStatus(TokenStatus.solved);
          }}
          onExpire={() => {
            setTokenStatus(TokenStatus.expired);
          }}
          onError={() => {
            setTokenStatus(TokenStatus.error);
          }}
        />
        <SubmitButton tokenStatus={tokenStatus} token={token} />
      </form>
    </>
  );
}

export default ContactForm;

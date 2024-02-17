"use client";

import React, { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { ClipLoader } from "react-spinners";
import { toast } from "react-hot-toast";
import { Turnstile } from "@marsidev/react-turnstile";
import { env } from "~/env";
import ContactFormType from "~/types/contactForm.type";

type TokenStatusType = "solved" | "expired" | "error" | null;

function ContactForm() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  } as ContactFormType);
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState("");
  const [tokenStatus, setTokenStatus] = useState<TokenStatusType>(null);

  async function submitContactForm() {
    setIsLoading(true);

    const data: ContactFormType = {
      name: contactForm.name.trim(),
      email: contactForm.email.trim(),
      message: contactForm.message.trim(),
    };

    try {
      const response: AxiosResponse = await axios.post(
        "https://portfolio-api.koustav.dev/send-message",
        {
          ...data,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "cf-turnstile-response": token,
          },
          method: "POST",
        },
      );

      if (response.status == 200) {
        toast.success("Message sent successfully");
      }

      if (response.status == 401) {
        toast.error("Opps!! Invalid Captcha");
      }
    } catch (err) {
      toast.error("Failed to send message");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <form
        className={" p-8"}
        onSubmit={async (e) => {
          e.preventDefault();
          await submitContactForm();
        }}
      >
        <label className={"text-white"}>Name</label>
        <input
          type="text"
          required={true}
          name={"name"}
          value={contactForm.name}
          placeholder={"Enter your name"}
          onChange={(e) =>
            setContactForm({ ...contactForm, name: e.target.value })
          }
          className={
            "mb-2 h-10 w-full rounded-md border-[1px] border-white/[0.45] bg-transparent px-2 py-4 text-white hover:border-white/[0.75] focus:border-white/[0.75]"
          }
        />
        <label className={"text-white"}>Email</label>
        <input
          type="email"
          required={true}
          name={"email"}
          value={contactForm.email}
          placeholder={"Enter your email"}
          onChange={(e) =>
            setContactForm({ ...contactForm, email: e.target.value })
          }
          className={
            "mb-2 h-10 w-full rounded-md border-[1px] border-white/[0.45] bg-transparent px-2 py-4 text-white hover:border-white/[0.75] focus:border-white/[0.75]"
          }
        />
        <label className={"text-white"}>Message</label>
        <textarea
          required={true}
          name={"message"}
          value={contactForm.message}
          onChange={(e) =>
            setContactForm({ ...contactForm, message: e.target.value })
          }
          placeholder={"Enter your message"}
          className={
            "h-20 w-full rounded-md border-[1px] border-white/[0.45] bg-transparent px-2 py-2 text-white hover:border-white/[0.75] focus:border-white/[0.75]"
          }
        />
        <Turnstile
          siteKey={env.NEXT_PUBLIC_SITE_KEY}
          className={"pt-2"}
          options={{
            theme: "dark",
            size: "normal",
          }}
          onSuccess={(token) => {
            setToken(token);
            setTokenStatus("solved");
          }}
          onExpire={() => {
            setTokenStatus("expired");
          }}
          onError={() => {
            setTokenStatus("error");
          }}
        />
        <button
          type="submit"
          disabled={token.length === 0 && tokenStatus !== "solved"}
          className={
            "mt-4 h-10 w-full rounded-md bg-white text-black hover:border-[1px] hover:border-white hover:bg-black hover:bg-transparent hover:text-white"
          }
        >
          {isLoading ? <ClipLoader color={"white"} size={26} /> : "Submit"}
        </button>
      </form>
    </>
  );
}

export default ContactForm;

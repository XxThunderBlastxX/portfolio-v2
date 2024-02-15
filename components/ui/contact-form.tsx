"use client";

import React, { useState } from "react";

function ContactForm() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  async function submitContactForm() {
    console.log(contactForm.email, contactForm.name, contactForm.message);
  }

  return (
    <>
      <form className={"p-8"}>
        <label className={"text-white"}>Name</label>
        <input
          type="text"
          required={true}
          name={"name"}
          value={contactForm.name}
          onChange={(e) =>
            setContactForm({ ...contactForm, name: e.target.value })
          }
          className={
            "h-10 w-full rounded-md border-[1px] border-white/[0.45] bg-transparent px-2 py-4 text-white hover:border-white/[0.75] focus:border-white/[0.75]"
          }
        />
        <label className={"text-white"}>Email</label>
        <input
          type="text"
          required={true}
          name={"email"}
          value={contactForm.email}
          onChange={(e) =>
            setContactForm({ ...contactForm, email: e.target.value })
          }
          className={
            "h-10 w-full rounded-md border-[1px] border-white/[0.45] bg-transparent px-2 py-4 text-white hover:border-white/[0.75] focus:border-white/[0.75]"
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
          className={
            "h-20 w-full rounded-md border-[1px] border-white/[0.45] bg-transparent px-2 py-2 text-white hover:border-white/[0.75] focus:border-white/[0.75]"
          }
        />
        <button
          type="submit"
          onClick={() => submitContactForm}
          className={
            "mt-4 h-10 w-full rounded-md bg-white text-black hover:border-[1px] hover:border-white hover:bg-black hover:bg-transparent hover:text-white"
          }
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default ContactForm;

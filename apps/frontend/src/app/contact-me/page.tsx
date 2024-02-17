import React from "react";
import BackButton from "~/components/ui/back-button";
import Link from "next/link";
import ContactForm from "~/components/ui/contact-form";
import { Toaster } from "react-hot-toast";
import socialConfig from "~/config/social.config";

function ContactMe() {
  return (
    <section
      className={
        "flex h-screen w-full flex-col bg-gradient-to-tl from-black via-zinc-900/90 to-black px-12"
      }
    >
      <BackButton />
      <div className="flex flex-col pt-14 ">
        <h1 className="text-4xl font-bold text-white">Contact Me</h1>
        <p className="text-lg text-white/[0.78]">
          You can reach out to me via any medium.
        </p>
      </div>

      <ul
        className={"mt-5 flex items-center justify-evenly text-lg text-white"}
      >
        {socialConfig.map((social, idx) => (
          <li key={idx}>
            <Link
              href={social.link}
              target="_blank"
              referrerPolicy={"no-referrer"}
              className={"flex"}
            >
              {social.icon}
              {social.name}
            </Link>
          </li>
        ))}
      </ul>

      <div
        className={
          "m-auto max-w-2xl items-center justify-center rounded-2xl border-[1px] border-white/[0.45]"
        }
      >
        <ContactForm />
      </div>
      <Toaster
        position={"bottom-right"}
        toastOptions={{
          duration: 4000,
        }}
      />
    </section>
  );
}

export default ContactMe;

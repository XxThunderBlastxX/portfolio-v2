"use server";

import { env } from "~/env";

interface IVerifyCaptchaTokenRequest {
  secret: string | undefined;
  response: string;
}

export default async function verifyToken(token: string): Promise<string> {
  const reqUrl = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

  const reqData: IVerifyCaptchaTokenRequest = {
    secret: env.TURNSTILE_SECRET,
    response: token,
  };

  return await fetch(reqUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reqData),
  }).then((res) => {
    if (res.ok) {
      if (res.status == 200) {
        return "verified";
      } else {
        return "not_verified";
      }
    } else {
      return "not_verified";
    }
  });
}

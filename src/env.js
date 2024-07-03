import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    TURNSTILE_SECRET: z.coerce.string(),
    EMAIL_USER: z.coerce.string(),
    EMAIL_PASS: z.coerce.string(),
  },

  client: {
    NEXT_PUBLIC_SITE_KEY: z.coerce.string(),
  },

  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_SITE_KEY: process.env.NEXT_PUBLIC_SITE_KEY,
    TURNSTILE_SECRET: process.env.TURNSTILE_SECRET,
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASS: process.env.EMAIL_PASS,
  },

  skipValidation: !!process.env.SKIP_ENV_VALIDATION,

  emptyStringAsUndefined: true,
});

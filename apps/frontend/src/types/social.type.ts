import React from "react";
import { z } from "zod";

const SocialSchema = z.object({
  name: z.string(),
  icon: z.custom<React.ReactElement>(),
  id: z.string(),
  link: z.string(),
});

export default SocialSchema;
export type SocialType = z.infer<typeof SocialSchema>;

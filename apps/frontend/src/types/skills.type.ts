import { z } from "zod";

const SkillSchema = z.object({
  name: z.string(),
  icon: z.string(),
});

export default SkillSchema;
export type SkillType = z.infer<typeof SkillSchema>;

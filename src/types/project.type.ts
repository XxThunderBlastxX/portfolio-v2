import { z } from "zod";

const ProjectSchema = z.object({
  title: z.string(),
  description: z.string(),
  stack: z.array(z.string()),
  link: z.string(),
});

export default ProjectSchema;
export type ProjectType = z.infer<typeof ProjectSchema>;

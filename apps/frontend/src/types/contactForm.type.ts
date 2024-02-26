import { z } from "zod";

const ContactFormSchema = z.object({
  name: z.string().min(1).trim(),
  email: z.string().email().trim(),
  message: z.string().min(1).trim(),
});

export default ContactFormSchema;
export type ContactFormType = z.infer<typeof ContactFormSchema>;

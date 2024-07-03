"use server";

import { type ContactFormType } from "~/types/contactForm.type";
import nodemailer from "nodemailer";
import { env } from "~/env";
import { z } from "zod";
import verifyToken from "~/components/actions/verify_captcha_token";

const ContactFormResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
});

export type ContactFormResponseType = z.infer<typeof ContactFormResponseSchema>;

export default async function submitContactForm(
  formData: FormData,
  token: string,
) {
  try {
    await verifyToken(token);
  } catch (err) {
    return {
      success: false,
      message: "Invalid Captcha",
    } as ContactFormResponseType;
  }

  const form: ContactFormType = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
  };

  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.in",
    port: 587,
    auth: {
      user: env.EMAIL_USER,
      pass: env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: env.EMAIL_USER,
    to: "me@koustav.dev",
    subject: `Message from ${form.name}`,
    text: form.message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: "Email sent" } as ContactFormResponseType;
  } catch (err) {
    return {
      success: false,
      message: "Failed to send email",
    } as ContactFormResponseType;
  }
}

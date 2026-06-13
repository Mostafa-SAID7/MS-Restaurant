import { Mail, MapPin, LucideIcon } from "lucide-react";
import { z } from "zod";

export interface ContactInfo {
  icon: LucideIcon;
  label: string;
  title: string;
  value: string;
}

export const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    label: "Email",
    title: "Email",
    value: "m.ssaid356@gmail.com",
  },
  {
    icon: MapPin,
    label: "Based in",
    title: "Based in",
    value: "Egypt · Remote · Worldwide",
  },
];

export const contactSectionData = {
  eyebrow: "Contact",
  title: "Let's build something great together",
  subtitle:
    "Share details about your project and what you're trying to solve. I usually reply within a few hours.",
};

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  company: z.string().trim().max(120).optional(),
  message: z.string().trim().min(10, "Tell me a bit more").max(1000),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const contactFormFields = [
  {
    name: "name" as const,
    label: "Your name",
    type: "text",
    placeholder: "Mostafa Said",
    span: "col-span-1",
  },
  {
    name: "email" as const,
    label: "Email",
    type: "email",
    placeholder: "you@restaurant.com",
    span: "col-span-1",
  },
  {
    name: "company" as const,
    label: "Company / Venue (optional)",
    type: "text",
    placeholder: "Restaurant Name",
    span: "col-span-full",
  },
  {
    name: "message" as const,
    label: "How can I help?",
    type: "textarea",
    placeholder: "We have 4 branches and want a unified POS + online ordering…",
    span: "col-span-full",
    rows: 5,
  },
];

export const contactMessages = {
  success: "Message sent — I'll reply within 24 hours.",
  successDescription: (name: string) => `Thanks, ${name}.`,
  error: "Something went wrong",
  errorDescription: "Please try again in a moment.",
  sending: "Sending…",
  send: "Send message",
};

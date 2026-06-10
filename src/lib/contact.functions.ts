import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(10).max(1000),
});

export async function submitContact(data: unknown) {
  // Validate the data
  const validated = schema.parse(data);

  // For now, just log to console since we don't have a backend
  // In production, you would send this to an API endpoint
  console.log("Contact submission:", validated);

  return { ok: true };
}


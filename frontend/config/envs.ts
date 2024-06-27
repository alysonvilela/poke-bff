import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_BACKEND_BASE_URL: z.string(),
})

export const envs = envSchema.parse({
  NEXT_PUBLIC_BACKEND_BASE_URL: String(process.env.NEXT_PUBLIC_BACKEND_BASE_URL),
})
import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  PORT: z.number(),
  POKEMON_SERVICE_BASE_URL: z.string(),
})

export const envs = envSchema.parse({
  PORT: Number(process.env.PORT ?? 3000),
  POKEMON_SERVICE_BASE_URL: String(process.env.POKEMON_SERVICE_BASE_URL),
})
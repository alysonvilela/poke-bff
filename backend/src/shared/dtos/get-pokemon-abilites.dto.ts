import { z } from "zod";

export const getPokemonAbilitiesDto = z.object({
    name: z.string().max(30)
});
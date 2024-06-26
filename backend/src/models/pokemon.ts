import { z } from "zod";


export const pokemonSchema = z.object({
    abilities: z.array(z.string()),
})


export type IPokemon = z.infer<typeof pokemonSchema>
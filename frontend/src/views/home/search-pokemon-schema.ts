import { z } from "zod";


export const searchPokemonSchema = z.object({
    name: z.string()
})

export type SearchPokemonSchema = z.infer<typeof searchPokemonSchema>
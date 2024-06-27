import { z } from "zod";


export const abilitySchema = z.object({
    ability: z.object({
        name: z.string(),
        url: z.string(),
    }),
    is_hidden: z.boolean(),
    slot: z.number()
})


export const pokemonSchema = z.object({
    id: z.number(),
    name: z.string(),
    sprite: z.string(),
    abilities: z.array(abilitySchema),
    types: z.array(z.string())
})


export type IPokemon = z.infer<typeof pokemonSchema>
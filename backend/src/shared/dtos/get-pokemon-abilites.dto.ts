import { z } from "zod";

export const getPokemonAbilitiesDto = z.object({
    name: z.custom((val) =>  !/\d/.test(val) && val.length < 20) // String without numbers
});
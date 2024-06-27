import { IPokemonInput } from "../models/pokemon-input"

export const sortPokemonByAbilityNameAsc = (a: IPokemonInput['abilities'][0], b: IPokemonInput['abilities'][0]) => {
    return a.ability.name < b.ability.name ? -1 : 1
}
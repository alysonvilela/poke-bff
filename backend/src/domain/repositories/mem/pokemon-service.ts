import { sortPokemonByAbilityNameAsc } from "../../../utils/sort-pokemon-by-ability-nasme-asc";
import { IPokemonOutput } from "../../models/pokemon-output";
import { PokemonServiceRepository } from "../pokemon-service";
import { mockPokemonOutput } from "./data";

export class InMemoryPokemonServiceRepository implements PokemonServiceRepository {
    public db: IPokemonOutput[] = [mockPokemonOutput]

    async getPokemon(name: string): Promise<IPokemonOutput | null> {
        const existing = this.db.find(pokemon => pokemon.name.toLowerCase() === name.toLowerCase())

        if (existing) {
            return {
                ...existing,
                abilities: existing.abilities.sort(sortPokemonByAbilityNameAsc)
            }
        }
        return null
    }
}
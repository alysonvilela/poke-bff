import { IPokemonOutput } from "../../models/pokemon-output";
import { sortPokemonByAbilityNameAsc } from "../../utils/sort-pokemon-by-ability-nasme-asc";
import { PokemonServiceRepository } from "../pokemon-service";

export const mockPokemonOutput: IPokemonOutput = {
    id: 1,
    name: 'Testo',
    sprite: 'test',
    abilities: [
        {
            ability: {
                name: 'basic-sauce',
                url: 'test'
            },
            is_hidden: false,
            slot: 1
        },
        {
            ability: {
                name: 'zopiden-cakes',
                url: 'test'
            },
            is_hidden: false,
            slot: 2
        },
        {
            ability: {
                name: 'aggressive-corn',
                url: 'test'
            },
            is_hidden: false,
            slot: 3
        }
    ]
}

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
import { IPokemon, pokemonSchema } from "../../models/pokemon";
import { PokemonServiceRepository } from "../pokemon-service";


export class InMemoryPokemonServiceRepository implements PokemonServiceRepository {
    async getPokemon(name: string): Promise<IPokemon> {

        const pokemon: IPokemon = {
            abilities: ['']
        }
        return pokemon
    }
}
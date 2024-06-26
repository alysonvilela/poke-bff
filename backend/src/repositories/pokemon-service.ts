import { IPokemon } from "../models/pokemon";

export abstract class PokemonServiceRepository {
    abstract getPokemon(name: string): Promise<IPokemon>;
}
import { IPokemonOutput } from "../models/pokemon-output";

export abstract class PokemonServiceRepository {
    abstract getPokemon(name: string): Promise<IPokemonOutput | null>;
}
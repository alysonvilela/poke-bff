import { HttpClientSingleton } from "../../lib/http-client";
import { LoggerSingleton } from "../../lib/logger";
import { PokemonServiceRepository } from "../pokemon-service";
import { IPokemonOutput } from "../../models/pokemon-output";
import { AxiosError } from "axios";
import { NotFound } from "../../errors/not-found";
import { IPokemonInput } from "../../models/pokemon-input";
import { sortPokemonByAbilityNameAsc } from "../../utils/sort-pokemon-by-ability-nasme-asc";

export class HttpPokemonServiceRepository implements PokemonServiceRepository {
    constructor(
        private readonly logger: LoggerSingleton,
        private readonly httpClient: HttpClientSingleton) {
    }

    async getPokemon(name: string): Promise<IPokemonOutput | null> {
        this.logger.log(HttpPokemonServiceRepository.name, name)
        try {
            const { data } = await this.httpClient.request.get<IPokemonInput>('https://pokeapi.co/api/v2/pokemon/' + name.toLowerCase());

            return {
                id: data.id,
                name: data.name,
                sprite: data.sprites.front_default,
                abilities: data.abilities.sort(sortPokemonByAbilityNameAsc)
            }
        } catch (err) {
            if (err instanceof AxiosError) {
                throw new NotFound(err.message)
            }
            return null
        }

    }
}
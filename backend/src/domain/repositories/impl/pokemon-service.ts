import { AxiosError } from "axios";
import { HttpClientSingleton } from "../../../http/client/http-client";
import { LoggerSingleton } from "../../../shared/config/logger";
import { sortPokemonByAbilityNameAsc } from "../../../utils/sort-pokemon-by-ability-nasme-asc";
import { IPokemonInput } from "../../models/pokemon-input";
import { IPokemonOutput } from "../../models/pokemon-output";
import { PokemonServiceRepository } from "../pokemon-service";
import { NotFound } from "../../../http/errors/not-found";
import { envs } from "../../../shared/config/envs";


export class HttpPokemonServiceRepository implements PokemonServiceRepository {
    constructor(
        private readonly logger: LoggerSingleton,
        private readonly httpClient: HttpClientSingleton) {
            httpClient.setBaseUrl(envs.POKEMON_SERVICE_BASE_URL)
    }

    async getPokemon(name: string): Promise<IPokemonOutput | null> {
        this.logger.log(HttpPokemonServiceRepository.name, name)
        try {
            const { data } = await this.httpClient.request.get<IPokemonInput>('/api/v2/pokemon/' + name.toLowerCase());

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
import { HttpClientSingleton } from "../../lib/http-client";
import { LoggerSingleton } from "../../lib/logger";
import { PokemonServiceRepository } from "../pokemon-service";
import { IPokemon } from "../../models/pokemon";


export class HttpPokemonServiceRepository implements PokemonServiceRepository {
    constructor(
        private readonly logger: LoggerSingleton,
        private readonly httpClient: HttpClientSingleton) {
    }

    async getPokemon(name: string): Promise<IPokemon> {
        this.logger.log(HttpPokemonServiceRepository.name, name)
        const { data } = await this.httpClient.request.get('https://pokeapi.co/api/v2/pokemon/' + name);
        return data
    }
}
import { LoggerSingleton } from "../lib/logger";
import { PokemonServiceRepository } from "../repositories/pokemon-service";

interface RequestParams {
    name: string;
}
export class GetPokemonAbilitiesUseCase {
    constructor(
        private readonly logger: LoggerSingleton,
        private readonly pokemonServiceRepository: PokemonServiceRepository,
    ) { }

    async execute(params: RequestParams) {
        this.logger.log(GetPokemonAbilitiesUseCase.name, "Getting pokemon: " + params.name);
        const data = await this.pokemonServiceRepository.getPokemon(params.name);

        return { result: data }
    }
}
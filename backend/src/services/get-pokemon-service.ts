import { LoggerSingleton } from "../lib/logger";
import { PokemonServiceRepository } from "../repositories/pokemon-service";

interface RequestParams {
    name: string;
}
export class GetPokemonUseCase {
    constructor(
        private readonly logger: LoggerSingleton,
        private readonly pokemonServiceRepository: PokemonServiceRepository,
    ) { }

    async execute(params: RequestParams) {
        this.logger.log(GetPokemonUseCase.name, "Running query all paginated");
        const data = await this.pokemonServiceRepository.getPokemon(params.name);

        return {
            data
        };
    }
}

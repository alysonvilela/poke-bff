import { GetPokemonController } from "./controllers/pokemons-controller";
import { HttpClientSingleton } from "./lib/http-client";
import { LoggerSingleton } from "./lib/logger";
import { HttpPokemonServiceRepository } from "./repositories/impl/pokemon-service";
import { GetPokemonUseCase } from "./services/get-pokemon-service";

// Singletons
export const logger = LoggerSingleton.getInstance();
export const httpClient = HttpClientSingleton.getInstance()

// Repositories
export const pokemonServiceRepository = new HttpPokemonServiceRepository(logger, httpClient);

// Services
export const getPokemonUserCase = new GetPokemonUseCase(logger, pokemonServiceRepository)

// Controllers
export const getPokemonController = new GetPokemonController(getPokemonUserCase);
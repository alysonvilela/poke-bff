import { GetPokemonController } from "./controllers/pokemons-controller";
import { HttpClientSingleton } from "./lib/http-client";
import { LoggerSingleton } from "./lib/logger";
import { HttpPokemonServiceRepository } from "./repositories/impl/pokemon-service";
import { GetPokemonAbilitiesUseCase } from "./services/get-pokemon-abilities-service";

// Singletons
export const logger = LoggerSingleton.getInstance();
export const httpClient = HttpClientSingleton.getInstance()

// Repositories
export const pokemonServiceRepository = new HttpPokemonServiceRepository(logger, httpClient);

// Services
export const getPokemonUserCase = new GetPokemonAbilitiesUseCase(logger, pokemonServiceRepository)

// Controllers
export const getPokemonController = new GetPokemonController(getPokemonUserCase);
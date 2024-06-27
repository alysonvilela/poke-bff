import { HttpClientSingleton } from "../client/http-client";
import { LoggerSingleton } from "../../shared/config/logger";
import { GetPokemonController } from "../controllers/pokemons-controller";
import { HttpPokemonServiceRepository } from "../../domain/repositories/impl/pokemon-service";
import { GetPokemonAbilitiesUseCase } from "../../domain/use-cases/get-pokemon-abilities-service";

// Singletons
export const logger = LoggerSingleton.getInstance();
export const httpClient = HttpClientSingleton.getInstance()

// Repositories
export const pokemonServiceRepository = new HttpPokemonServiceRepository(logger, httpClient);

// Services
export const getPokemonUserCase = new GetPokemonAbilitiesUseCase(logger, pokemonServiceRepository)

// Controllers
export const getPokemonController = new GetPokemonController(getPokemonUserCase);
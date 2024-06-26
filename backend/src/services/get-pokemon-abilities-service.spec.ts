import { LoggerSingleton } from "../lib/logger";
import { InMemoryPokemonServiceRepository } from "../repositories/mem/pokemon-service";
import { PokemonServiceRepository } from "../repositories/pokemon-service";
import { GetPokemonAbilitiesUseCase } from "./get-pokemon-abilities-service";

let consoleMock = vi.fn();

describe(GetPokemonAbilitiesUseCase.name, () => {
  let logger: LoggerSingleton;
  let pokemonServiceRepository: PokemonServiceRepository;
  let iot: GetPokemonAbilitiesUseCase;

  beforeEach(() => {
    logger = LoggerSingleton.getInstance()
    pokemonServiceRepository = new InMemoryPokemonServiceRepository()

    iot = new GetPokemonAbilitiesUseCase(logger, pokemonServiceRepository);
    vi.spyOn(global.console, "log").mockImplementation(consoleMock);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should produce pretty logs", async () => {
    const res = await iot.execute({
      name: 'pikachu'
    });
    expect(res).toBe(expect.objectContaining({
      result: (pokemonServiceRepository as InMemoryPokemonServiceRepository).db[0]
    }));
    expect(consoleMock).toBeCalledWith("[GETPOKEMONUSECASE]: ", expect.any(String));
  });
});

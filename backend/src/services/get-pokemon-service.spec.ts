import { LoggerSingleton } from "../lib/logger";
import { InMemoryPokemonServiceRepository } from "../repositories/mem/pokemon-service";
import { PokemonServiceRepository } from "../repositories/pokemon-service";
import { GetPokemonUseCase } from "./get-pokemon-service";

let consoleMock = vi.fn();

describe(GetPokemonUseCase.name, () => {
  let logger: LoggerSingleton;
  let pokemonServiceRepository: PokemonServiceRepository;
  let iot: GetPokemonUseCase;

  beforeEach(() => {
    logger = LoggerSingleton.getInstance()
    pokemonServiceRepository = new InMemoryPokemonServiceRepository()

    iot = new GetPokemonUseCase(logger, pokemonServiceRepository);
    vi.spyOn(global.console, "log").mockImplementation(consoleMock);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should produce pretty logs", async () => {
    const someArgument = ["value: ", 1];
    iot.execute({
      name: 'pikachu'
    });
    expect(consoleMock).toBeCalledWith("[TESTING]: ", someArgument);
  });
});

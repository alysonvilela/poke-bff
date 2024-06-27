import exp = require("constants");
import { LoggerSingleton } from "../../shared/config/logger";
import { GetPokemonAbilitiesUseCase } from "./get-pokemon-abilities-service";
import { PokemonServiceRepository } from "../repositories/pokemon-service";
import { InMemoryPokemonServiceRepository } from "../repositories/mem/pokemon-service";

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

  it("should order ability by asc name", async () => {
    const requestResult = (pokemonServiceRepository as InMemoryPokemonServiceRepository).db[0]
    expect(requestResult.abilities[0].ability.name.startsWith('a')).toBeFalsy()
    expect(requestResult.abilities[1].ability.name.startsWith('b')).toBeFalsy()
    expect(requestResult.abilities[2].ability.name.startsWith('z')).toBeFalsy()

    const res = await iot.execute({
      name: 'Testo'
    });

    expect(res.result?.abilities[0].ability.name.startsWith('a')).toBeTruthy()
    expect(res.result?.abilities[1].ability.name.startsWith('b')).toBeTruthy()
    expect(res.result?.abilities[2].ability.name.startsWith('z')).toBeTruthy()
  });
  
});

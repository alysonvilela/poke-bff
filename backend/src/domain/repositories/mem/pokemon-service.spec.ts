import { InMemoryPokemonServiceRepository } from "./pokemon-service";


describe(InMemoryPokemonServiceRepository.name, () => {
  let iot: InMemoryPokemonServiceRepository;

  beforeEach(() => {
    iot = new InMemoryPokemonServiceRepository();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should order ability by asc name", async () => {
    const res = await iot.getPokemon('Testo');

    expect(res?.abilities[0].ability.name.startsWith('a')).toBeTruthy()
    expect(res?.abilities[1].ability.name.startsWith('b')).toBeTruthy()
    expect(res?.abilities[2].ability.name.startsWith('z')).toBeTruthy()
  });
  
});

import { logger } from "../../ioc";
import { HttpClientSingleton } from "../../lib/http-client";
import { data } from "./data";
import { HttpPokemonServiceRepository } from "./pokemon-service";


describe(HttpPokemonServiceRepository.name, () => {
  let httpClient: HttpClientSingleton;
  let iot: HttpPokemonServiceRepository;

  beforeEach(() => {
    httpClient = HttpClientSingleton.getInstance();

    vi.spyOn(httpClient.request, 'get').mockImplementation(async () => vi.fn())

    iot = new HttpPokemonServiceRepository(logger, httpClient);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should request correctly", async () => {
    await iot.getPokemon('Testo');
    expect(httpClient.request.get).toBeCalledTimes(1)
    expect(httpClient.request.get).toBeCalledWith('https://pokeapi.co/api/v2/pokemon/testo')
  });

  it("should return output correctly", async () => {
    vi.spyOn(httpClient.request, 'get').mockResolvedValue({data})

    expect(data.abilities[0].ability.name.startsWith('l')).toBeTruthy()
    expect(data.abilities[1].ability.name.startsWith('i')).toBeTruthy()

    const res = await iot.getPokemon('ditto');
    console.log({ res })
    expect(res?.abilities[0].ability.name.startsWith('i')).toBeTruthy()
    expect(res?.abilities[1].ability.name.startsWith('l')).toBeTruthy()

  });

});

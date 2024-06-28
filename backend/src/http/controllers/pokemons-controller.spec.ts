import { GetPokemonController } from "./pokemons-controller";
import { GetPokemonAbilitiesUseCase } from "../../domain/use-cases/get-pokemon-abilities-service";
import { buildFastify } from "./_build-fastify";
import { PokemonServiceRepository } from "../../domain/repositories/pokemon-service";
import { HttpPokemonServiceRepository } from "../../domain/repositories/impl/pokemon-service";
import { httpClient, logger } from "../server/ioc";
import { mockPokemonOutput } from "../../domain/repositories/mem/data";


describe(GetPokemonController.name, () => {
  let pokemonServiceRepository: PokemonServiceRepository;
  let getPokemonUseCase: GetPokemonAbilitiesUseCase;
  let iot: GetPokemonController;


  beforeEach(async () => {
    pokemonServiceRepository = new HttpPokemonServiceRepository(logger, httpClient)
    getPokemonUseCase = new GetPokemonAbilitiesUseCase(logger, pokemonServiceRepository)

    vi.spyOn(logger, 'log').mockImplementation(() => vi.fn())

    iot = new GetPokemonController(getPokemonUseCase);
  });

  afterEach(async () => {
    vi.clearAllMocks();
  });

  it('should make a request', async() => {
    const fastify = buildFastify('get', '/pokemon/:name', async(req, repl) => await iot.handler(req, repl))
    await fastify.ready();

    vi.spyOn(getPokemonUseCase, 'execute').mockResolvedValue({
      result: mockPokemonOutput
    })

    const res = await fastify.inject({
      method: 'GET',
      url: '/pokemon/ditto',
      
    })
    expect(res.statusCode).toBe(200)
    await fastify.close()
  })

  it('should send 404(Not found) when pokemon not found', async() => {
    const fastify = buildFastify('get', '/pokemon/:name', async(req, repl) => await iot.handler(req, repl))
    await fastify.ready();

    const res = await fastify.inject({
      method: 'GET',
      url: '/pokemon/invalidname',
      
    })
    expect(res.statusCode).toBe(404)

    await fastify.close()
  })

  it('should send 400(Bad Request) when invalid data', async() => {
    const fastify = buildFastify('get', '/pokemon/:name', async(req, repl) => await iot.handler(req, repl))
    await fastify.ready();

    const res = await fastify.inject({
      method: 'GET',
      url: '/pokemon/1',
      
    })
    expect(res.statusCode).toBe(400)
    await fastify.close()
  })

});

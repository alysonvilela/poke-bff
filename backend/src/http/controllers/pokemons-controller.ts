import { z } from "zod";
import { FastifyReply, FastifyRequest } from "fastify";
import { GetPokemonAbilitiesUseCase } from "../../domain/services/get-pokemon-abilities-service";
import { getPokemonAbilitiesDto } from "../../shared/dtos/get-pokemon-abilites.dto";


export class GetPokemonController {
  constructor(private readonly getPokemonUseCase: GetPokemonAbilitiesUseCase) { }
  async handler(req: FastifyRequest, reply: FastifyReply) {
    const query = req.query as z.infer<typeof getPokemonAbilitiesDto>;

    const { success, data: result } = getPokemonAbilitiesDto.safeParse({
      name: query.name
    });

    if (!success) {
      return reply.code(400).send({
        message: "Bad request!",
      });
    }

    const data = await this.getPokemonUseCase.execute({
      name: result.name,
    });

    return reply.code(200).send(data);
  }
}

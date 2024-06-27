import { z } from "zod";
import { FastifyReply, FastifyRequest } from "fastify";
import { GetPokemonAbilitiesUseCase } from "../../domain/use-cases/get-pokemon-abilities-service";
import { getPokemonAbilitiesDto } from "../../shared/dtos/get-pokemon-abilites.dto";
import { BadRequest } from "../errors/bad-request";


export class GetPokemonController {
  constructor(private readonly getPokemonUseCase: GetPokemonAbilitiesUseCase) { }
  async handler(req: FastifyRequest, reply: FastifyReply) {
    const { name } = req.params as z.infer<typeof getPokemonAbilitiesDto>;

    const { success, data: result } = getPokemonAbilitiesDto.safeParse({
      name
    });

    if (!success) {
      throw new BadRequest('Invalid request');
    }

    const data = await this.getPokemonUseCase.execute({
      name: result.name,
    });

    return reply.code(200).send(data);
  }
}

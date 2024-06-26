import { z } from "zod";
import { FastifyReply, FastifyRequest } from "fastify";
import { GetPokemonUseCase } from "../services/get-pokemon-service";

const queryDto = z.object({
  name: z.string().max(30)
});

export class GetPokemonController {
  constructor(private readonly getPokemonUseCase: GetPokemonUseCase) {}
  async handler(req: FastifyRequest, reply: FastifyReply) {
    const query = req.query as z.infer<typeof queryDto>;

    const { success, data: result } = queryDto.safeParse({
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

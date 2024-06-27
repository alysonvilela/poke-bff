import fastify, { FastifyInstance } from "fastify"
import { NotFound } from "./not-found";
import { BadRequest } from "./bad-request";


type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any ? A : never;
type ErrorHandler = ArgumentTypes<FastifyInstance['setErrorHandler']>[0]


export const handler: ErrorHandler = (error, _request, reply) => {
    if (error instanceof fastify.errorCodes.FST_ERR_BAD_STATUS_CODE) {
        reply.status(500).send({ ok: false })
    } else if (error instanceof NotFound) {
        reply.status(error.code).send()
    } else if (error instanceof BadRequest) {
        reply.status(error.code).send()
    } {
        reply.send(error)
    }
}

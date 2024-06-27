import fastify = require("fastify")
import { handler } from "../errors/_handler"

type HttpMethods = 'get' | 'post' | 'put' | 'patch' | 'delete'
type ControllerHandler = (req: fastify.FastifyRequest, reply: fastify.FastifyReply) => Promise<never>
export function buildFastify(method: HttpMethods, route: string, controller: ControllerHandler) {
    const app = fastify()

    app.setErrorHandler(handler)
    app[method](route, controller)

    return app
}
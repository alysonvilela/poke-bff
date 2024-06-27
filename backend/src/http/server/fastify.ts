import { getPokemonController } from "./ioc";
import fastify from "fastify";
import cors from "@fastify/cors";
import { handler } from "../errors/_handler";

const app = fastify();

app.setErrorHandler(handler)
app.register(cors, {
  origin: "*",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  credentials: true,
});


app.get(
  "/pokemon/:name",
  async (req, reply) => await getPokemonController.handler(req, reply)
)

export {
    app
}
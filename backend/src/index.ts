import { , getPokemonController } from "./ioc";
import fastify from "fastify";
import cors from "@fastify/cors";
import "./ioc";
import { envs } from "./lib/envs";

const app = fastify();

app.register(cors, {
  origin: "*",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  credentials: true,
});


app.get(
  "/pokemon",
  async (req, reply) => await getPokemonController.handler(req, reply),
);

app.listen({ host: "0.0.0.0", port: envs.port }, function (err) {
  if (err) {
    throw err;
  }
});

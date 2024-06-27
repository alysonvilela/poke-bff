import { app } from "./http/server/fastify";
import { envs } from "./shared/config/envs";

app.listen({ host: "0.0.0.0", port: envs.port }, function (err) {
  if (err) {
    throw err;
  }
});

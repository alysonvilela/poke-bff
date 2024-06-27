import { app } from "./http/server/fastify";
import { envs } from "./shared/config/envs";

app.listen({ host: "0.0.0.0", port: envs.PORT }, function (err) {
  if (err) {
    throw err;
  }
});

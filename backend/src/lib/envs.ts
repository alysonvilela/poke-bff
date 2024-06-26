import "dotenv/config";

export const envs = {
  port: Number(process.env.PORT) || 3000,
  pokemon_service_url: String(process.env.POKEMON_SERVICE_URL),
};

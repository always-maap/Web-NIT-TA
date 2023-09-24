import { createClient } from "redis";

export type IRedisClient = Awaited<ReturnType<typeof CreateRedisDatabase>>;

export async function CreateRedisDatabase() {
  const client = await createClient()
    .on("error", (err) => console.log("Redis Client Error", err))
    .connect();

  return client;
}

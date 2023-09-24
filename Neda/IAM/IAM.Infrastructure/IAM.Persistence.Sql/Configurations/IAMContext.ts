import { drizzle, PostgresJsDatabase } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const queryClient = postgres(process.env.PG_CONN_STR!);
export const db: PostgresJsDatabase = drizzle(queryClient);

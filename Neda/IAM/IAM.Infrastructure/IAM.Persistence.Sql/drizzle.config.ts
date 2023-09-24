import type { Config } from "drizzle-kit";

export default {
  schema: "./IAM.Infrastructure/IAM.Persistence.Sql/Configurations/*",
  out: "./IAM.Infrastructure/IAM.Persistence.Sql/Migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: "postgres://admin:admin1234@0.0.0.0:5432/postgres",
  },
} satisfies Config;

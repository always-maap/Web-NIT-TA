import {
  date,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  Id: serial("id").primaryKey(),
  FirstName: text("first_name"),
  LastName: text("last_name"),
  Phone: varchar("phone", { length: 256 }),
  Gender: text("gender"),
  Picture: text("picture"),
  CreatedAt: timestamp("created_at"),
  UpdatedAt: timestamp("updated_at"),
});

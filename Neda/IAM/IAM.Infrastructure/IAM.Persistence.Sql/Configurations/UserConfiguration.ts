import { pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  Id: uuid("id").primaryKey(),
  FirstName: text("first_name").notNull(),
  LastName: text("last_name").notNull(),
  Phone: varchar("phone", { length: 256 }).notNull(),
  Gender: text("gender").notNull(),
  Picture: text("picture").notNull(),
  CreatedAt: timestamp("created_at").notNull(),
  UpdatedAt: timestamp("updated_at").notNull(),
});

CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"first_name" text,
	"last_name" text,
	"phone" varchar(256),
	"gender" text,
	"picture" text,
	"created_at" timestamp,
	"updated_at" timestamp
);

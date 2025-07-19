CREATE TABLE "recipies" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"recipe_id" integer NOT NULL,
	"title" text NOT NULL,
	"image" text NOT NULL,
	"ready_in_minutes" integer NOT NULL,
	"servings" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);

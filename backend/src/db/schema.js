import {pgTable, serial, text, integer, timestamp} from "drizzle-orm/pg-core";

export const recipeTable = pgTable("recipies", {
    id: serial("id").primaryKey(),
    userId: text("user_id").notNull(),
    recipeID: integer("recipe_id").notNull(),
    title: text("title").notNull(),
    image: text("image").notNull(),
    cookingTime: integer("ready_in_minutes").notNull(),
    servings: integer("servings").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    })
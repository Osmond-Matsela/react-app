import "dotenv/config";

export const ENV = {
    Port: process.env.Port || 3001,
    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV
}
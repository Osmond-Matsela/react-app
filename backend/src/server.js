import express from "express"
import { ENV } from "./config/env.js"

const app = express()
const Port = ENV.Port || 8001

app.get("/api/health", (req, res) => {
    res.status(200).json({success: true})
})

app.listen(3001, () => {
    console.log("Server is running on port:", Port, " 🚀");
});
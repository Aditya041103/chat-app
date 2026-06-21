import express from "express"
import "dotenv/config"
import connectDB from "./lib/db.js";
import cors from "cors"
import { clerkMiddleware } from '@clerk/express'
import fs from "fs";
import path from "path";
import clerkWebhook from "./webhook/clerkWebhook.js"
const app = express();

const PORT = process.env.PORT
const FRONTEND_URL = process.env.FRONTEND_URL

const publicDir = path.join(process.cwd(), "public")

app.use("/webhooks",express.raw({type:"application/json"}),clerkWebhook)
app.use(express.json())
app.use(cors({ origin: FRONTEND_URL, credentials: true }))
app.use(clerkMiddleware())

if (fs.existsSync(publicDir)) {
    app.use(express.static(publicDir))
    app.get("/{*any}", (req, res, next) => {
        res.sendFile(path.join(publicDir, "index.html"), (err) => next(err));
    })
}

app.get("/health", (req, res) => {
    return res.status(200).json({
        status: "ok"
    }
)
})

app.listen(PORT, () => {
    connectDB();
    console.log("Server is running on PORT : ", PORT);
})


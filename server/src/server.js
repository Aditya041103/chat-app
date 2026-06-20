import express from "express"
import "dotenv/config"
import connectDB from "./lib/db.js";
import cors from "cors"
import {clerkMiddleware } from '@clerk/express'

const PORT = process.env.PORT
FRONTEND_URL=process.env.FRONTEND_URL
const app = express();

app.use(express.json())
app.use(cors({origin:FRONTEND_URL,credentials:true}))
app.use(clerkMiddleware())

app.listen(PORT, () => {
    connectDB();
    console.log("Server is running on PORT : ",PORT);
})
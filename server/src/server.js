import express from "express"
import "dotenv/config"
import connectDB from "./lib/db.js";

const PORT = process.env.PORT
const app = express();

app.listen(PORT, () => {
    connectDB();
    console.log("Server is running on PORT : ",PORT);
})
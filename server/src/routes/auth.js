import express from "express";
import checkAuth from "../controllers/auth.js"
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/check",protectRoute,checkAuth)

export default router;
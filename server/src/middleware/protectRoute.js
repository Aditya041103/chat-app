import { getAuth } from "@clerk/express";
import User from "../models/user";

export async function protectRoute(req, res, next) {
    try {
        const { userId } = getAuth(req);
        if (!userId) {
            return res.status(400).json({ message: "User is not authenticated" });
        }
        const user = await User.findOne({ clerkId: userId });
        if (!user) {
            return res.status(400).json({ message: "User profile not found" })
        }
        req.user = user;
        next();
    } catch (error) {
        console.log("Error in protectRoute: ", error)
    }
}
import mongoose from "mongoose";

async function connectDB (){
    try {
        const mongoUri= process.env.MONGODB_URI
        if(!mongoUri){
            throw new Error("MONGO_URI is required")
        }
        await mongoose.connect(mongoUri);
    } catch (error) {
        console.log("Error in connecting with DB :",error)
    }

}

export default connectDB;
import mongoose from "mongoose";

const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONOGO_URI)
        console.log("MOongoDB Connected");
    }catch(error){
        console.error("MongoDB connection failed", error);
        process.exit(1);
    }
}

export default connectDB;
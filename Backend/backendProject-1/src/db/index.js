import mongoose from "mongoose";

const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONOGO_URI)
        console.log("MoongoDB Connected");
    }catch(error){
        console.error("MongoDB connection failed", error);
        process.exit(1);
    }
}
console.log("MongoDB Connected")

export default connectDB;
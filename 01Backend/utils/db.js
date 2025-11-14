import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()


const db = () =>{
    mongoose
    .connect(process.env.MONGODB_URL)
        .then(()=>{
            console.log("MongoDB Connected Successfully");
        })
        .catch((err)=>{
            console.log("Error connection to MongoDB"); 
        })
}

export default db;
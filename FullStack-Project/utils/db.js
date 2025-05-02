import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


// export a function that connects to db

const db = ()=>{
    mongoose
        .connect(process.env.MONGO_URL)
        .then(()=>{
            console.log("Connected to mongodb");
        })
        .catch((err)=>{
            console.log(err);
        })
};

export default db
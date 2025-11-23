import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import userRoutes from "./routes/auth.routes.js"
dotenv.config()

const app = express();
const port = process.env.PORT || 4000;

app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173'
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.status(200).json({
        success:true,
        message:"Hello world"
    })
})

app.use('/api/v1/users',userRoutes)

app.listen(port, () => {
    console.log(`BAckend is listening on port ${port}`);
})
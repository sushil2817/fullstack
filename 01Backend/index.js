import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import db from './utils/db.js'

// import all router
import userRoutes from './routes/user.routes.js'

dotenv.config()
const app = express()
app.use(
    cors({
        origin: process.env.BASE_URL,
        credentials:true,
        methods:['GET','POST','DELETE','OPTIONS'],
        allowedHeaders:['Content-Type','Authorization']
    })
)
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
    res.send("Sushil")
})
// DataBase Connection
db();

// user routes
app.use("/api/v1/users",userRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

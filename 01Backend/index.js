import express from "express"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config()

const app = express()
app.use(
    cors({
        origin:"http://localhost:3000",
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

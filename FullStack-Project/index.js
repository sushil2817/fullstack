import express from "express"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config();

const app = express()
const port = process.env.PORT || 3000 // total port 65535

app.get('/', (req, res) => {
  res.send('Sushil Cohort!')
})

app.get('/sushil', (req, res) => {
  res.send('sushil!');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

import express from "express"

const app = express()
const port = 3000 // total port 65535

app.get('/', (req, res) => {
  res.send('Sushil Cohort!')
})

app.get('/sushil', (req, res) => {
  res.send('Nisha!');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

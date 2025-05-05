import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import db from "./utils/db.js";

dotenv.config();
// console.log(process.env);

const app = express();

app.use(
  cors({
    origin:process.env.BASE_URL,
    credentials:true,
    methods:['GET','POST','DELETE','OPTIONS'],
    allowedHeaders:['Content-Type','Authorization']
  })
);
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const port = process.env.PORT || 3000 // total port 65535

app.get('/', (req, res) => {
  res.send('Sushil Cohort!')
});

app.get('/sushil', (req, res) => {
  res.send('sushil!');
});
app.get('/sushil2', (req, res) => {
  res.send('Hello sushil');
});


// connect to db

db();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

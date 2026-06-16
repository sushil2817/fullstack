import axios from 'axios';
import express from 'express'

const app = express();
const PORT = process.env.PORT ?? 8000;


app.get("/",(req,res)=>{
    return res.json({status:'success'});
})


app.get('/books/total',async (req,res)=>{
    const response =  await axios.get('https://api.freeapi.app/api/v1/public/books')
    const total = response?.data?.data?.data?.reduce((acc,curr) => curr.pageCount+acc,0);
    return res.json(total);
})
app.listen(PORT,()=>console.log(`Server is running at PORT ${PORT}`));
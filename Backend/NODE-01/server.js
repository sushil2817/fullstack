const express = require('express')

const app = express()

app.delete('/user/:id',(req,res)=>{
    res.send(`Delete /user/${req.Params.id}`);
}) ;
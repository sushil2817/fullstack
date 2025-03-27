// ***********Deep Dive*******************
// const { log } = require('console');
// const https = require('http');

// const server = https.createServer(function(req,res){
//     console.log('Incoming request aaya...');
//     console.log(req.method);
//     switch(req.method){
//         case 'GET':
//             {
//                 if(req.url === '/') return res.end('Homepage');
//                 if(req.url === '/contact-us') return res.end('Contact US Page');
//                 if(res.url === '/about-us') return res.end('About Us Page');
//             }
//             break;
//         case 'POST':
//             {
//             }
//             break;
//     }
//     console.log(req.url);
//     res.end('Ye lo ji response')
// });
// server.listen(8000,function(){
//     console.log(`Server Started`);  
// })


const express = require('express');

const app = express();



app.get('/', (req, res) => {
    res.end('Home page')
})

app.get('/about', (req, res) => {
    res.end('About-Us')
})

app.get('/contact', (req, res) => {
    res.end('Contact-Us')
})


app.listen(8000, () => {
    console.log('Server is running');
})
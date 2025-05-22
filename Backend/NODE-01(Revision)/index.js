// const fs = require('fs')
// const {add} = require('./math.js')
// fs.writeFile('./test.txt','Hello This is Sushil Kumawat!', () => {})

// // console.log({__filename, __dirname, module,require, exports})

// console.log(add(5,6))
// // console.log(math.sub(2,4))

// // excuteWrapperFn(__dirname,__filename,exports,require){}

// // function __require(id){
//     // ... agar id . se shuru hua toh user ki dir mai code ko dhundo
//     // ... khud ke internal module me dhundo
//     // .. agr toh mill gya to well and good
//     //.. nhi toh node_modules maio dhundo
//     // .. user ko erro0r throw karo
// // }


const http = require('http');
const express = require('express');

const handleFunctionV2 = express();

handleFunctionV2.get('/',(req,res)=>res.end('Home Page'))
handleFunctionV2.get('/contact-us',(req,res)=>res.end('Contact Us Page'));
handleFunctionV2.get('/about-us',(req,res)=> res.end('About Us Page'));


// function (req,res){
//     console.log('Incomming request Aaya...')
//     console.log(req.method);
//     console.log(req.url);
//     switch(req.method){
//         case 'GET':
//             {
//                 if(req.url === '/') return res.end('HomePage');
//                 if(req.url === '/contact-us') return res.end('contact-us');
//                 if(req.url === '/about-us') return res.end('about-us');
//             }
//             break;
//         case 'POST':
//             {

//             }
//             break;
//     }
//     res.end('Ye lo ji response')
// }

// const server = http.createServer(handleFunctionV2);

// server.listen(8000,function (){
//     console.log(`Server Started`);
// })

handleFunctionV2.listen(8000,function(){
    console.log(`Server Listening`)
})
// const fs = require('fs');
// const math = require('./math')
// fs.writeFile('./test.txt','Hello World',()=>{});

// console.log(math(5,4))

// // function export(exports, require, module,__filename,__dirname){
// // }

// // function require(id){
// //     // .....
// //     return id
// // }

// function ___require(id){
//     // ... agar id . se start ho to user ki dir mei code ko dhundo
//     // ... agar is . se start nhi hoti to  khud ke internal module mei dhundo
// ------- agar to mil gya to well and good
// nhi to node module me dhundo
// nhi to user ko error throw kro
// }

// // console.log('filepath',__dirname);
// // console.log('filePath',__filename);
// // console.log('module',module);
// // console.log(export);
// // console.log(require);


const express = require('express')
const http = require('http')



const app = express();


app.get('/',(req,res)=>res.end('Homepage'));
app.get('/contact-us',(req,res)=>res.end('Contact us Page'));
app.get('/about-us',(req,res)=>res.end('About Us Page'));

app.use((req,res,next)=>{})

app.listen(8000,function(){
    console.log(`Server Started`);
    
})

// const server = http.createServer(app)


// function handlerFunction(req,res){
//     console.log('Incoming Request Aaya...');
//     console.log('This is method: ',req.method);
//     console.log('This is url(root): ',req.url);

//     switch(req.method){
//         case 'GET':
//             {
//                 if(req.url === '/') return res.end('Home Page');
//                 if(req.url === '/contact-us') return res.end('Contact Us page');
//                 if(req.url === '/about-us') return res.end('About us page');
//             }
//         case 'POST':
//             {

//             }
//         break;
//     }
// }


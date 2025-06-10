// const fs =  require('fs')


// setTimeout(()=>console.log('Set Timeout'), 0)
// setImmediate(()=> console.log('Set Immediate') );


// fs.readFile('sample.txt','utf-8',function(error,data){
    
// setTimeout(()=>console.log('Set Timeout inside fs 1'), 0)

// setImmediate(()=> console.log('Set Immediate inside fs 1') );

// })


// console.log('hello');



const fs = require('fs'); //1

setTimeout(()=> console.log('Set Timeout'), 0); //2
setImmediate(()=> console.log('Set Immediate'));   //3 

console.log('Hello'); //4-> 1(Top level code)


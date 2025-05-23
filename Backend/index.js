const fs =  require('fs')

setTimeout(()=>console.log('Set Timeout'), 0)
setImmediate(()=> console.log('Set Immediate') );

fs.readFile('sample.txt','utf-8',function(error,data){
    
setTimeout(()=>console.log('Set Timeout inside fs 1'), 0)
setImmediate(()=> console.log('Set Immediate inside fs 1') );
})

console.log('hello');
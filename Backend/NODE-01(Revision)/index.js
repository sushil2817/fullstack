const fs = require('fs')
const {add} = require('./math.js')
fs.writeFile('./test.txt','Hello This is Sushil Kumawat!', () => {})

// console.log({__filename, __dirname, module,require, exports})

console.log(add(5,6))
// console.log(math.sub(2,4))

// excuteWrapperFn(__dirname,__filename,exports,require){}

// function __require(id){
    // ... agar id . se shuru hua toh user ki dir mai code ko dhundo
    // ... khud ke internal module me dhundo
    // .. agr toh mill gya to well and good
    //.. nhi toh node_modules maio dhundo
    // .. user ko erro0r throw karo
// }
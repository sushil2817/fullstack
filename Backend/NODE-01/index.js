const fs = require('fs')
const math = require('./math')

fs.writeFile('./test.txt',"Hello World!",()=>{});

// console.log(__dirname);
// console.log(__filename);
console.log(math());
console.log(math.add(5,7));
console.log(math.subtract(5,7));



function __require(id){
    // ... agar id ./ se shuru hua toh user ki dir me code ko dhundo
    // .. Khud ke internal module mei dhundo
}


// executeWrapperDxn(exports, require,module, __dirname,__filename, ){

// }
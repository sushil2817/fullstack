const fs = require('fs');
const math = require('./math')
fs.writeFile('./test.txt','Hello World',()=>{});

console.log(math.sub(5,3))

// function export(exports, require, module,__filename,__dirname){
// }

// function require(id){
//     // .....
//     return id
// }

function ___require(id){
    // ... agar id . se start ho to user ki dir mei code ko dhundo
    // ... agar is . se start nhi hoti to  khud ke internal module mei dhundo
}

// console.log('filepath',__dirname);
// console.log('filePath',__filename);
// console.log('module',module);
// console.log(export);
// console.log(require);

let s1 = {
    fname:'Sushil',
    lname:"Kumawat",
    address:{
        h:1,
        s:1,
        w:3
    }
} 

const s1kaString  = JSON.stringify(s1)

let s2 = JSON.parse(s1kaString)



// let s2 = {
//     fname:s1.fname,
//     lname:s1.lname,
//     address: s1.address
// }

// let s2 = {
    // ...s1, // Spread operator ...  Done work on inner object  make shallow object
    // address:{
    //     ...s1.address
    // }
//}



s2.fname = 'Sushil2'
s2.address.h = 2

console.log(s1);
console.log(s2);
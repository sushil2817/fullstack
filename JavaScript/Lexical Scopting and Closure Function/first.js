// let fname = 'Sushil'

// // Cannot [redeclare] block-scoped variable 'fname'.
// function sayName(){
//     // let fname = 'Nisha'
//     let lname = 'Kumawat';
//     function inner(){
//         console.log('Fname is ',fname,' Lname is ',lname);  
//         return  
//     }
//     inner()
// }
// console.log('Value of Name id  ',fname);
// sayName()   
// function increment(){
//     let count = 0;
//     return function(){
//         return count++
//     }
// }
// const x = increment()
// const y = increment()

let fname = 'Sushil'
// let fname = 'Nisha'
//Cannot redeclare block-scoped variable 'fname'.
function sayName(){
    let lname = 'SomeOne';
    function inner(){
        console.log('Fname is', fname, 'lname is ',lname);
        return;
    }
    inner()
}
console.log('Value of Fname is ',fname);
sayName()
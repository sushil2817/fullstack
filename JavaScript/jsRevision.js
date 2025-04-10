// var name = "sushil"

// variable declaratiokn
let name = "sushil"
const pi = 3.14

// data types
// premitive  -----  non-primitive -----  object

let number = 1234 // Number
let string = "Sushil" // String
let isTrue = true // Boolean
let nothing = null // Null <-> Object
let undefineVar = undefined // undefined
let symbolVar = Symbol() // symbol

let person = {
    name:"Sushil",
    age:19,
    isStudent:true
}

let num = '42'
// let convertedNum = Number(num)
// let convertedNum = +num
let convertedNum = parseInt(num)

console.log(typeof convertedNum);
console.log(convertedNum);

let str = 123
let convertedString = String(str)
console.log(convertedString);
console.log( typeof convertedString);


// ((4+(4-6))*3)

// operations

let a = 10;
let b = 3

let sum = a + b 
let diffrence = a - b 
let product = a * b 
let quotient = a / b 
let remainder = a % b 
let power = a ** b



// conditional

let x = 5
let y = 10

console.log(x == y); // Equal to
console.log(x === y); 
console.log(x != y); // Not Equal to
console.log(x < y); 
console.log(x > y); 
console.log(x <= y); 

console.log(Math.max(5,10));
console.log(Math.min(5,10));

console.log(parseInt(Math.random()*6+1)); // 0 to 1


let firstName = "Sushil"
let laseName = "Kumawat"

let fullName = firstName+laseName //SushilKumawat
let fullName1 = firstName+" "+laseName //Sushil Kumawat

let message = "Hello World"

console.log(message.length);
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.toLocaleLowerCase());
console.log(message.toLocaleUpperCase());


console.log(message.indexOf("w"));
console.log(message.slice(0,5));

let myName = 'Sushil'

let greeting = `Hello ${myName}, 
                from Earth`

// console.log(greeting); 




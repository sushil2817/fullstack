// Function.prototype.describe = function (){
//     console.log(`Function name is ${this.name}`);
// }

// function greet(name){
//     return  `Hellow ${name}`
// }

// greet.describe() // function name is greet



function add(a,b){
    return a+b
}

const substract = function(){
    return a-b
}

const multiply = (a,b) => a*b

function applyOperation (a,b,operation){
    return operation(a,b)
}

const result = applyOperation(5,4,(x,y)=> x/y)


function createCounter(){
    let count = 0;
    return function(){
        count++;
        return count
    }
}
// console.log(count);

const counter = createCounter()
console.log(counter());

(function(){
    console.log("Sushil");
})()
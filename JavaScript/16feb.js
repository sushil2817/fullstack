Function.prototype.describe = function (){
    console.log(`Function name is ${this.name}`);
}

function greet(name){
    return  `Hellow ${name}`
}

greet("sushil").describe
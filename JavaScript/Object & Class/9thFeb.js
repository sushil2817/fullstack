// Problem 1: create an object and add coffie and it's type like name, type, caffeine

const teas = {
    name:"Lemon tea",
    type:"Green",
    caffine:"low"
}

// Problem 2: Access and print the name and type prop. of the tea object.

console.log(teas.name);
console.log(teas["type"]);

// Problem 3: Add a new property origin to the tea object

teas.origin = "China"
console.log(teas);


// Problem 4: Change the caffeine level of the tea object to "Medium"
teas.caffine = "Medium"
// Problem 5: remove the type property from the tea object

delete teas.type

console.log(teas);

// Problem 6: Check if the tea object has a property origin.

console.log("origin" in teas);

// Problem 7: print all property using forin loop
// console.log("print object");

for(let i in teas){
    console.log(i+": "+teas[i]);
}

// Problem 8: create a nested object representing diffrent type of teas and their properties.

const myTeas = {
    greenTea:{
        name:"Green Tea"
    },
    blackTea:{
        name:"Black Tea"
    }
}

// Problem 9: creat a copy of the tea object

const teaCopy = {...teas } // shallow copy you can change the value but in deep you can create/copy new object
const anotherCopy = teas // reference to the variable


// Problem 10:

// create an object representing a type of tea with properties for name , type and caffine content
const chai = {
    name:"Lemon tea",
    "tea type": "Green",
    caffine : "low", 
}

console.log(chai.name);
console.log(chai["tea type"]);

// add a new properties origin to the tea object
chai.origin = "China"
// change the caffine level of the tea objkect to medium
chai.caffine = "Medium"
// remove the type properties from chai object
delete chai["tea type"]

// check if the tea object has a propertioes origin
console.log("origin" in chai);
// user a for... in loop to print all properties of the tea object

for(let chai1 in chai){
    console.log(chai+":  "+chai[chai1]);
}
// create a nested object representing diff types of teas and their properties

const myChais = {
    greenTea :{
        name:"Green tea",
        cups:{
            one:"1",
            two:"2"
        }
    },
    blacTea:{
        name:"Black Tea",
        cups:{
            one:"1",
            two:"2"
        }
    }
}

//  create a copy of the teas object

const chaiCopy = {
    ...myChais
}
// shallow copy
console.log(chaiCopy)

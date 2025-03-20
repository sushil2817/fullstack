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
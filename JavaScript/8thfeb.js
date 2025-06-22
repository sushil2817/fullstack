//Problem:  create an arrary with trees
const teas = ["Green Tea","Black Tea","Oolong Tea","White Tea","Herbal Tea"];
console.log(teas);
//Problem:  add new tea
teas.push("lemon Tea");
//Problem:  remove oolang tea
const index = teas.indexOf("Oolong Tea");
console.log(index) // give the index of the element = 2 else show -1
if(index > -1){
    teas.splice(index,1); // remove the element from first to second argument
}
//Problem:  filter the list caffinated tea
const caffinatedTea = teas.filter((tea) => tea !== "Herbal Tea");
console.log(caffinatedTea);

//Problem:  sort the list of teas in alphabetical order
const test = ["egg","chicken"]
console.log(test.sort());

console.log(teas.sort());

//Problem:  use a for loop to print each type of tea in the array
// for(const tea of teas){
//     console.log(tea);
// }
for(let i=0;i<teas.length;i++){
    console.log(teas[i]);
}
//Problem: use a for loop to count how many teas are caffieinated (excluding "herbal tea")

let caffieinatedMyTeas = 0;
for(let i=0;i<teas.length;i++){
    if(teas[i] !== "Herbal Tea"){
        caffieinatedMyTeas++;
    }
}

// Problem:  use a for loop to create a new array with all tea names in uppercase.

const teasInUpperCase = [];
for(let i=0;i<teas.length;i++){
    teasInUpperCase.push(teas[i].toUpperCase())
}

console.log(teasInUpperCase);

// Problem: Use a fro loop to find the tea name with the most characters.

let longestTea  = teas[0];
for(let i=0;i<teas.length;i++){
    if(teas[i].length > longestTea.length){
        longestTea = teas[i];
    }
}
console.log(longestTea);

// Problem: Use a for loop to find reverse the order of the teas array.

const reversedTeas = [];
for(let i=teas.length-1;i>=0;i--){
    reversedTeas.push(teas[i]);
}
console.log(reversedTeas);

// pratice on them
// math function
// filter function
// map function
// reduce function
// sort function
// arr high order functions


//  Problem : Create an array containing different types of teas

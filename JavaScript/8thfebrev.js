const teas1 = ["Green Tea", "Black Tea","Bubble Tea", "OolangTea","White Tea",]
console.log(teas1);


// add new tea

teas1.push("Herbal Tea");
console.log(teas1);

// remove oolang tea

const index = teas1.indexOf("OolangTea");
console.log(index);
if(index > -1) {
   console.log( teas1.splice(index, 1));
}

// filter the list of onlu=y include teas that contain the caffine
const cafinatedTea =  teas1.filter((tea) => tea !== "Herbal Tea")
console.log(cafinatedTea);

// sort the teas in alphabetical order
const sortedArray = teas1.sort();
console.log(sortedArray);

for(let i=0;i<teas1.length;i++){
    console.log(teas1[i]);
}

let count = 0;

for (let i=0;i<cafinatedTea.length;i++){
        count++;
}   

console.log(count);

// use a for loop to convert all tea in upper case

const upperCaseTeas = [];

for (let i=0;i<teas1.length;i++){
    upperCaseTeas.push(teas1[i].toUpperCase())
}
console.log(upperCaseTeas);

// use a for loop to find the tea name with the most character
let longestTea = ""

for(let i=0; i<teas1.length;i++){
    if(teas1[i].length > longestTea.length){
        longestTea = teas1[i];
    }
}
console.log(longestTea);
// reverse the order of the teas

const reverseArray = []

for(let i=teas1.length-1;i>=0;i--){
    reverseArray.push(teas1[i]);
}

console.log(reverseArray);
console.log(teas1.length-1);
console.log(teas1.length);

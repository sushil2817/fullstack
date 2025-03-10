// create an arrary with trees
const teas = ["Green Tea","Black Tea","Oolong Tea","White Tea","Herbal Tea"];
console.log(teas);
// add new tea
teas.push("lemon Tea");

// remove oolang tea

const index = teas.indexOf("Oolong Tea");
console.log(index) // give the index of the element
if(index > -1){
    // teas.splice(index,1); reove the element from first to second argument
}


// filter the cafinated tea
const cafinatedTea = teas.filter((tea) => tea !== "Herbal Tea");


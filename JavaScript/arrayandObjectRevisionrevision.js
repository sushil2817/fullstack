let chaitypes = ["Masala Chai", "Ginger Chai","Green Tea","Lemon Tea"]
console.log(chaitypes);

console.log(`Total chai types: ${chaitypes.length}`);

chaitypes.push("Herbal Tea") // value ko array ke end me set kr deta
const data = chaitypes.pop() // remove value from the last into the array
console.log(data);

let index = chaitypes.indexOf("Green-Tea")
console.log(index);
if(index !== -1){
    chaitypes.splice(index,1)
}
console.log(chaitypes);

chaitypes.forEach((chai, index)=>{
    console.log(`${index+1}: ${chai}`);
    
})

let moreChaiTypes = ["Oolong Tea", "White Tea"]
let allChaiTypes = chaitypes.concat(moreChaiTypes)
console.log(allChaiTypes);

let newChaiTypes = [...chaitypes, "Chamolina Tea", "new Tea"]

console.log(newChaiTypes);


let [firstChai,secondChai] = chaitypes

console.log(firstChai);
console.log(secondChai);

// Objects

let chaiRecipe = {
    name:"Masala Chai",
    ingredients:{
        teaLeaves:"Assam tea",
        milk:"Full Cream Milk",
        sugar:"Brown suagr",
        spices:["Daalchini","Ginger"]
    },
    instruction:"Boil water, add tea leaves, milk,sugar and spices"
}

console.log(chaiRecipe.ingredients.spices[1]);

let updatedChaiRecepie = {
    ...chaiRecipe,
    instruction:"Boil water, add tea leaves, milk, sugar, spices with some love"
}

console.log(updatedChaiRecepie);

let {name,myingredients} = chaiRecipe

console.log(myingredients);
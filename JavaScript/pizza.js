let numberOfGuest = 5;

let pizzaSize;

// small <=2
// medium <=5
// large


if(numberOfGuest < 4){
    pizzaSize = "Small"
    console.log("Order the pizza with size "+pizzaSize);
}else if(numberOfGuest == 4){
    pizzaSize = "medium"
    console.log("Order the pizza with size "+pizzaSize);
}else if(numberOfGuest >= 5){
    pizzaSize = "large"
    console.log("Order the pizza with size "+pizzaSize);
    
}
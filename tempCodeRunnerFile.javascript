function prepareChai(type){
    if(type === "Masala Chai"){
        console.log("Adding Spices to the chai");
    }else{
        console.log("Preparing regular chai");
    }
}

prepareChai("Masala Chai")
prepareChai("ginger Chai")

/*
Ek online store mein, agar customer ka total bill amount 1000 se zayada hai, to 10% discount milta hai toh, full amount pay karna padtha hai.
*/


function calculateTotal(amount){
    let amount = Number(amount)
    console.log(amount);
    if(amount >=1000){
        return amount * 0.9
    }else{
        return amount
    }
}

console.log(calculateTotal(1000));
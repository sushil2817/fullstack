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
    let amount1 = Number(amount)
    console.log(typeof amount1);
    // if(amount1 >=1000){
    //     return amount * 0.9
    // }else{
    //     return amount
    // }

    return amount1>1000 ? amount*0.9 : amount

}

console.log(calculateTotal(9000));

/* 
Ek traffic light system mein, agar light "red" hai, toh "Stop" print karo. Agar "Yellow" ha, toh "Slow down" print karo, Agar "Green" hait toh "Go" print karo
*/

function traffic(color){
    let newColor = color.toLowerCase()
    console.log(newColor);
    
    switch(newColor){
        case "red":
            console.log("Stop your vehical");
            break;
        case "yellow":
            console.log("Slow down your vehical");
            break;
        case "green":
            console.log(" Go ");
            break ;
        default:
            console.log("Chala kaat do");
            
    }
}

traffic("yellow")



function checktruthyValue(value){
    if(value){
        console.log("Truthy");
    }else{
        console.log("False");
    }
}

// // console.log(checktruthyValue(1))
// // console.log(checktruthyValue(0))
// // console.log(checktruthyValue("Sushil"))
// // console.log(checktruthyValue(""))
// console.log(checktruthyValue([]))

function login(username,password){
    if(username === 'admin' && (password === '1234' || loginIp == "127")){
        console.log("Login successfull");
    }
    else{
        console.log("Invalid credentials");
        
    }
}
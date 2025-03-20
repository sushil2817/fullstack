// const arr = [1,2,3,4,5];

// arr.prototype.sushil = function(){
//     console.log("Sushil");
// }
// const arr2 = [1,2,4,4,5]
// // console.log(arr2.sushil)

// if(!Array.prototype.fill){
//     // fallback
//     Array.prototype.fill = function(){
//         console.log("Sushil");
//     }
// }


// arr.fill()


const arr = [1,2,3,4,5,6];
// Error: .forEach function does not exist on arr variable 

// Real Signature ko samjo- No return, funtion input, value, index
// call my fn for every value

if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(userFn){
        const originalArr = this
        for(let i=0;i<originalArr.length;i++){
            userFn(originalArr[i],i)
        }
    }
}

const rat = arr.myForEach(function(value,index){
    console.log(`My For Each Value at Index${index} is ${value}`);
    
})

console.log(rat);


// Signature- .map
// Return? - New Array, Each ele Iterate,userFn

if(!Array.prototype.myMap){
    Array.prototype.MyMap = function(useFn){
        const result = []

        for(let i=0;i<this.length;i++){
            const value = useFn(this[i],i)
            result.push(value)
        }
        return result
    }
}
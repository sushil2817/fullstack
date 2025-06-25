if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(userFn)
    {
        const originalArr = this
        for(let i=0;i<originalArr.length;i++){
            userFn(originalArr[i],i)
        }
    }
}


const arr = [1,2,3,4,5,6]

// Error: .forEach function does not eist on arr variable
// Real Signature ko samjo- No return, function input, value, index
// call my fn for every time

const ret = arr.myForEach(function(value,index){
    console.log(`My For Each Value at Index ${index} id ${value}`);
})

console.log(`Ret is `, ret)

// signature .map
// Return? - New Arry, Each elet Iterative , userFn

if(!Array.prototype.myMap){
    Array.prototype.myMap = function(userFn){
        const result =  []
        for(let i=0;i<this.length;i++){
            const value = userFn(this[i],i)
            result.push(value)
        }
        return result
    }
}

const n = arr.myMap((r) => {return r*3})
console.log(n);

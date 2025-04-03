const person = {
    x:10,
    firstName:'Sushil',
    LastName:'Kumawat',
    hobbies:['Coding','Gym'],
    isMarried:false,
    hasGf:false,
    getFullName:function(){
        return 'Sushil Kumawat'
    },
    address:{
        hno:1,
        street:1,
        countryCode:'IN',
        state:'RJ'
    }
}
console.log(person.address);
// use cases
// to represent real word entity


let fname = 'Sushil';
let fname2 = fname

console.log(fname)
fname2 = 'Kumawat'
console.log(fname2)


 
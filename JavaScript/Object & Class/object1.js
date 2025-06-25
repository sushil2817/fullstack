// const person = {
//     x:10,
//     firstName:'Sushil',
//     LastName:'Kumawat',
//     hobbies:['Coding','Gym'],
//     isMarried:false,
//     hasGf:false,
//     getFullName:function(){
//         return 'Sushil Kumawat'
//     },
//     address:{
//         hno:1,
//         street:1,
//         countryCode:'IN',
//         state:'RJ'
//     }
// }
// console.log(person.address);
// // use cases
// // to represent real word entity
// let fname = 'Sushil';
// let fname2 = fname
// console.log(fname)
// fname2 = 'Kumawat'
// console.log(fname2)

// const person = {
//     x:10,
//     firstName:'Sushil',
//     lastName:'Kumawat',
//     hobbies:['Coding','Gym'],  
//     isMarried:false,
//     address:{
//         hno:1,
//         street:1,
//         countryCode:'IN',
//         state:'RJ'
//     },

//     getFullName : function(){

//         return 'Sushil Kumawat'; 
        
//     }
    
// }

// console.log(person.firstName+' ' + person.lastName);
// console.log(person.hobbies[0])
// how to get all hobbies from person object using forEach

const person = {    
    firstName:"Sushil",
    lastName:"Kumawat",
    hobbies:["Coding","Gym","learning"],
    isMarried: false,
    hasGF:true,
    hasCrush:Infinity,
    getFullName: function(){
        return "Sushil Kumawat";
    },
    addres:{
        hno:1,
        street:1,
        countryCode:"IN",
        state:"RJ"
    }

}

// console.log(person.address.state);

const remote = {
    color:'black',
    brand:'LG',
    dimension:{
        height:10,
        width:5
    },
    turnOff:function(){
        console.log('Turning off the TV');
    },
    volumnUp:function(){
        console.log('Increasing the volume');
    }
}

const fname = 'Sushil'
const fname2 = fname;
console.log(fname);



let  fname = 'Sushil'
console.log(typeof fname);
let fname2 = fname;
console.log(typeof fname2);
console.log(fname);
console.log(fname2);

fname2 = 'Sushil Kumar';
console.log(fname2);
console.log(fname);



console.log(p1);
console.log(p2);


let p1 = {
    fname :'Sushil',
    lname:"kumar",
    addres:{
        house:'123',
        city:'Jaipur',
        state:'Rajasthan'
    } 
}

// let p2 = {
//     fname: p1.fname,
//     lname: p1.lname,
//     addres: {
//         house: p1.addres.house,
//         city: p1.addres.city,
//         state: p1.addres.state
//     }
// }

const p1KaString = JSON.stringify(p1);
console.log(p1KaString);

let p2 = JSON.parse(p1KaString);

console.log(p2);

p2.fname = 'Nisha';
p2.lname = "Kumawat";

// if you have 100 key value in an object tgn spread the object

// let p2  = { 
//     ...p1 //spread operator
// }; // shallow copy

// p2.fname = 'Nisha'
// p2.lname="Kumawat"
// p2.addres.city = 'Delhi';

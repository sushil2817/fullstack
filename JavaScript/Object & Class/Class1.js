// Prototype Inheritance // Chaining

class Person {
    constructor(fname,lname){
        this.fname = fname;
        this.lname = lname;
    }

    getFullName(){
        return `${this.fname} ${this.lname}`
    }
}

// syntext sugar

const p1 = new Person('Sushil','Kumawat')
const p2 = new Person('done','Kumawat') 
// console.log(p1.getFullName())
// console.log(p2.getFullName())






const obj1 = {
    fname:"Sushil",
    lname:"Kumawat",
    getFullName:function(){
        if(this.lname !== undefined) return `${this.fname} ${this.lname}`;
        return `${this.fname} ${this.lname}`;
    }
};
const obj2 = {
    fname:"done",
    lname:"Kumawat",
}

obj2.__proto__ = obj1
// obj1.__proto__= null

// DRY - Do not repeat yourself

console.log(obj1.getFullName());
console.log(obj2.getFullName());
console.log(obj2.toString());







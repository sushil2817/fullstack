class Person {
    constructor(fname,lname){
        this.fname = fname,
        this.lname = lname
    }
    getFullName(){
        return `${this.fname} ${this.lname}`
    }
}

const p1 = new Person('Sushil','Kumawat');
const p2 = new Person('Nisha','Kumawat');

console.log(p1.getFullName());
console.log(p2.getFullName());

function add(x:number, y: number){
    return x+y;

}

function createUser(user:{firstname:string; lastname?:string}){
    if(!user.lastname) return;
    const trimmedLastName:string = user.lastname.trim()
}

let x = add(4,4).toFixed(3)

createUser({
    firstname:'Sushil',
    lastname:'Kumawat'
})
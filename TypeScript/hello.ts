function add(x:number, y: number){
    return x+y;

}

function createUser(user:{firstname:string; lastname?:string}){
    if(!user.lastname) return;
    const trimmedLastName:string = user.lastname.trim()
}

interface User{
    firstname:string;
    lastname?:string;
    email:string;
    profileImageURL?: string;
}

function updateUser(user:User){
    user
}

const payload:User = {
    firstname:'',
    email:''
}


updateUser(payload)

let x = add(4,4).toFixed(3)

createUser({
    firstname:'Sushil',
    lastname:'Kumawat'
})
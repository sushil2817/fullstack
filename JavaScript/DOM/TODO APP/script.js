// alert("Hello")

const todoInput = document.getElementById('todo-input')
const addTodo = document.getElementById('add-todo')
const todoItems = document.getElementById('todo-items')
const delbtn = document.getElementById('del')

console.log(todoItems);


addTodo.addEventListener('click',()=>{
    const value = todoInput.value
    // console.log('User entered', value);

    const li = document.createElement('li') //<li></li>
    const btn = document.createElement('button')
    btn.innerText = 'X'
    // console.log(btn);
    
    
    li.innerText = value // <li>{value}</li>
    li.appendChild(btn)
    btn.addEventListener('click',()=>{
        li.remove();
    })
    todoItems.appendChild(li)
    // console.log(li); 
    todoInput.value = ''

    delbtn.addEventListener('click',()=>{
        for(let i=0;i<todoItems.childNodes.length; i++){
            li.remove()
        }
    })

})



// calculator
// bmi/
// review
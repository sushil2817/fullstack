// // alert("Hello")

// const todoInput = document.getElementById('todo-input')
// const addTodo = document.getElementById('add-todo')
// const todoItems = document.getElementById('todo-items')
// const delbtn = document.getElementById('del')

// console.log(todoItems);


// addTodo.addEventListener('click',()=>{
//     const value = todoInput.value
//     // console.log('User entered', value);

//     const li = document.createElement('li') //<li></li>
//     const btn = document.createElement('button')
//     btn.innerText = 'X'
//     // console.log(btn);
    
    
//     li.innerText = value // <li>{value}</li>
//     li.appendChild(btn)
//     btn.addEventListener('click',()=>{
//         li.remove();
//     })
//     todoItems.appendChild(li)
//     // console.log(li); 
//     todoInput.value = ''

//     delbtn.addEventListener('click',()=>{
//         for(let i=0;i<todoItems.childNodes.length; i++){
//             li.remove()
//         }
//     })

// })



// // calculator
// // bmi/
// // review
const addBtn = document.getElementById('add-btn')
const todoInput = document.getElementById('todo-input')
const todoItemsContainor = document.getElementById('todo-items-containor')
const removAll = document.getElementById('remov-All')

addBtn?.addEventListener('click',()=>{
    const value1 = todoInput?.value;
    // console.log('User entered', value1);
    const li = document.createElement('li')
    li.innerText = value1
    const delButton = document.createElement('button')
    delButton.innerText = 'X'
    delButton.addEventListener('click',()=>{
        li.remove()
    })
    li.appendChild(delButton)

    todoItemsContainor?.appendChild(li)
    todoInput.value = ''
    removAll?.addEventListener('click',()=>{
        todoItemsContainor?.removeChild(todoItemsContainor)
    })
})


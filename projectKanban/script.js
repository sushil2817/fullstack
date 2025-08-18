const addTaskbutton = document.getElementById('addTaskButton')
const todoBoard = document.getElementById('todo-board')

addTaskbutton?.addEventListener('click',()=>{
    const input = prompt('What is the task?');
    if(!input) return 
    const taskCard = document.createElement('p')
    taskCard.classList.add('item');
    taskCard.setAttribute('draggable',true)
    taskCard.innerText = input; 
    taskCard.addEventListener('dragstart',()=>{
        taskCard.classList.add('flying');
    })
    taskCard.addEventListener('dragend',()=>{
        taskCard.classList.remove('flying');
    })
    todoBoard?.append(taskCard)
})


const allBoards = document.querySelectorAll('.board');
const allItems = document.querySelectorAll('.item');

allItems.forEach((item)=>{                        
    item.addEventListener('dragstart',()=>{
        item.classList.add('flying');
    })
    item.addEventListener('dragend',()=>{
        item.classList.remove('flying');
    })
})

allBoards.forEach(board =>{
    board.addEventListener('dragover',()=>{
        const flyingElement = document.querySelector('.flying')
        // console.log(board, 'Kuch toh mere upr se gaya',flyingElement);
        if(flyingElement !=  null){
            board.appendChild(flyingElement);
        }
    })
})

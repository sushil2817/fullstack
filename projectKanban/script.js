const addTaskbutton = document.getElementById('addTaskButton')
const todoBoard = document.getElementById('todo-board')

addTaskbutton?.addEventListener('click',()=>{
    const input = prompt('What is the task?');
    if(!input) return 
    const taskCard = document.createElement('p')
    taskCard.classList.add('item');
    taskCard.setAttribute('draggable',true)
    taskCard.innerText = input;
    todoBoard?.append(taskCard)
})


const allBoards = document.querySelectorAll('.board');

allBoards.forEach(board =>{
    board.addEventListener('dragover',()=>{
        console.log(board, 'Kuch toh mere upr se gaya');
    })
})

function changeBackgroundColor(color1,color2){
    document.body.style.backgroundColor = color1
    document.body.style.color = color2
}
// function changeBackgroundColorWhite(color){
//     document.body.style.backgroundColor = color
// }

// const darkButton = document.getElementById('theme-button')
// darkButton?.addEventListener('click',function(){
//     changeBackgroundColorBlack('black')
// })


const toggleButton = document.getElementById('theme-button');

toggleButton?.addEventListener('click',()=>{
    // console.log(document.body.style.backgroundColor);
    const currentColor = document.body.style.backgroundColor;
    if(!currentColor || currentColor == 'white'){
        changeBackgroundColor('black','white')
        toggleButton.innerText = 'Light Mode'
    }else{
        changeBackgroundColor('white','black')
        toggleButton.innerText = 'Dark Mode'
    }
})
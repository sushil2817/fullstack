// window.document.write('Hellow form js')

function changeBackgroundBlack(color1, color2){
    document.body.style.backgroundColor =  color1
    document.body.style.color = color2
}
function changeBackgroundWhite(color1, color2){
    document.body.style.backgroundColor = color1
    document.body.style.color = color2
}

// const darkButton = document.getElementById('darkbtn')
// const whiteButton = document.getElementById('whitebtn')
// // darkButton.innerHTML = "Hello"

// darkButton.addEventListener('click',function(){
//     document.body.style.backgroundColor = "black"
//     document.body.style.color = "white"
//     console.log("I got clicked");
    
// })

// whiteButton.addEventListener('click',function(){
//     document.body.style.backgroundColor = "white"
//     document.body.style.color = "black"
//     console.log('I got clicked WHite button');
    
// })

// console.log(darkButton);
// console.log(whiteButton);


const themeButton = document.getElementById('theme-button')

themeButton.addEventListener('click',()=>{

    const currentColor = document.body.style.backgroundColor

    if(!currentColor || currentColor == 'white'){
        changeBackgroundBlack('black','white')
        themeButton.innerHTML= 'Light'
    }else{
        changeBackgroundWhite('white','black')
        themeButton.innerHTML= 'Dark'
    }
})
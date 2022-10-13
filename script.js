const KeyDisplay = document.querySelector('.key h2');
const keycodeDisplay = document.querySelector('keycode h2');
const keycodeD =document.querySelector('keycode');
const welcometext = document.querySelector('.welcomeText');

window.addEventListener('keydown', (e) =>{
    welcometext.classList.add('hide')
    KeyDisplay.innerText = e.key;
    keycodeDisplay.innerText = e.keycode;
    if(e.keycode === 32){
        KeyDisplay.innerText = `'space'`;
    }
})

keycodeD.addEventListener('click' (e)=>{
    const textArea = document.createElement('textarea' )
})
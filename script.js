const KeyDisplay = document.querySelector('.key h2');
const keycodeDisplay = document.querySelector('.keycode h2');
const keycodeD =document.querySelector('.keycode');
const welcometext = document.querySelector('.welcomeText');

window.addEventListener('keydown', (e) =>{
    welcometext.classList.add('hide')
    KeyDisplay.innerText = e.key;
    keycodeDisplay.innerText = e.keyCode;
    if(e.keyCode === 32){
        KeyDisplay.innerText = `'space'`;
    }
});

keycodeD.addEventListener('click', (e) =>{
    const textArea = document.createElement('textarea');
    textArea.setAttribute('readonly', '');
    textArea.style.position= 'absolute';
    textArea.value = keycodeD.querySelector('h2').innerText;
    document.body.appendChild(textArea)
    textArea.select();
    document.execCommand('copy');
    Document.body.removeChild(textArea);
    keycodeD.querySelector('p').innerText = 'copied';
})
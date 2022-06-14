const resultado = document.querySelector(' .result ');
const confirmar = document.querySelector('#confirmar');
const lightMode = document.querySelector('#lightmode');
const darkMode = document.querySelector('#arkmode');
const body = document.querySelector('body');
const title = document.querySelector('h1');

function insert( valor ){
    resultado.innerHTML += valor;
}


function clean() {
    resultado.innerHTML = ' ';
}


function submit() {
    if(resultado.textContent != 'Erro') {
        document.getElementById("resultado").innerHTML = eval(resultado.innerHTML);
    }
}


//keyboard event 

let textBox = document.querySelector('html');
textBox.addEventListener('keydown', (event) => {
    console.log(`key=${event.key},code=${event.code}`);
    switch (event.key) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '.':
        case 'x':
        case '/':
        case '=':
        case '-':
        case '+':
        case '*':
            return insert(event.key)
            break;
        case 'Enter':
            submit();
            break;
        case 'Escape':
            clean();
    }
});


// change theme

lightMode.addEventListener = (click, changeToLightMode);

function changeToLightMode() {
    title.style.color = 'black';
    body.style.background = 'white';
}


darkMode.addEventListener = (click, changeToDarkMode);

function changeToDarkMode() {
    title.style.color = 'white';
    body.style.background = 'black';
    
}

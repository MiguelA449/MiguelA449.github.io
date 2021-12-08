// let randomNumer = Math.floor(Math.random() *100) + 1;

let randomNumber = Math.floor(Math.random()*100) +1 ;

let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');

let guessField = document.querySelector('.guessField');
let guessSubmit = document.querySelector('.guessSubmit');

let guessCount = 1;
let resetButton;

guessSubmit.addEventListener('click', checkGuess);

function checkGuess(){
    let userGuess = Number(guessField.value);

    if (guessCount === 1){
        guesses.textContent = "Intentos anteriores: ";
    }
    guesses.textContent += userGuess + ' ';


    if (userGuess === randomNumber ) {
        lastResult.textContent = "Has ganado, felicitaciones!!!";
        lastResult.style.backgroundColor = "green";
        lastResult.style.fontSize = '15px';
        lowOrHi.textContent = ' ';
        guesses.textContent = ' ';    
        setGameOver();   
    }

    else if(userGuess < randomNumber){
        lastResult.textContent = "Intentalo de nuevo";
        lastResult.style.backgroundColor = "red";
        lowOrHi.textContent = "Estas abajo del número";


    } else if (userGuess > randomNumber){
        lastResult.textContent = "Intentalo de nuevo";
        lastResult.style.backgroundColor = "red";
        lowOrHi.textContent = "Estas arriba del número";
    }
    if (guessCount === 10){
        lastResult.textContent = "Has perdido!"
        lastResult.style.backgroundColor = "red";
        setGameOver();
    }


    guessCount++;
    guessField.value = ' ';
    guessField.focus();
}

function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true; 
    resetButton = document.createElement('button');
    resetButton.textContent = 'Reiniciar';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame(){
    guessCount = 1;
    guessField.disabled = false;
    guessSubmit.disabled = false; 

    let resetParas = document.querySelector('.resultParas')

    for(let i = 0; i < resetParas.lenght; i++){
        resetParas[i].textContent = ' ';
    }

    resetButton.parentNode.removeChild(resetButton);

    guesses.textContent = ' ';
    lastResult.textContent = ' ';
    lowOrHi.textContent = ' ';

    lastResult.style.backgroundColor = 'white';
}

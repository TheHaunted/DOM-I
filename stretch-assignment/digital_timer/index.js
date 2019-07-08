let timerContainer = document.querySelector('.digits');

let secondTens = timerContainer.querySelector('#secondTens');
let secondOnes = timerContainer.querySelector('#secondOnes');
let colon = timerContainer.querySelector('#colon');
let msHundreds = timerContainer.querySelector('#msHundreds');
let msTens = timerContainer.querySelector('#msTens');

secondOnesValue = timerContainer.querySelector('#secondOnes').textContent;
window.setInterval(function(){
    
    if (secondOnes.textContent === '-'){
        secondOnes.textContent = 1;
        console.log(secondOnes.textContent);
    }

    else if (secondOnes.textContent === 9){
        secondOnes.textContent = 0;
        console.log(secondOnes.textContent, 'loop');
    }

    else {
        secondOnes.textContent++;
        console.log(secondOnes.textContent);
    }
}, 1000);
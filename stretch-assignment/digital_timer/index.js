let timerContainer = document.querySelector('.digits');

let secondTens = timerContainer.querySelector('#secondTens');
let secondOnes = timerContainer.querySelector('#secondOnes');
let colon = timerContainer.querySelector('#colon');
let msHundreds = timerContainer.querySelector('#msHundreds');
let msTens = timerContainer.querySelector('#msTens');

secondOnesValue = 0;
window.setInterval(function(){
    
    if (secondOnesValue === 9){
        secondOnesValue = 0;
        secondOnes.textContent = secondOnesValue;
        console.log(secondOnes.textContent, 'loop');
    }

    else {
        secondOnesValue++;
        secondOnes.textContent = secondOnesValue;
        console.log(secondOnes.textContent);
    }
}, 1000);
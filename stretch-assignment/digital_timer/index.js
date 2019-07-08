let timerContainer = document.querySelector('.digits');

let secondTens = timerContainer.querySelector('#secondTens');
let secondOnes = timerContainer.querySelector('#secondOnes');
let colon = timerContainer.querySelector('#colon');
let msHundreds = timerContainer.querySelector('#msHundreds');
let msTens = timerContainer.querySelector('#msTens');

let secondOnesValue = secondOnes.textContent;
window.setInterval(function(){
    
    if (secondOnesValue === '-'){
        secondOnesValue = '0';
        console.log(secondOnesValue);
    }

    else if (secondOnesValue === 9){
        secondOnesValue = 0;
        console.log(secondOnesValue);
    }

    else {
        secondOnesValue++;
        console.log(secondOnesValue);
    }
}, 1000);
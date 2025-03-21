'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct answer!';


document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 14;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 2;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        // document.querySelector('.message').textContent = '⛔️ No Number';
        displayMessage('⛔️ No Number');
    } else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = '🎉 Correct answer!';
        displayMessage('🎉 Correct answer!');
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    } else if (guess !== secretNumber) {
        if (score > 1) {
            score = score - 1;
            // document.querySelector('.message').textContent = (guess > secretNumber) ? ('📈 Too High') : ('📉 Too Low');
            displayMessage((guess > secretNumber) ? ('📈 Too High') : ('📉 Too Low'));
            document.querySelector('.score').textContent = score;
        }
        else {
            // document.querySelector('.message').textContent = '🔻 You Lost the game!';
            displayMessage('🔻 You Lost the game!');
            document.querySelector('.score').textContent = 0;
        }

    }
});

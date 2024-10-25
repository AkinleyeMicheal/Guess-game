'use strict';

// document.querySelector('.message').textContent = 'Correct Number!🎊';

// console.log(
//   (document.querySelector('.message').textContent = 'Correct Number!🎊')
// );

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23;

//after listening to a click event made on the target the "addEventListener" method is appended to the function that follows perfroms an action as a response or reaction to that event, which is to print the value of the input element with the class ".guess" to the console.

// building up the game logic...
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // when there is no input
  if (!guess) {
    displayMessage('🚨Please input a valid Number!');

    // when the player wins...
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!🎊');

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!😣');
      document.querySelector('.score').textContent = 0;
    }
    // when guess is too high
    // } else if (guess > secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = '📈 Too High!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'You lost the game!😣';
    //     document.querySelector('.score').textContent = 0;
    //   }
    //   // when guess is too low
    // } else if (guess < secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = '📉 Too Low!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'You lost the game!😣';
    //     document.querySelector('.score').textContent = 0;
    //   }
  }
});

const playAgain = document.querySelector('.again');

playAgain.addEventListener('click', function () {
  // location.reload();
  // history.go(0);
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

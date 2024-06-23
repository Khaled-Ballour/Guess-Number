'use strict';

const number = 20;

const message = document.querySelector('.message');
const guessEle = document.querySelector('.guess');
const scoreEle = document.querySelector('.score');
const highscoreEle = document.querySelector('.highscore');
document.querySelector('.check').addEventListener('click', e => {
  const guess = Number(guessEle.value);
  if (!guess) message.textContent = 'No number!';
  else {
    if (guess === number) {
      message.textContent = 'Correct guess';
      if (Number(scoreEle.textContent) > Number(highscoreEle.textContent))
        highscoreEle.textContent = scoreEle.textContent;
      scoreEle.textContent = '20';
    } else {
      message.textContent = guess > number ? 'Too high' : 'Too small';
      scoreEle.textContent = Number(scoreEle.textContent) - 1;
    }
  }
});

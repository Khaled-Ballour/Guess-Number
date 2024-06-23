'use strict';

const number = Math.trunc(Math.random() * 20) + 1;
let withinTheRound = true;

const message = document.querySelector('.message');
const guessEle = document.querySelector('.guess');
const scoreEle = document.querySelector('.score');
const highscoreEle = document.querySelector('.highscore');

document.querySelector('.check').addEventListener('click', e => {
  if (!withinTheRound) return;
  const guess = Number(guessEle.value);
  if (!guess) message.textContent = 'No number!';
  else {
    if (guess === number) {
      message.textContent = 'Correct guess';
      if (Number(scoreEle.textContent) > Number(highscoreEle.textContent))
        highscoreEle.textContent = scoreEle.textContent;
      withinTheRound = false;
    } else {
      message.textContent = guess > number ? 'Too high' : 'Too small';
      if (Number(scoreEle.textContent) > 0)
        scoreEle.textContent = Number(scoreEle.textContent) - 1;
    }
  }
});

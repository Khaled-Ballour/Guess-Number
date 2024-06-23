'use strict';

const number = Math.trunc(Math.random() * 20) + 1;

const message = document.querySelector('.message');
const guessEle = document.querySelector('.guess');
document.querySelector('.check').addEventListener('click', e => {
  const guess = Number(guessEle.value);
  if (!guess) message.textContent = 'No number!';
  else
    message.textContent =
      guess === number ? 'Correct' : guess > number ? 'Too big' : 'Too small';
});

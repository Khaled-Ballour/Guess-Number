'use strict';

const number = 20;

const message = document.querySelector('.message');
document.querySelector('.check').addEventListener('click', e => {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) message.textContent = 'No number!';
  else
    message.textContent =
      guess === number ? 'Correct' : guess > number ? 'Too big' : 'Too small';
});

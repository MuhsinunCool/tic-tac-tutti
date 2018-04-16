/*

  index.js

*/

const square = document.getElementsByClassName('square');

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');

let xwins = 0;
let owins = 0;

const scoreboard = document.getElementsByClassName('scoreboard');

for (let i = 0; i < square.length; i++) {
  square[i].addEventListener('click', function(event) {
    if ((square[i].innerHTML === `X`) | (square[i].innerHTML === `O`)) {
      console.log('Box already filled with either X or O');
      return;
    } else {
      square[i].innerHTML = `X`;
      console.log('Box filled with X');

      if (
        (one.innerHTML === `X` && two.innerHTML === `X` && three.innerHTML === `X`) ||
        (four.innerHTML === `X` && five.innerHTML === `X` && six.innerHTML === `X`) ||
        (seven.innerHTML === `X` && eight.innerHTML === `X` && nine.innerHTML === `X`) ||
        (one.innerHTML === `X` && four.innerHTML === `X` && seven.innerHTML === `X`) ||
        (two.innerHTML === `X` && five.innerHTML === `X` && eight.innerHTML === `X`) ||
        (three.innerHTML === `X` && six.innerHTML === `X` && nine.innerHTML === `X`) ||
        (one.innerHTML === `X` && five.innerHTML === `X` && nine.innerHTML === `X`) ||
        (three.innerHTML === `X` && five.innerHTML === `X` && seven.innerHTML === `X`)
      ) {
        console.log('There are three Xs in a row somewhere. Adding one to ticker for X wins. We need a for loop to clear the board too.');
        xwins++;
        return;
      } else if (
        (one.innerHTML === `O` && two.innerHTML === `O` && three.innerHTML === `O`) ||
        (four.innerHTML === `O` && five.innerHTML === `O` && six.innerHTML === `O`) ||
        (seven.innerHTML === `O` && eight.innerHTML === `O` && nine.innerHTML === `O`) ||
        (one.innerHTML === `O` && four.innerHTML === `O` && seven.innerHTML === `O`) ||
        (two.innerHTML === `O` && five.innerHTML === `O` && eight.innerHTML === `O`) ||
        (three.innerHTML === `O` && six.innerHTML === `O` && nine.innerHTML === `O`) ||
        (one.innerHTML === `O` && five.innerHTML === `O` && nine.innerHTML === `O`) ||
        (three.innerHTML === `O` && five.innerHTML === `O` && seven.innerHTML === `O`)
      ) {
        console.log('There are three Os in a row somewhere. Adding one to ticker for O wins. We need a for loop to clear the board too.');
        owins++;
        return;
      }
    }
  });
}

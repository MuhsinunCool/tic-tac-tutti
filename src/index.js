/*

  index.js

*/

const square = document.getElementsByClassName("square");

for (let i = 0; i < square.length; i++) {
  square[i].addEventListener("click", function(event) {
    if ((square[i].innerHTML === `X`) | (square[i].innerHTML === `O`)) {
      console.log("Box already filled with either N or O");
      return;
    } else {
      square[i].innerHTML = `O`;
      console.log("Box filled with O");
    }
  });
}

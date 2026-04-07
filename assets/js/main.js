// main.js
let moved = false;

document.addEventListener("click", function () {
  let words = document.querySelectorAll(".grid-container div");

  moved = !moved;

  words.forEach(function (word) {
    if (moved) {
      let x = Math.random() * 200 - 100;
      let y = Math.random() * 200 - 100;

      word.style.transform = `translate(${x}px, ${y}px)`;
    } else {
      word.style.transform = `translate(0px, 0px)`;
    }
  });
});
console.log("Hello, World!");

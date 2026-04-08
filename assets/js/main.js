// main.js


document.addEventListener("click", function () {
  let words = document.querySelectorAll(".grid-container div");


  words.forEach(function (word, index) {
    if (moved) {
      let x = index * 8;
      let y = -30 - (index * 5);

      word.style.transform = `translate(${x}px, ${y}px)`;
    } else {
      word.style.transform = `translate(0px, 0px)`;
    }
  });
});
console.log("Hello, World!");


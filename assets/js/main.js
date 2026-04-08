// main.js

let rotation = 0;
setInterval(function () {
  rotation += 5;
  document.body.style.transform = `rotate(${rotation}deg)`;
}, 360);

console.log("Hello, World!");

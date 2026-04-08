// main.js

let rotation = 0;
setInterval(function () {
  rotation += 1;
  document.body.style.transform = `rotate(${rotation}deg)`;
}, 0);

console.log("Hello, World!");

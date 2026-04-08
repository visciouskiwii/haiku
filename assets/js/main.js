// main.js

let rotation = 0;
setInterval(function () {
  rotation += 1;
  document.body.style.transform = `rotate(${rotation}deg)`;
}, 100);

console.log("Hello, World!");

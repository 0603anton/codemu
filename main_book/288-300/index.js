"use strict";
let mousePosition = ``;
const div = document.querySelector(`div`);
window.addEventListener(`mousemove`, function (e) {
  console.log(e);
  div.textContent = `${e.x}:${e.y}`;
});

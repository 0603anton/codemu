"use strict";
// let mousePosition = ``;
// const div = document.querySelector(`div`);
// window.addEventListener(`mousemove`, function (e) {
//   console.log(e);
//   div.textContent = `${e.x}:${e.y}`;
// });

// const elem = document.querySelector(`#elem`);

// elem.addEventListener(`click`, function (e) {
//   // console.log(this.tagName);
//   console.log(e.target.tagName);
//   if (e.target.tagName == `LI`) {
//     e.target.textContent += `!`;
//   } else if (e.target.tagName == `UL`) {
//     elem.innerHTML += `<li>text</li>`;
//   }
// });

// elem.addEventListener(`keydown`, function (e) {
//   console.log(e);
//   console.log(e.code);
//   console.log(e.key);
// });

// let elem = document.querySelector("#elem");

// elem.addEventListener("click", function (event) {
//   if (event.ctrlKey) {
//     console.log("нажат Ctrl");
//     elem.style.backgroundColor = `red`;
//   }

//   if (event.altKey) {
//     console.log("нажат Alt");
//   }

//   if (event.shiftKey) {
//     console.log("нажат Shift");
//   }
// });

// for (let elem of links) {
//   elem.addEventListener(`click`, function (e) {
//     e.preventDefault();
//     elem.textContent = elem.getAttribute(`href`);
//   });
// }

// const links = document.querySelectorAll(`a`);
// const inp1 = document.querySelector(`#elem`);
// const inp2 = document.querySelector(`#elem1`);

// let sum = 0;
// for (let elem of links) {
//   elem.addEventListener(`click`, function (e) {
//     e.preventDefault();
//     sum = Number(inp1.value) + Number(inp2.value);
//     document.querySelector(`p`).textContent = sum;
//   });
// }

// document.querySelector(`div`).addEventListener(`click`, function (e) {
//   console.log(e.target);
//   if (e.target.tagName == `LI`) {
//     e.target.textContent += `!`;
//   }
// });

// let parent = document.querySelector("#parent");
// let button = document.querySelector("button");
// let block = document.querySelector("#block");

// button.addEventListener("click", function (e) {
//   block.classList.add("active");
//   e.stopPropagation();
//   console.log(e.target);
// });

// parent.addEventListener("click", function (e) {
//   block.classList.remove("active");
// });

let button = document.querySelector(".b1");

const list = document.querySelector(`#elem`);

button.addEventListener(`click`, function () {
  let item = document.createElement(`li`);
  item.innerHTML = `text`;
  list.appendChild(item);
});

list.addEventListener("click", function (event) {
  let li = event.target.closest("li");

  if (li) {
    li.innerHTML = li.innerHTML + "!";
  }
});

"use strict";

// let elem = document.querySelector("#elem");
// // console.log(elem.value); // выведет 'text'
// elem.addEventListener(`blur`, () => {
//   document.querySelector(`p`).textContent = elem.value;
// });
// №1⊗jsPmFmDsb

// Дан инпут и кнопка. По нажатию на кнопку заблокируйте инпут.

let elem = document.querySelector("#elem");
let butt1 = document.querySelector(".b1");
let butt2 = document.querySelector(".b2");
let butt3 = document.querySelector(".b3");

butt1.addEventListener(`click`, () => {
  elem.disabled = true;
});
butt2.addEventListener(`click`, () => {
  elem.disabled = false;
});
butt3.addEventListener(`click`, () => {
  alert(elem.disabled);
});

// №2⊗jsPmFmDsb

// Дан инпут и две кнопки. Пусть нажатие на первую кнопку блокирует инпут, а нажатие на вторую - отблокирует.

// №3⊗jsPmFmDsb

// Дан инпут и кнопка. По нажатию на кнопку узнайте, заблокирован инпут или нет.

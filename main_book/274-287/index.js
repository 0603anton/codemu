"use strict";

// let elem = document.querySelector("#elem");
// // console.log(elem.value); // выведет 'text'
// elem.addEventListener(`blur`, () => {
//   document.querySelector(`p`).textContent = elem.value;
// });
// №1⊗jsPmFmDsb

// Дан инпут и кнопка. По нажатию на кнопку заблокируйте инпут.

// let elem = document.querySelector("#elem");
// let butt1 = document.querySelector(".b1");
// let butt2 = document.querySelector(".b2");
// let butt3 = document.querySelector(".b3");

// butt1.addEventListener(`click`, () => {
//   elem.disabled = true;
// });
// butt2.addEventListener(`click`, () => {
//   elem.disabled = false;
// });
// butt3.addEventListener(`click`, () => {
//   alert(elem.disabled);
// });

// №2⊗jsPmFmDsb

// Дан инпут и две кнопки. Пусть нажатие на первую кнопку блокирует инпут, а нажатие на вторую - отблокирует.

// №3⊗jsPmFmDsb

// Дан инпут и кнопка. По нажатию на кнопку узнайте, заблокирован инпут или нет.

// №1⊗jsPmFmChb

// Дан чекбокс и две кнопки. По нажатию на первую кнопку установите чекбокс в отмеченное состояние, а по нажатию на вторую - в неотмеченное.
// let elem = document.querySelector("#elem");
// let butt1 = document.querySelector(".b1");
// let butt2 = document.querySelector(".b2");

// butt1.addEventListener(`click`, () => {
//   if (elem.checked) {
//     document.querySelector(`p`).textContent = `Hi!`;
//   } else {
//     document.querySelector(`p`).textContent = `Bye!`;
//   }
// });
// butt2.addEventListener(`click`, () => {
//   elem.checked = false;
// });

// №2⊗jsPmFmChb

// Дан чекбокс, кнопка и абзац. По нажатию на кнопку, если чекбокс отмечен, выведите в абзац слово 'привет', а если чекбокс не отмечен, то слово 'пока'.

// let elem = document.querySelector("#elem");
// let button = document.querySelector(".b1");

// button.addEventListener("click", function () {
//   console.log(elem.disabled);
//   elem.disabled = !elem.disabled;
// });

// №2⊗jsPmFmAWVA

// Дан чекбокс и кнопка. Сделайте так, чтобы каждый клик по кнопке приводил к смене состояния чекбокса.

// let elem = document.querySelector("#elem");
// let button = document.querySelector(".b1");

// button.addEventListener("click", function () {
//   console.log(elem.checked);
//   elem.checked = !elem.checked;
// });

// Работа с radio button

// let radios = document.querySelectorAll('input[type="radio"]');
// let button = document.querySelector(".b1");

// button.addEventListener("click", function () {
//   for (let radio of radios) {
//     if (radio.checked) {
//       console.log(radio.value);
//     }
//   }
// });

// №1⊗jsPmFmOch

// Дан инпут и абзац. По изменению инпута выведите его текст в абзац.

// let input = document.querySelector(`#elem`);
// let paragraph = document.querySelector("p");

// input.addEventListener(`input`, function () {
//   paragraph.textContent = this.value;
// });

// №2⊗jsPmFmOch

// Дан чекбокс. По изменению чебокса выведите на экран его новое состояние.
// let check = document.querySelector(`#elem`);
// let paragraph = document.querySelector("p");

// check.addEventListener(`change`, function () {
//   paragraph.textContent = check.checked;
// });

// №3⊗jsPmFmOch

// Расскажите, в чем разница между событиями blur и change.

// №4⊗jsPmFmOch

// Дан инпут. По его изменению проверьте, количество символов в нем меньше 5-ти или нет. Если меньше - покрасьте границу инпута в зеленый цвет, а если больше - в красный.

// let input = document.querySelector(`#elem`);
// let paragraph = document.querySelector("p");

// input.addEventListener(`input`, function () {
//   let length = this.value.length;
//   if (length < 5) {
//     input.style.borderColor = `red`;
//     input.classList.add(`input`);
//   } else {
//     input.style.borderColor = `green`;
//     input.classList.add(`input1`);
//   }
// });

// №1⊗jsPmFmFB

// Даны два инпута. Сделайте так, чтобы после ввода двух символов фокус ввода переходил ко второму инпуту, а после ввода двух символов в этот инпут - фокус из него убирался.
// let input = document.querySelector(`#elem`);
// let input1 = document.querySelector(`#elem1`);

// input.addEventListener(`input`, function () {
//   let length = this.value.length;
//   if (length >= 2) {
//     input1.focus();
//   }
// });
// input1.addEventListener(`input`, function () {
//   let length = this.value.length;
//   if (length >= 2) {
//     input1.blur();
//   }
// });

// №1⊗jsPmFmDL

// Дан селект, абзац и кнопка. По клику на кнопку выведите текст выбранного пункта списка в абзац.

// const select = document.querySelector(`#select`);
// const paragraph = document.querySelector("p");
// const butt = document.querySelector(`.b1`);

// butt.addEventListener(`click`, function () {
//   paragraph.textContent = select.value;
// });

// №2⊗jsPmFmDL

// Сделайте выпадающий список годов от 2020 до 2030. При выборе какого-нибудь пункта списка выведите сообщение о том, високосный этот год или нет.

// const select = document.querySelector(`#select`);
// const paragraph = document.querySelector("p");

// select.addEventListener(`change`, function () {
//   let year = select.value;
//   let date = new Date(year, 1, 29);
//   console.log(date);
//   let dayOfMonth = date.getDate();
//   if (dayOfMonth == 29) {
//     console.log(`Visokosny`);
//   }
// });

// let select = document.querySelector("#select");
// let button = document.querySelector(".b1");
// button.addEventListener("click", function () {
//   select.value = "one";
// });

// №1⊗jsPmFmSIN

// Дан инпут и селект. В инпут вводится какое-то число. По потери фокуса сделайте выделенным пункт списка, номер которого равен значению из инпута.

// const input = document.querySelector(`#elem`);
// let select = document.querySelector("#select");

// input.addEventListener(`input`, function () {
//   select.value = this.value;
//   console.log(select);
// });
// №2⊗jsPmFmSIN

// Сделайте выпадающий список с названиями дней недели. Сделайте так, чтобы по JavaScript по умолчанию выбирал в этом списке текущий день.

let textarea = document.querySelector("textarea");
let div = document.querySelector("div");

textarea.addEventListener("blur", function () {
  div.textContent = textarea.value;
});

"use strict";
// №1⊗jsPmDmEG

// // Даны 3 абзаца:

// /* <p id="elem1">1</p>
// <p id="elem2">2</p>
// <p id="elem3">3</p>
// Запишите ссылку на каждый из абзацев в отдельную переменную и выведите содержимое каждой из этих переменных в консоль. */

// let elem1 = document.querySelector(`#elem1`);
// let elem2 = document.querySelector(`#elem2`);
// let elem3 = document.querySelector(`#elem3`);
// console.log(elem1);
// console.log(elem2);
// console.log(elem3);

// №2⊗jsPmDmEG

// Дан следующий HTML:

// <div id="block">
// 	<p>1</p>
// 	<p>2</p>
// </div>
// Получите ссылку на первый абзац из дива с id, равным block.

// document.querySelector(`#block p`)

// №3⊗jsPmDmEG

// Дан следующий HTML:

// <div class="block">
// 	<p>1</p>
// 	<p>2</p>
// </div>
// Получите ссылку на первый абзац из дива с классом block.

// let doc = document.querySelector(`.block p`);
// console.log(doc)

// №4⊗jsPmDmEG

// Дан следующий HTML:

// <p class="www">text</p>
// <p class="www">text</p>
// Получите ссылку на первый абзац с классом www.
// let doc = document.querySelector(`.www`);

// №1⊗jsPmDmEHB

// Даны 3 кнопки:

// <input id="button1" type="submit">
// <input id="button2" type="submit">
// <input id="button3" type="submit">
// Сделайте так, чтобы по клику на первую кнопку на экран выводилось число 1, по клику на вторую - число 2, а по клику на третью - число 3.

// let but1 = document.querySelector(`#button1`);
// let but2 = document.querySelector(`#button2`);
// let but3 = document.querySelector(`#button3`);

// but1.addEventListener(`click`,()=>{
//   console.log(1)
// });

// but2.addEventListener(`click`,()=>{
//   console.log(2)
// });

// but3.addEventListener(`click`,()=>{
//   console.log(3)
// });
// №1⊗jsPmDmNEH

// Дан следующий HTML код:

// <input id="button1" type="submit" value="button1">
// <input id="button2" type="submit" value="button2">
// Даны следующие функции:

// function func1() {
//   console.log(1);
// }

// function func2() {
//   console.log(2);
// }

// document.querySelector(`#button1`).addEventListener(`click`, func1);
// document.querySelector(`#button2`).addEventListener(`click`, func2);
// Сделайте так, чтобы по клику на первую кнопку выполнилась функция func1, а по клику на вторую - функция func2.

// №1⊗jsPmDmMEH

// Даны 5 абзацев:

// <p id="elem1">text</p>
// <p id="elem2">text</p>
// <p id="elem3">text</p>
// <p id="elem4">text</p>
// <p id="elem5">text</p>
// Дана следующая функция:

// function func() {
//   console.log("message");
// }
// Привяжите эту функцию ко всем 5-ти абзацам.
// document.querySelector(`#elem1`).addEventListener(`click`, func);
// document.querySelector(`#elem2`).addEventListener(`click`, func);
// document.querySelector(`#elem3`).addEventListener(`click`, func);
// document.querySelector(`#elem4`).addEventListener(`click`, func);
// document.querySelector(`#elem5`).addEventListener(`click`, func);
// №1⊗jsPmDmSH

// Дан абзац:

{
  /* <p id="elem">text</p> */
}
// Даны следующие функции:

// function func1() {
//   console.log("1");
// }

// function func2() {
//   console.log("2");
// }

// function func3() {
//   console.log("3");
// }
// // Привяжите все эти функции к нашему абзацу.
// document.querySelector(`#elem`).addEventListener(`click`, func1);
// document.querySelector(`#elem`).addEventListener(`click`, func2);
// document.querySelector(`#elem`).addEventListener(`click`, func3);

// №1⊗jsPmDmDEH

// Дана кнопка. По двойному клику по ней выведите какое-нибудь сообщение.
// const button = document.querySelector(`#button1`);
// button.addEventListener(`dblclick`, () => {
//   console.log(`db click`);
// });

// №2⊗jsPmDmDEH

// Дана кнопка. По наведению на нее выведите какое-нибудь сообщение.

// button.addEventListener(`mouseenter`, () => {
//   console.log(`mouseenter`);
// });
// №3⊗jsPmDmDEH

// Дана кнопка. По уходу курсора с нее выведите какое-нибудь сообщение.

// button.addEventListener(`mouseleave`, () => {
//   console.log(`mouseleave`);
// });
// №4⊗jsPmDmDEH

// Дана кнопка. По наведению на нее выведите одно сообщение, а по уходу с нее - другое.

// const button = document.querySelector(`#button1`);
// button.addEventListener(`mouseenter`, ()=>{
//   console.log(`mouseenter`)
// })

// №1⊗jsPmDmET

// Дан абзац и кнопка. По клику на кнопку прочитайте текст абзаца и выведите его в консоль.
const paragraph1 = document.querySelector(`#elem0`);
const paragraph2 = document.querySelector(`#elem1`);
const button = document.querySelector(`#button1`);
// button.addEventListener(`click`, () => {
//   console.log(paragraph.textContent);
// });

// №2⊗jsPmDmET

// Дан абзац и кнопка. По клику на кнопку запишите в абзац новый текст.

// button.addEventListener(`click`, () => {
//   paragraph.textContent = `new Text`;
// });
// №3⊗jsPmDmET

// Даны два абзаца, содержащие своим текстом какие-то числа, и кнопка. По нажатию на кнопку выведите на экран сумму хранящихся чисел.
button.addEventListener(`click`, () => {
  console.log(+paragraph1.textContent + +paragraph2.textContent);
});
// №4⊗jsPmDmET

// Даны три абзаца с числами, див, и кнопка. По нажатию на кнопку запишите в текст дива сумму чисел.

// №5⊗jsPmDmET

// Дан абзац с числом и кнопка. По нажатию на кнопку прибавьте к значению абзаца единицу и запишите полученное число обратно.

// №6⊗jsPmDmET

// Дан абзац с текстом и кнопка. По нажатию на кнопку запишите в конец текста абзаца восклицательный знак.

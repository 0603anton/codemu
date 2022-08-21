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
// const paragraph1 = document.querySelector(`#elem0`);
// const paragraph2 = document.querySelector(`#elem1`);
// const button = document.querySelector(`#button1`);
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
// button.addEventListener(`click`, () => {
//   console.log(+paragraph1.textContent + +paragraph2.textContent);
// });
// №4⊗jsPmDmET

// Даны три абзаца с числами, див, и кнопка. По нажатию на кнопку запишите в текст дива сумму чисел.

// let elem1 = document.querySelector(`#elem0`);
// let elem2 = document.querySelector(`#elem1`);
// let elem3 = document.querySelector(`#elem2`);
// const out = document.querySelector(`.out`);
// document.querySelector(`#button1`).addEventListener(`click`, () => {
//   out.textContent =
//     Number(elem1.textContent) +
//     Number(elem1.textContent) +
//     Number(elem1.textContent);
// });

// №5⊗jsPmDmET

// Дан абзац с числом и кнопка. По нажатию на кнопку прибавьте к значению абзаца единицу и запишите полученное число обратно.
// let elem1 = document.querySelector(`#elem0`);
// document.querySelector(`#button1`).addEventListener(`click`, () => {
//   elem1.textContent = Number(elem1.textContent) + 1;
// });

// №6⊗jsPmDmET

// Дан абзац с текстом и кнопка. По нажатию на кнопку запишите в конец текста абзаца восклицательный знак.
// let elem1 = document.querySelector(`#elem0`);
// document.querySelector(`#button1`).addEventListener(`click`, () => {
//   elem1.textContent += `!`;
// });

// №1⊗jsPmDmEH

// Дан абзац и кнопка. По клику на кнопку прочитайте HTML код абзаца и выведите его в консоль.
// let elem1 = document.querySelector(`#elem0`);
// document.querySelector(`#button1`).addEventListener(`click`, () => {
//   console.log((elem1.innerHTML = `<b>FAT</b>`));
//   document.querySelector(`.out`).innerHTML = `<b>FAT</b>`;
// });
// №2⊗jsPmDmEH

// Дан абзац и кнопка. По клику на кнопку запишите в абзац новый текст так, чтобы он был жирным.

// №1⊗jsPmDmAVP

// Дан следующий инпут:

// let input = document.querySelector(`#elem`);
// document.querySelector(`#button1`).addEventListener(`click`, () => {
//   input.type = `submit`;
// document.querySelector(`.out`).innerHTML = input.type;
// });

//  №2⊗jsPmDmAVP

// Дан следующий инпут:

// <input id="elem" type="email">
// Дана также кнопка. По нажатию на кнопку запишите в атрибут type значение submit.

// let input = document.querySelector(`#elem`);
// document.querySelector(`#button1`).addEventListener(`click`, () => {
//   input.type = `submit`;
//   document.querySelector(`.out`).innerHTML = input.type;
// });

// №3⊗jsPmDmAVP

// Пусть у вас есть ссылка в виде тега a, кнопка и абзац. По нажатию на кнопку выведите в абзац содержимое атрибута href ссылки.

// let link = document.querySelector(`a`);
// document.querySelector(`#button1`).addEventListener(`click`, () => {
//   document.querySelector(`.out`).innerHTML = link.href;
// });

// №4⊗jsPmDmAVP

// Пусть у вас есть ссылка и кнопка. По нажатию на кнопку добавьте в конец текста ссылки содержимое ее атрибута href в круглых скобках.

// let link = document.querySelector(`a`);
// document.querySelector(`#button1`).addEventListener(`click`, () => {
//   link.textContent += `(${link.href})`;
// });

// №5⊗jsPmDmAVP

// Пусть у вас есть картинка. Разместите ее на странице в помощью тега img. Пусть даны также кнопка и абзац. Сделайте так, чтобы по клику на кнопку в абзац записался путь к картинки из ее атрибута src.

// document.querySelector(`#button1`).addEventListener(`click`, () => {
//   document.querySelector(`.out`).innerHTML = document.querySelector(`img`).src;
// });

// №6⊗jsPmDmAVP

// Дана картинка в теге img и кнопка. По нажатию на кнопку в атрибут width запишите значение 300.
// document.querySelector(`#button1`).addEventListener(`click`, () => {
//   document.querySelector(`img`).width = 300;
// });
// №7⊗jsPmDmAVP

// Дана картинка в теге img и кнопка. Пусть в атрибуте width задана некоторая ширина. Сделайте кнопку, по нажатию на которую ширина картинки будет увеличиваться в 2 раза.
// document.querySelector(`#button1`).addEventListener(`click`, () => {
//   document.querySelector(`img`).width *= 2;
// });
// №8⊗jsPmDmAVP

// Пусть у вас есть две картинки. Сделайте на странице тег img и две кнопки. По нажатию на первую кнопку запишите в атрибут src путь к первой картинке, а по нажатию на вторую - путь ко второй картинке.
// document.querySelector(`#button1`).addEventListener(`click`, () => {
//   document.querySelector(`img`).src = `./pozitivnye_kartinki_1.jpg`;
// });

// document.querySelector(`#button2`).addEventListener(`click`, () => {
//   document.querySelector(`img`).src = `./pozitivnye_kartinki_2.jpg`;
// });

// №1⊗jsPmDmTF

// Дан инпут:

// <input id="elem" value="text">
// Сделайте кнопку, нажатие на которую будет выводить текущий текст инпута. После захода на страницу нажмите на кнопку, чтобы увидеть текущий текст инпута, затем поредактируйте текст в инпуте и еще раз нажмите на кнопку. Убедитесь в том, что выведется новый текст инпута.
// document.querySelector(`#button1`).addEventListener(`click`, () => {
//   let input = document.querySelector(`#elem`).value;
//   document.querySelector(`.out`).innerHTML = input;
// });

// №2⊗jsPmDmTF

// Дан инпут и кнопка. По нажатию на кнопку запишите в инпут какой-нибудь текст.
// document.querySelector(`#button1`).addEventListener(`click`, () => {
//   let input = document.querySelector(`#elem`);
//   input.value = `Ye;yj ,jkmit ntrcnf!`;
// document.querySelector(`.out`).innerHTML = input;
// });

// №3⊗jsPmDmTF

// Дан инпут, абзац и кнопка. По нажатию на кнопку запишите в абзац текст из инпута.

// №4⊗jsPmDmTF

// Даны два инпута и кнопка. В первый инпут пользователем вводится число. По нажатию на кнопку запишите во второй инпут квадрат введенного числа.

// №5⊗jsPmDmTF

// Даны два инпута и кнопка. По нажатию на кнопку запишите в первый инпут значение второго инпута, а во второй инпут - значение первого. Ваш код должен работать универсально, для любых значений инпутов.

// №6⊗jsPmDmTF

// Даны 5 инпутов, абзац и кнопка. В инпут вводятся числа. По нажатию на кнопку запишите среднее арифметическое введенных чисел в абзац.

// повтор лущенко

// №1⊗jsPmDmTFF

// Дан инпут. По получению фокуса запишите в него число 1, а по потери фокуса - число 2.

// let input = document.querySelector(`#elem`);
// input.addEventListener(`focus`, () => {
//   input.value = 1;
// });
// input.addEventListener(`blur`, () => {
//   input.value = 2;
// });

// №2⊗jsPmDmTFF

// Дан инпут. Пусть в него вводится число. По потери фокуса выведите на экран квадрат этого числа.

// let input = document.querySelector(`#elem`);
// input.addEventListener(`focus`, () => {
//   input.value = 1;
// });
// input.addEventListener(`blur`, () => {
//   input.value **= 2;
// });

// №3⊗jsPmDmTFF

// Дан инпут, в котором изначально есть какой-то текст. По получению фокуса инпутом очистите содержимое этого инпута.
// let input = document.querySelector(`#elem`);
// input.addEventListener(`blur`, () => {
//   input.value = ``;
// });

// №1⊗jsPmDmEA

// Дан див:

// <div id="elem" class="content no-gap"></div>
// Дана также кнопка. По нажатию на кнопку прочитайте и выведите на экран значение атрибута class нашего дива.
// let div = document.querySelector(`#elem`);
// console.log(div.className);

// №2⊗jsPmDmEA

// Дан див:

// <div id="elem"></div>
// Дана также кнопка. По нажатию на кнопку запишите в атрибут class нашего дива какой-нибудь класс.
// let div = document.querySelector(`#elem`);
// document.querySelector(`#button1`).addEventListener(`click`, () => {
//   div.className = `newclass`;
// });

// №3⊗jsPmDmEA

// Дан див с несколькими CSS классами, записанными через пробел:

// <div id="elem" class="aaa bbb ccc"></div>
// Дана также кнопка. По нажатию на кнопку получите массив CSS классов нашего дива.
// let div = document.querySelector(`#elem`);
// document.querySelector(`#button1`).addEventListener(`click`, () => {
//   console.log(div.classList);
// });

// №1⊗jsPmDmThs

// Дан инпут. По получению фокуса этим инпутом запишите в него число 1, а по потери фокуса - число 2. Для обращения у инпуту внутри функции-обработчика используйте объект this.

// let input = document.querySelector(`#elem`);
// input.addEventListener(`focus`, function () {
//   this.value = 1;
// });
// input.addEventListener(`blur`, function () {
//   this.value = 2;
// });

// №2⊗jsPmDmThs

// Дана кнопка, значением которой служит число 1. Сделайте так, чтобы по клику на эту кнопку ее значение каждый раз увеличивалось на единицу.
// №1⊗jsPmDmThsA

// Даны 5 абзацев с какими-то текстами. По клику на любой абзац запишите в конец его текста восклицательный знак.
// function func() {
//   this.textContent += `!`;
// }
// const paragraph = document.querySelector(`#elem0`);
// const paragraph1 = document.querySelector(`#elem1`);
// const paragraph2 = document.querySelector(`#elem2`);
// const paragraph3 = document.querySelector(`#elem3`);
// const paragraph4 = document.querySelector(`#elem4`);

// paragraph.addEventListener(`click`, func);
// paragraph1.addEventListener(`click`, func);
// paragraph2.addEventListener(`click`, func);
// paragraph3.addEventListener(`click`, func);
// paragraph4.addEventListener(`click`, func);

// №2⊗jsPmDmThsA

// Даны 3 инпута, в которых записаны какие-то числа. По потери фокуса в любом из инпутов возведите стоящее в нем число в квадрат.
// const input0 = document.querySelector(`#elemIn0`);
// const input1 = document.querySelector(`#elemIn1`);
// const input2 = document.querySelector(`#elemIn2`);

// function pow() {
//   console.log(this.value);
//   this.value **= 2;
// }

// input0.addEventListener(`blur`, pow);
// input1.addEventListener(`blur`, pow);
// input2.addEventListener(`blur`, pow);

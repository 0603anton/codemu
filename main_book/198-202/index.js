"use strict";
// Метод map
// №1⊗jsPmEnmMp

// Дан массив с числами. Используя метод map извлеките из каждого элемента массива квадратный корень и запишите результат в новый массив.
let arr = [1, 2, 3, 4, 5];

let result = arr.map((elem) => {
  return Math.sqrt(elem);
});

console.log(result);

// №2⊗jsPmEnmMp

// Дан массив со строками. Используя метод map в конец значению каждого элемента массива добавьте символ '!'.

let arr = [`a`, `a`, `a`, `a`, `a`];

const result = arr.map((elem) => {
  return (elem += `!`);
});

console.log(result);

// №3⊗jsPmEnmMp

// Дан массив со строками. Используя метод map переверните символы каждой строки в обратном порядке.

let arr = [`ab`, `ab`, `ab`, `ab`, `ab`];

const result = arr.map((elem) => {
  return elem.split(``).reverse().join(``);
});

console.log(result);

// №4⊗jsPmEnmMp

// Дан следующий массив:

let arr = ["123", "456", "789"];
// Используя метод map преобразуйте этот массив в следующий:

// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

const result = arr.map((elem) => {
  return elem.split(``);
});

console.log(result);

// №5⊗jsPmEnmMp

// Дан массив с числами. Используя метод map запишите в каждый элемент массива значение этого элемента, умноженное на его порядковый номер в массиве.

let arr = [1, 2, 3, 4, 5];

let result = arr.map((elem, index) => {
  return elem * index;
});

console.log(result);
console.log(arr);


№1⊗jsPmEnmFe

Дан массив с числами. Используя метод forEach найдите сумму квадратов элементов этого массива.
let arr = [1, 2, 3, 4, 5];
let sum = 0;
arr.forEach((elem)=>{
  sum+= elem**2;
})

console.log(sum);

№1⊗jsPmEnmFi

Дан массив с числами. Оставьте в нем только положительные числа.
let arr = [-11, 2, 3, 4, 5];

let result = arr.filter(elem=>elem>0);
console.log(result);

№2⊗jsPmEnmFi

Дан массив с числами. Оставьте в нем только отрицательные числа.
let arr = [-11, 2, 3, 4, 5];

let result = arr.filter(elem=>elem<0);
console.log(result);

// №3⊗jsPmEnmFi

// Дан массив с числами. Оставьте в нем только числа, которые больше нуля, но меньше 10.

let arr = [-11, 2, 3, 4, 5,11];

let result = arr.filter(elem=>elem>0&&elem<10);
console.log(result);

№4⊗jsPmEnmFi

Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.

let arr = [`aффффффффффb`, `ab`, `ab`, `ab`, `ab`];

const result = arr.filter(elem=>elem.length >5);
console.log(result);

№5⊗jsPmEnmFi

Дан массив с числами. Оставьте в нем только те числа, произведение которых на их порядковый номер меньше 30.
let arr = [1, 2, 3, 4, 5,6,7];

let result = arr.filter((elem, index) => {
  return (elem * index)<40;
});

console.log(result);

№6⊗jsPmEnmFi

Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только обычные элементы.
let arr = [1, 2, [3, 4], 5, [6, 7]];

let result = arr.filter((elem) => {
  return typeof elem != `object`;
});

console.log(result);

№7⊗jsPmEnmFi

Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.

let arr = [1,-2, -2, 4, 5,6,7];
console.log(arr.filter(elem=>elem <0).length);

№1⊗jsPmEnmEv

Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.

let arr = [1,-2, -2, 4, 5,6,7];

let result = arr.every(elem=> elem>0);
console.log(result)

№2⊗jsPmEnmEv

Дан массив с числами. Проверьте то, что для всех элементов произведение их значений на их порядковый номер меньше 30.
let arr = [1,-2, -2, 4, 5];

let result = arr.every((elem,index)=> (elem*index)<30);
console.log(result)

№1⊗jsPmEnmSm

Дан массив с числами. Проверьте то, что в массиве есть хотя бы одно число больше нуля.

let arr = [1,-2, -2, 4, 5,6,7];

let result = arr.some(elem=> elem>0);
console.log(result)

№2⊗jsPmEnmSm

Дан массив с числами. Проверьте то, что хотя бы для одного элемента произведение его значения на порядковый номер больше 30.

let arr = [1,-2, -2, 4, 5];

let result = arr.some((elem,index)=> (elem*index)>30);
console.log(result)
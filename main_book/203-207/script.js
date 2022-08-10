"use strict";

№1⊗jsPmOsrSp

Дан массив:

let arr = [1, 2, 3, 4, 5];
// Дана также функция:

function func(num1, num2, num3, num4, num5) {
	return num1 + num2 + num3 + num4 + num5;
}
// Найдите с помощью приведенной функции сумму элементов массива.
console.log(func(...arr));

№3⊗jsPmOsrSp

Дан массив с числами. Используя Math.min и spread выведите на экран минимальное значение массива.

let arr = [1, 2, 3, 4, 5];
console.log(Math.min(...arr));

let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6];

let arr  = ['a', 'b', 'c', ...arr2];
console.log(arr);

let arr = [...'12345'];
console.log(arr);

let arr = ['a', ...'12345'];
console.log(arr);


№1⊗jsPmOsrSRA

Напишите функцию, которая будет принимать параметрами произвольное количество чисел и возвращать их среднее арифметическое.

function average(...params) {
  let sum = 0;
  for (const iterator of params) {
    sum+= iterator;
  }
  return sum/params.length;
}

console.log(average(1,2,3,4,5));

// TODO
Давайте сделаем функцию unite, которая параметрами будет принимать произвольное количество массивов и сливать их в один двухмерный.

Вот пример работы описанной функции:

let result = unite([1, 2, 3], [4, 5, 6], [7, 8, 9]);
console.log(result); // выведет [ [1, 2, 3,] [4, 5, 6], [7, 8, 9] ]

Давайте теперь реализуем функцию merge, параметрами принимающую произвольное количество массивов и сливающую их элементы в один массив.

Вот пример работы нашей функции:

let result = merge([1, 2, 3], [4, 5, 6], [7, 8, 9]);
console.log(result); // выведет [1, 2, 3, 4, 5, 6, 7, 8, 9]
`use strict`;

function func(name = 'Аноним', age) {
  console.log('ваше имя: ' + name + ' возраст: ' + age);
}

func();

function func(num) {
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    sum += i;
    return sum;
  }
}

console.log(func(5));
// Примеры на создание функций в JavaScript
// Задача 2⋕js.Pm.UF.Ex.2

// Сделайте функцию getDigitsSum, которая параметром будет принимать целое число и возвращать сумму его цифр.

function getDigitsSum(num) {
  let sum = 0;
  const digitStr = String(num);
  const arrOfDigit = digitStr.split(``);
  for (let elem of arrOfDigit) {
    sum += +elem;
  }
  return sum;
}
console.log(getDigitsSum(111))

  Задача 3⋕js.Pm.UF.Ex.3

Реализуйте функцию getDivisors, которая параметром будет принимать число и возвращать массив его делителей, то есть чисел, на которое делится наше число.К примеру, если мы передадим число 24 - мы должны получить следующий массив:

[1, 2, 3, 4, 6, 8, 12, 24]

function getDivisors(num) {
  let result = [];
  for (let i = 0; i <= num; i++) {
    if (num % i == 0) {
      result.push(i);
    }

  }
  return result;
}

console.log(getDivisors(24));

Задача 4⋕js.Pm.UF.Ex.4

Сделайте функцию reverseStr, которая параметром будет принимать строку и переворачивать ее символы в обратном порядке.Решите задачу без цикла, используя комбинацию стандартных функций JavaScript.

function reverseStr(params) {
  return params.split(``).reverse().join(``);
}
console.log(reverseStr(`antoxa`));



  Задача 5⋕js.Pm.UF.Ex.5

Сделайте функцию delElem, которая параметрами будет принимать значение и массив и удалять из массива все элементы с таким значением.
let arr = [2, 3, 3, 8, 5, 4, 6, 11, 11, 11, 2, 6];
function delElem(num, arr) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element == num) {
      arr.splice(i, 1);
    }
  }
  return arr;
}

console.log(delElem(2, arr))


  Задача 6⋕js.Pm.UF.Ex.6

Сделайте функцию, заполняющую массив целыми числами от 1 до заданного.Пример работы такой функции:

console.log(func(5)); // выведет [1, 2, 3, 4, 5]
Задача 7⋕js.Pm.UF.Ex.7

Сделайте функцию, заполняющую массив целыми числами от начального до конечного заданных чисел.Пример работы такой функции:

console.log(func(3, 7)); // выведет [3, 4, 5, 6, 7]

// let arr = [1, -2, 3, 4, -5];

// Задача 1⋕js.Pm.UF.Fl.1

// Сделайте функцию, которая параметром будет принимать массив с числами, и проверять, что все элементы в этом массиве являются четными числами.

function isEven(arr) {
  for (let elem of arr) {
    if (elem % 2 != 0) {
      return false;
    }
  }
  return true;
}

console.log(isEven(arr))

  Задача 2⋕js.Pm.UF.Fl.2

Сделайте функцию, которая параметром будет принимать число и проверять, что все цифры это числа являются нечетными.

  Задача 3⋕js.Pm.UF.Fl.3

Сделайте функцию, которая параметром будет принимать массив и проверять, есть ли в этом массиве два одинаковых элемента подряд.

let arr = [1, -2, 3, 4, 4, -5, -5];
function isSame(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i], arr[i + 1])
    if (arr[i] == arr[i + 1]) {
      return true;
    }


  }
  return false;
}

console.log(isSame(arr));

Сокращённые if и тд

Задача 1⋕js.Pm.UF.LO.1

Дана следующая функция:

function func(a, b) {
  if (a == b) {
    return true;
  } else {
    return false;
  }
}


function func(a, b) {
  return (a == b);
} else {
  return false;
}
}


Перепишите ее код в сокращенной форме согласно изученной теории.

  Задача 2⋕js.Pm.UF.LO.2

Дана следующая функция:

function func(a, b) {
  return (a != b)
} else {
  return false;
}
}
Перепишите ее код в сокращенной форме согласно изученной теории.

  Задача 3⋕js.Pm.UF.LO.3

Дана следующая функция:

function func(a, b) {
  return (a + b >= 10);
} else {
  return false;
}
}
Перепишите ее код в сокращенной форме согласно изученной теории.

  Задача 4⋕js.Pm.UF.LO.4

Дана следующая функция:

function func(num) {
  return (num >= 0);
} else {
  return false;
}
}
Перепишите ее код в сокращенной форме согласно изученной теории.
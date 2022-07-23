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

let arr = [1, 2, 3, 4, 5];

function func(arr) {
  let res = 0;

  for (let elem of arr) {
    res += elem;
  }

  console.log(res)
}

func(arr);

let sum = sum([1, 2, 3, 4, 5]);
console.log(sum)

function sum(arr) {
  let sum = 0;

  for (let elem of arr) {
    sum += elem;
  }

  return elem;
}

let res = sum([1, 2, 3, 4, 5]);
console.log(res)

function sum(arr) {
  let sum = 0;

  for (let elem of arr) {
    sum += elem;
  }
}

// ничего не возвращет, нет ртёрн. ТОчнее по умолчанию будет undef

let arr = [1, 2, 3, 4, 5];
let sum = sum(arr);
console.log(sum);

function sum(arr) {
  let res = 0;

  for (let elem of arr) {
    res += elem;
  }

  return res;
}

let num = `12345`;
let res = getDigitsSum(num);
console.log(res);

function getDigitsSum(num) {
  let arr = num.split('');
  let sum = 0;

  for (let elem of arr) {
    sum += +elem;
  }

  return sum;
}

Задача 1⋕js.Pm.FP.PU.1

Дана функция, проверяющая числа на простоту:

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }

  return true;
}

// console.log(isPrime(30))
// С помощью приведенной функции найдите все простые числа в интервале от 1 до 100.


function isPrimeRange(num1, num2) {
  let i = num1;
  let result = [];
  while (i < num2) {

    i++;
    if (isPrime(i)) {
      result.push(i);

    }
  }
  return result;

}

console.log(isPrimeRange(1, 100));

Задача 2⋕js.Pm.FP.PU.2

Дана функция getDigitsSum, которая параметром принимает целое число и возвращает сумму его цифр:

function getDigitsSum(num) {
  let sum = 0;
  let digits = String(num).split('');

  for (let digit of digits) {
    sum += Number(digit);
  }

  return sum;
}


function getYearSum(start, end) {
  let i = start;
  let result = [];
  while (i < end) {
    i++;
    if (getDigitsSum(i) == 13) {
      result.push(i);
    }
  }
  return result;
}

console.log(getYearSum(1, 2030));
// С помощью приведенной функции getDigitsSum найдите все года от 1 до 2030, сумма цифр которых равна 13.

Задача 3⋕js.Pm.FP.PU.3

Пусть дан какой - то массив с числами, например, такой:

[123, 456, 789]
Давайте сделаем так, чтобы цифры в каждом элементе массива были в обратном порядке.То есть из нашего массива сделаем следующий:

[321, 654, 987]
Некий программист уже написал код, реализующий описанную задачу:

let nums = [123, 456, 789];

// let result = [];
// for (let num of nums) {
//   result.push(String(num).split('').reverse().join(''));
// }

// console.log(result); // выведет [321, 654, 987]
// Переделайте приведенный код так, чтобы переворот числа выполняла отдельная функция.

function reverseNumber(num) {
  return String(num).split('').reverse().join('');
}

function reverseArr(arr) {
  let result = [];
  for (let elem of arr) {
    result.push(reverseNumber(elem));
  }
  return result;
}

console.log(reverseArr(nums))


Задача 4⋕js.Pm.FP.PU.4

Даны два числа.Необходимо проверить, равна ли сумма цифр первого числа сумме цифр второго числа.Некий программист уже написал решение задачи, вот оно:

let num1 = 234;
let num2 = 531;

let digits1 = String(num1).split('');
let digitsSum1 = 0;
for (let digit1 of digits1) {
  digitsSum1 += Number(digit1);
}

let digits2 = String(num1).split('');
let digitsSum2 = 0;
for (let digit2 of digits2) {
  digitsSum2 += Number(digit2);
}

if (digitsSum1 == digitsSum2) {
  alert('суммы цифр совпадают');
} else {
  alert('суммы цифр не совпадают');
}
В чем недостатки приведенного кода ? Переделайте код так, чтобы он был более удачным.

// Разбить на функции + DRY 

function sumOfDigits(num) {
  let digits = String(num).split('');
  let digitsSum = 0;
  for (let digit of digits) {
    digitsSum += Number(digit);
  }
  return digitsSum;
}

function compareTwoDigit(num1, num2) {
  if (sumOfDigits(num1) == sumOfDigits(num2)) {
    return ('суммы цифр совпадают')
  } else {
    return ('суммы цифр не совпадают')
  }
}

console.log(compareTwoDigit(234, 531));


Задача 5⋕js.Pm.FP.PU.5

Дан массив с числами.Необходимо перебрать этот массив с числами и вывести в консоль нетривиальные делители этих чисел(то есть исключая число 1 и само число).Некий программист уже написал решение задачи:

let nums = [12, 24, 35, 14];

for (let num of nums) {
  console.log(num + ': ' + getDivisors(num).join(', '));
}

function getDivisors(num) {
  let result = [];

  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      result.push(num);
    }
  }

  return result;
}
Программист не тестировал отдельно работу функции getDivisors, а написал весь код сразу и затем запустил его.При запуске оказалось, что код работает как - то не так.Видимо, в функции getDivisors была допущена какая - то ошибка.

Найдите и исправьте ошибку.Потестируйте отдельно функцию getDivisors, чтобы убедиться, что она работает корректно после вашей правки.После того, как вы убедитесь в корректности работы функции - проверьте полный код решения задачи.

function getDivisors(num) {
  let result = [];

  for (let i = 2; i < num; i++) {
    if (num % i == 0) {

      result.push(i);
    }
  }

  return result;
}

console.log(getDivisors(10));


Задача 1⋕js.Pm.FP.AFC.1

// Дана функция getSum, находящая сумму элементов переданного массива:

function getSum(arr) {
  let sum = 0;

  for (let elem of arr) {
    sum += Number(elem);
  }

  return sum;
}
// Дана функция getDigits, возвращающая массив цифр числа:

function getDigits(num) {
  return String(num).split('');
}
// Используя комбинацию приведенных функций найдите сумму цифр числа 12345.

console.log(getSum(getDigits(12345)))


Задача 2⋕js.Pm.FP.AFC.2

Дано число.Нужно найти его делители(без 1 и самого числа), а затем найти среднее арифметическое(сумма делить на количество) делителей числа и вывести результат на экран.Некий программист уже написал решение задачи:

console.log(getAvg(getDivisors(10)));

// Нахождение среднего арифметического:
function getAvg(arr) {
  let sum = 0;

  for (let elem of arr) {
    sum += elem;
  }

  return sum / arr.length;
}

// Нахождение массива делителей числа:
function getDivisors(num) {
  let result = [];

  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      result.push(i);
    }
  }
  return result;
}

console.log(getDivisors(10))
Программист не тестировал отдельно работу своих функций, а написал весь код сразу и затем запустил его.При запуске оказалось, что код работает неверно.

Найдите и исправьте ошибки программиста.Потестируйте отдельно работу всех функций, чтобы убедиться, что они работают корректно после ваших правок.После того, как вы убедитесь в корректности работы функций - проверьте полный код решения задачи.

Вспомогательные функции внутри других функций в JavaScript

Задача 1⋕js.Pm.FP.AFIF.1

Самостоятельно, не подсматривая в мой код, повторите решение описанной задачи.
Пусть у нас дан массив с числами.Решим следующую задачу: запишем в новый массив только те элементы, сумма цифр в которых от 1 до 9.

let arr = [12, 19, 28, 13, 14, 345];




function getSeparateDigit(num) {
  return String(num).split(``);
}

function getSumOfDigit(arrOfNumber) {
  let sum = 0;
  for (let elem of arrOfNumber) {
    sum += +elem;
  }
  return sum;
}

function inRange(sum) {
  return (sum >= 1 && sum <= 9)
}

function filterArrInRange(arr) {
  let result = [];
  for (let elem of arr) {
    if (inRange(getSumOfDigit(getSeparateDigit(elem)))) {
      result.push(elem);
    }
  }
  return result;
}

console.log(filterArrInRange(arr));

Дружественные числа на JavaScript

Задача 1⋕js.Pm.FP.FrNm.1

Реализуйте функцию getOwnDivisors.Потестируйте ее работу.

function isFreindly(num1, num2) {
  let sum1 = getSum(getOwnDivisors(num1));
  let sum2 = getSum(getOwnDivisors(num2));

  if (sum1 == num2 && sum2 == num1) {
    return true;
  } else {
    return false;
  }
}

function getOwnDivisors(num) {
  let result = [];
  for (let i = 1; i < num; i++) {
    if (num % i == 0) {
      result.push(i);
    }
  }
  return result;
}



// Задача 2⋕js.Pm.FP.FrNm.2

// Реализуйте функцию getSum.Потестируйте ее работу.

function getSum(arr) {
  let sum = 0;
  for (let elem of arr) {
    sum += elem;
  }
  return sum;
}

// Задача 3⋕js.Pm.FP.FrNm.3

// Проверьте работу функции isFreindly.

// console.log(isFreindly(284, 220))


function getFriendly(num1, num2) {
  let result = [];
  for (let i = 1; i < num2; i++) {
    for (let j = num2; j > 0; j--) {
      if (isFreindly(i, j) && (i !== j)) {
        result.push([i, j]);
      }

    }

  }
  return result;
}


console.log(getFriendly(1, 3000))



Задача 5⋕js.Pm.FP.FrNm.5

Совершенное число - целое число, равное сумме всех своих собственных делителей(то есть всех положительных делителей, отличных от самого числа).Сделайте функцию getPerfect, которая будет находить совершенные числа в заданном диапазоне.Проверьте работу функции в промежутке от 1 до 1000.

console.log(getPerfectInRange(1, 1000))

function getPerfectInRange(startWith, endWith) {
  let result = [];
  for (let i = startWith; i < endWith; i++) {
    if (getPerfect(i)) {
      result.push(i);
    }

  }
  return result;
}


function getPerfect(num) {
  let sumOfDivisors = getSum(getOwnDivisors(num));

  return num == sumOfDivisors;


  function getOwnDivisors(num) {
    let result = [];
    for (let i = 1; i < num; i++) {
      if (num % i == 0) {
        result.push(i);
      }
    }
    return result;
  }

  function getSum(arr) {
    let sum = 0;
    for (let elem of arr) {
      sum += elem;
    }
    return sum;
  }
}


Пересечение массивов на JavaScript

function inArray(num, arr) {
  return (arr.indexOf(num) !== -1);
}

function arrComparison(arr1, arr2) {
  let result = [];

  for (let elem of arr1) {
    if (inArray(elem, arr2)) {
      result.push(elem)
    }
  }

  return result;
}

console.log(arrComparison([1, 2, 3], [2, 3, 4, 5]));

Разность массивов на JavaScript


function inArray(num, arr) {
  return (arr.indexOf(num) == -1);
}

function arrComparison(arr1, arr2) {
  let arr = [];

  for (let elem of arr1) {
    if (inArray(elem, arr2)) {
      arr.push(elem)
    }
  }

  return arr;
}

function arrDiff(arr1, arr2) {
  let result = [];
  result = result.concat(arrComparison(arr1, arr2))
  result = result.concat(arrComparison(arr2, arr1))
  return result;
}

console.log(arrDiff([1, 2, 3], [2, 3, 4, 5]));
// console.log(arrComparison([1, 2, 3], [2, 3, 4, 5]));

Задача 1⋕js.Pm.FP.LCF.1

Реализуйте функцию getGreatestCommonDivisor, которая параметрами будет принимать два числа и возвращать НОД этих двух чисел.При решении задачи старайтесь использовать вспомогательные функции, в том числе полученные нами ранее в теоретической части.

function getGreatestCommonDivisor(num1, num2) {
  const divisorsOfNum1 = getOwnDivisors(num1);
  const divisorsOfNum2 = getOwnDivisors(num2);

  const commonDivisors = arrComparison(divisorsOfNum1, divisorsOfNum2);

  return Math.max.apply(null, commonDivisors);

  function inArray(num, arr) {
    return (arr.indexOf(num) !== -1);
  }

  function arrComparison(arr1, arr2) {
    let result = [];

    for (let elem of arr1) {
      if (inArray(elem, arr2)) {
        result.push(elem)
      }
    }

    return result;
  }

  function getOwnDivisors(num) {
    let result = [];
    for (let i = 1; i < num; i++) {
      if (num % i == 0) {
        result.push(i);
      }
    }
    return result;
  }
}

console.log(getGreatestCommonDivisor(12, 18))

  Задача 2⋕js.Pm.FP.LCF.2

Положительные целые числа, не имеющие общих делителей, кроме тривиальной единицы, называются взаимно простыми.Говоря другими словами, два числа можно назвать взаимно простыми, если их НОД равен единице.

Напишите функцию, которая параметрами будет принимать два числа и проверять - взаимно простые они или нет.

  isCommonSimpleNumber(5, 3);


function isCommonSimpleNumber(num1, num2) {

  const commonDivisors = getCommonDivisor(num1, num2);
  if (commonDivisors.length == 1 && commonDivisors[0] == 1) {
    console.log(`Number are взаимно простые`)
  }
}

function getCommonDivisor(num1, num2) {
  const divisorsOfNum1 = getOwnDivisors(num1);
  const divisorsOfNum2 = getOwnDivisors(num2);

  const commonDivisors = arrComparison(divisorsOfNum1, divisorsOfNum2);

  return commonDivisors;

  function inArray(num, arr) {
    return (arr.indexOf(num) !== -1);
  }

  function arrComparison(arr1, arr2) {
    let result = [];

    for (let elem of arr1) {
      if (inArray(elem, arr2)) {
        result.push(elem)
      }
    }

    return result;
  }

  function getOwnDivisors(num) {
    let result = [];
    for (let i = 1; i < num; i++) {
      if (num % i == 0) {
        result.push(i);
      }
    }
    return result;
  }
}

Случайный элемент из массива на JavaScript

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomElem(arr) {
  return arr[getRandomInt(0, arr.length - 1)]
}

let arr = [1, 2, 3, 4, 5];
console.log(randomElem(arr));

function func() {
	console.log('!');
}
func(); // выведет '!'
console.log(func)
alert(func)

func = 'string'; // затрем переменную func
console.log(func); // выведет 'string'

let func1 = function () {
  return 1;
}

let func2 = function () {
  return 2;
}

console.log(func1() + func2())


Массив с анонимными функциями

let arr = [
  function () {
    return 1;
  },
  function () {
    return 2;
  },
  function () {
    return 3;
  }
];


for (let func of arr){
  console.log(func());
}
console.log(arr[2]())

№1⊗jsPmFAFO

Сделайте объект с тремя функциями. Пусть первая возвращает через return число 1, вторая - число 2, третья - число 3. С помощью созданных функций выведите в консоль сумму возвращаемых чисел.

№2⊗jsPmFAFO

Переберите созданный объект циклом и выведите результаты работы функций в консоль.

let obj = {
	func1: function() {return 1},
  func2: function() {return 2},
	func3: function() {return 3},
};

for (let elem in obj){
  console.log(obj[elem]())
}

№3⊗jsPmFAFO

Сделайте объект с тремя функциями, каждая из которых будет принимать параметром массив с числами. Сделайте так, чтобы первая функция возвращала сумму элементов массива, вторая функция - сумму квадратов, а третья - сумму кубов.

let obj = {
  getSum: function(arr){
    let sum = 0;
    for (let elem of arr){
      sum+= elem;
    }
    return sum;
  },
    getSquareSum: function(arr){
    let sum = 0;
    for (let elem of arr){
      sum+= Math.pow(elem,2);
    }
    return sum;
  },
    getCubeSum: function(arr){
    let sum = 0;
    for (let elem of arr){
      sum+= Math.pow(elem,3);
    }
    return sum;
  },
}

console.log(obj[`getSum`]([1,2,3]))


№2⊗jsPmFAPFAP

Сделайте функцию test, параметрами принимающую 3 функции и возвращающую сумму результатов переданных функций.

function test(func1, func2, func3) {
  return func1()+func2()+func3();
}

// №3⊗jsPmFAPFAP

// Сделайте 3 функции, объявив их как Function Declaration и дав им имена func1, func2 и func3. Пусть первая функция возвращает 1, вторая - 2, а третья - 3. Передайте эти функции параметром в функцию test из предыдущей задачи.

// function func1() {
//   return 1;
// }
// function func2() {
//   return 2;
// }
// function func3() {
//   return 3;
// }

// console.log(test(func1, func2, func3));

// №4⊗jsPmFAPFAP

// Модифицируйте предыдущую задачу так, чтобы функции были объявлены как Function Expression с теми же именами.

let func1 = function () {
  return 1;
}
let func2 = function () {
return 2;
}
let func3 = function () {
  return 3;
}

console.log(test(func1, func2, func3));

let func = function func (num,num1) {
	return num + num1;
};

test(func);

function test(func) {
	console.log(func(2,3));
}
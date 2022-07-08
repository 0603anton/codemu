"use strict";
/*
https://learn.javascript.ru/variables
Переменные 

Работа с переменными
важность: 2
Объявите две переменные: admin и name.
Запишите строку "Джон" в переменную name.
Скопируйте значение из переменной name в admin.
Выведите на экран значение admin, используя функцию alert (должна показать «Джон»).
*/

// let admin;
// let name;

// name = "Джон";

// admin = name;
// alert(admin);

/* Придумайте правильные имена
важность: 3
Создайте переменную для названия нашей планеты. Как бы вы её назвали?
Создайте переменную для хранения имени текущего посетителя сайта. Как бы вы назвали такую переменную? */

// let ourPlanetName;
// let currentUserName;

// https://learn.javascript.ru/alert-prompt-confirm
// Алерт, промт и тд

// let userName = prompt("What is your name?", "user");
// alert(userName);

// alert(2 + (2 + "1"));

// Операторы
// Постфиксная и префиксная формы
// важность: 5
// Чему будут равны переменные a, b, c и d в примере ниже?
/*
let a = 1,
  b = 1;

let c = ++a; // 2
let d = b++; // 1
alert(a); // 2, значение увеличено один раз
alert(b); // 2, значение увеличено один раз
*/
// Результат присваивания
// важность: 3
// Чему будут равны переменные a и x после исполнения кода в примере ниже?

/*
let a = 2;

let x = 1 + (a *= 2); //5

"" + 1 + 0; // '10'
"" - 1 + 0; //-1
true + false; //1
6 / "3"; //2
"2" * "3"; //6
4 + 5 + "px"; // ОШИБКА, тут сначала числа потом строка в итоге строка
"$" + 4 + 5; // Ошибка, тут начинается со строки и числа
"4" - 2; //2
"4px" - 2; // nan
"  -9  " + 5; // Ошибка здесь плюс поэтому непроисходит приведение к числу, а складываются строки
"  -9  " - 5; // -14
null + 1; // 1
undefined + 1; // ОШибка тут просто преобразорвание в число идёт поэтоум никаких единииц не будет
" \t \n" - 2; // -2
*/

// TODO
//  https://learn.javascript.ru/operators#matematika - нужен повтор
// https://learn.javascript.ru/logical-operators - повтори задачи
// var a = "99";
// var b = 100;
// var c = +a++;
// console.log(c);
// console.log(c == b);
// console.log(c);

// let a = 1;
// let b = 1;
// let result = a + b < 4 ? console.log("no") : console.log("yes");

// Конструкция "switch"
const number = +prompt("Введите число между 0 и 3", "");

// if (number === 0) {
//   alert("Вы ввели число 0");
// }

// if (number === 1) {
//   alert("Вы ввели число 1");
// }

// if (number === 2 || number === 3) {
//   alert("Вы ввели число 2, а может и 3");
// }

switch (number) {
  case 0:
    alert("Вы ввели число 0");
    break;

  case 1:
    alert("Вы ввели число 1");
    break;
}


// Функции
Перепишите функцию, используя оператор '?' или '||'
важность: 4
Следующая функция возвращает true, если параметр age больше 18.

В ином случае она задаёт вопрос confirm и возвращает его результат.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.

Сделайте два варианта функции checkAge:

Используя оператор ?
  Используя оператор ||

    let age = 18;
function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
}
console.log(checkAge(age));


let age = 20;
function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?');
}
console.log(checkAge(age));



// Функция min(a, b)
// важность: 1
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

// Пример вызовов:

function min(a, b) {
  return a < b ? a : b;
}
console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));


function pow(a, b) {
  if (b < 1) {
    console.log(`Степень ${b} не поддерживается, используйте натуральное число`);
  }
  return a ** b;
}
console.log(pow(1, -1));
console.log(pow(3, 2));
console.log(pow(3, 3));
console.log(pow(1, 100));


Замените код Function Expression стрелочной функцией:

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function () { alert("Вы согласились."); },
  function () { alert("Вы отменили выполнение."); }
);

function ask(a, b, c) {
  if (confirm(a)) {
    return b();
  } else {
    return c();
  }
}

ask(`ds согласны?`,
  () => alert(`You are ok`),
  () => alert(`You are not ok`));

confirm()

Привет, object
важность: 5
Напишите код, выполнив задание из каждого пункта отдельной строкой:

Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта

const user = {};
user.name = `John`;
user.surname = `Smith`
user.name = `Pete`;
console.log(user);
delete user.name;
console.log(user);


let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false

function isEmpty(obj) {
  for (let prop in obj) {
    return false;
  }
  return true;
}


console.log(isEmpty(schedule))

function makeUser(name, age) {
  return {
    name, // то же самое, что и name: name
    age   // то же самое, что и age: age
    // ...
  };
}

console.log(makeUser(`anton`, 32));

// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};


function multiplyNumeric(menu) {
  for (let key in menu) {
    //  console.log( typeof menu[key])
    if (typeof menu[key] === `number`) {
      menu[key] *= 2;
    }
  }
  console.log(menu)
}

multiplyNumeric(menu);



// Объектыы
Создайте калькулятор
важность: 5
Создайте объект calculator(калькулятор) с тремя методами:

read()(читать) запрашивает два значения и сохраняет их как свойства объекта.
  sum()(суммировать) возвращает сумму сохранённых значений.
    mul()(умножить) перемножает сохранённые значения и возвращает результат.


let calculator = {
  read() {
    this.firstNumber = prompt(`Enter your first number`);
    this.secondNumber = prompt(`Enter your second number`);
  },
  sum() {
    return +this.firstNumber + +this.secondNumber;
  },
  mul() {
    return this.secondNumber * this.firstNumber;
  }

};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
Запустить демо

Открыть песочницу с тестами для задачи.


let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;

  },
  down() {
    this.step--;
  },
  showStep: function () { // показывает текущую ступеньку
    alert(this.step);
  }
};

ladder.up().up();


Числа:

let readNumber = function () {
  let number = prompt(`Enter youtnumber please`);
  if (!isFinite(number) || number == 0 || number == null) {
    readNumber();

  } else {
    return number;
  }
}


console.log();

let str = "anton";

function ucFirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}
console.log(ucFirst(str))

console.log(isFinite(0))

Массивы

let styles = ['Джаз', "блюз", "что-то", 'xnj-nj'];
console.log(styles);
styles.push('rock-n-roll');
console.log(styles);
let middle = Math.round(styles.length / 2);
styles[middle] = 'Classic';
console.log(styles);
styles.shift();
console.log(styles);
styles.unshift(`Rap`, `Raggie`);
console.log(styles);

let arr = [];
let sum = 0;

function sumInput() {
  let a = prompt(`enter`);
  if (a === "" || a === null || !isFinite(a)) {
    console.log(summ(arr));
  } else {

    arr.push(a)
    sumInput();
  }

}
function summ(arr) {
  console.log(arr)
  for (let elem of arr) {
    sum += +elem;
  }
  return sum;
}

sumInput();

// TODO
Подмассив наибольшей суммы
важность: 2
На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

  Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

Функция getMaxSubSum(arr) должна возвращать эту сумму.

  Например:

getMaxSubSum([-1, 2, 3, -9]) == 5(сумма выделенных элементов)
getMaxSubSum([2, -1, 2, 3, -9]) == 6
getMaxSubSum([-1, 2, 3, -9, 11]) == 11
getMaxSubSum([-2, -1, 1, 2]) == 3
getMaxSubSum([100, -9, 2, -3, 5]) == 100
getMaxSubSum([1, 2, 3]) == 6(берём все)
Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:

getMaxSubSum([-1, -2, -3]) = 0
Попробуйте придумать быстрое решение: O(n2), а лучше за О(n) операций.

Открыть песочницу с тестами для задачи.

function getMaxSubSum(arr) {
  for (let elem of arr) {
    if (elem > 0) {

    }
  }
}

Переведите текст вида border - left - width в borderLeftWidth
важность: 5
Напишите функцию camelize(str), которая преобразует строки вида «my - short - string» в «myShortString».

То есть дефисы удаляются, а все слова после них получают заглавную букву.

  Примеры:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S.Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.

Открыть песочницу с тестами для задачи.

let str = "background-color";

function splitToArr(str) {
  let newArr = str.split(`-`);
  console.log(newArr);
  return newArr;
}

function firstLetterCap(elem) {
  return elem[0].toUpperCase + elem.slice(1);
}

function joinCamel(arr) {
  arr.map(firstLetterCap(elem))
}

str.splitToArr



splitToArr(str)
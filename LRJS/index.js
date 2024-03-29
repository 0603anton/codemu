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
  return str.split(`-`);
}

function joinCamel(arr) {
  arr.join()
}

let newArr = splitToArr(str);

let capitalLetterArr = newArr.map((item, index) => {
  if (index == 0) {
    return item;
  } else {
    return item[0].toUpperCase() + item.slice(1);
  }
});

console.log(capitalLetterArr)
capitalLetterArr = capitalLetterArr.join(``);


console.log(capitalLetterArr);

Фильтрация по диапазону
важность: 4
Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.

Функция должна возвращать новый массив и не изменять исходный.

  Например:

let arr = [5, 3, 8, 1];

// let filtered = ;

// alert(filtered); // 3,1 (совпадающие значения)

// alert(arr); // 5,3,8,1 (без изменений)
// Открыть песочницу с тестами для задачи.

function filterRange(arr, a, b) {

  return arr.filter((item) => (item => a && item <= b))

}

console.log(filterRange(arr, 1, 4))

Фильтрация по диапазону "на месте"
важность: 4
Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b.То есть, проверка имеет вид a ≤ arr[i] ≤ b.

Функция должна изменять принимаемый массив и ничего не возвращать.

  Например:

let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

// alert(arr); // [3, 1]
// Открыть песочницу с тестами для задачи.

function filterRangeInPlace(arr, a, b) {
  arr.map((item => {

    if ((item => a && item <= b)) {

      arr.splice(arr.indexOf(item), 1);
    }
  }))
}
console.log(filterRangeInPlace(arr, 1, 4))
console.log(arr)

Сортировать в порядке по убыванию
важность: 4
let arr = [5, 2, 1, -10, 8];

// ... ваш код для сортировки по убыванию

arr.sort((a, b) => b - a);

console.log(arr); // 8, 5, 2, 1, -10

Скопировать и отсортировать массив
важность: 5
У нас есть массив строк arr.Нужно получить отсортированную копию, но оставить arr неизменённым.

Создайте функцию copySorted(arr), которая будет возвращать такую копию.

let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
  return arr.slice().sort(); // можно использовать spread, но он не копирует разреженные массивы, оставляет undefined
}

let sorted = copySorted(arr);

console.log(sorted)
console.log(arr)
alert(sorted); // CSS, HTML, JavaScript
alert(arr); // HTML, JavaScript, CSS (без изменений)


Создать расширяемый калькулятор
// TODO
важность: 5
Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

Задание состоит из двух частей.

  Во - первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат.Метод должен понимать плюс + и минус -.

Пример использования:

let calc = new Calculator;

alert(calc.calculate("3 + 7")); // 10


function Calculator(str) {
  this.str = str,

}


Трансформировать в массив имён
важность: 5
У вас есть массив объектов user, и в каждом из них есть user.name.Напишите код, который преобразует их в массив имён.

  Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map((item) => item.name);
console.log(names); // Вася, Петя, Маша



Трансформировать в объекты
// TODO
важность: 5
У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.

Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.

  Например:

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [vasya, petya, masha];

let usersMapped = users.map(item => ({
  fullName: `${item.name} ${item.surname}`,
  id: item.id,


}))

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/
console.log(usersMapped[0].id)
console.log(usersMapped[0].fullName)
alert(usersMapped[0].id) // 1
alert(usersMapped[0].fullName) // Вася Пупкин
Итак, на самом деле вам нужно трансформировать один массив объектов в другой.Попробуйте использовать =>.Это небольшая уловка.


Отсортировать пользователей по возрасту
// TODO
важность: 5
Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

  Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [vasya, petya, masha];

function sortByAge(arr) {
  arr.sort((a, b) => {
    return a.age - b.age
  })
}

sortByAge(arr);
console.log(arr);
// теперь: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя

Перемешайте массив
важность: 3
// TODO
Напишите функцию shuffle(array), которая перемешивает(переупорядочивает случайным образом) элементы массива.

Многократные прогоны через shuffle могут привести к разным последовательностям элементов.Например:

let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...
Все последовательности элементов должны иметь одинаковую вероятность.Например, [1, 2, 3] может быть переупорядочено как[1, 2, 3] или[1, 3, 2], или[3, 1, 2] и т.д., с равной вероятностью каждого случая.


Получить средний возраст
важность: 4

Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.

Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];
function getAverageAge(users) {
  let sum = users.reduce((sum, current) => sum += current.age, 0)
  return sum / users.length;
}


console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

Оставить уникальные элементы массива
важность: 4
Пусть arr – массив строк.
// TODO
Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

  Например:

function unique(arr) {
  /* ваш код */
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert(unique(strings)); // кришна, харе, :-O

Итерируемые объекты

let range = {
  from: 1,
  to: 5
};

for (let elem of range) {
  console.log(elem);
}

MAP and SET

Фильтрация уникальных элементов массива
важность: 5
Допустим, у нас есть массив arr.

Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

Например:

function unique(arr) {
  let set = new Set();
  arr.map((elem) =>{
    set.add(elem);
  });
  return set;
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare,Krishna,:-O
P.S. Здесь мы используем строки, но значения могут быть любого типа.

P.P.S. Используйте Set для хранения уникальных значений.


Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.

Например:

nap - pan
ear - are - era
cheaters - hectares - teachers
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

Например:

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// let test = Array.from(arr[0]);
// console.log(test)
// TODO

function aclean (arr){
let newArr = arr.map((elem) =>{
  return Array.from(elem);
})
let sortedArr = newArr.map(function (splitElem){ return splitElem.sort().join(``).toLowerCase()})
console.log(sortedArr)
return Array.from(new Set (sortedArr))
}

// Всё в целом решилось конечно, но зачем то зря использовал, такой сложный путь для разбиения на массиывы, можно бюыло сращу всё в ловер кейс и далее как я делал, просто методами строк имассивов в конце уникольно через Set или заполнить Map при заполнении он бы перезаписывал одинаковые ключи

console.log(aclean(arr) ) // "nap,teachers,ear" или "PAN,cheaters,era"
console.log(arr) // "nap,teachers,ear" или "PAN,cheaters,era"


let map = new Map();

map.set("name", "John");

let keys = map.keys();

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");

Перебираемые ключи
важность: 5
Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.

Но это не выходит:

let map = new Map();

map.set("name", "John");

// let keys = map.keys();

let keys = Array.from(map.keys());

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");

Date and Time

console.log(new Date(Date.parse(`2012-02-20T15:12:00`)));

alert(Date.parse(2012-02-20-03-12));

Покажите день недели
важность: 5
Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

Например:


let date = new Date(2012, 0, 3);  //
let week = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

function getWeekDay(date) {
  return week[date.getDay()];
} 
alert( getWeekDay(date) );        // нужно вывести "ВТ"

День недели в европейской нумерации
важность: 5
В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

let date = new Date(2022, 7, 30);  // 3 января 2012 года
console.log( getLocalDay(date) );       // вторник, нужно показать 2
function getLocalDay (date){
  let day = date.getDay();
  if (day == 0){
    return 7;
  } else {
    return day;
}}
// Открыть песочницу с тестами для задачи.


Какой день месяца был много дней назад?
важность: 4
Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.

К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.

Функция должна надёжно работать при значении days=365 и больших значениях:

let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
// P.S. Функция не должна изменять переданный ей объект date.
function getDateAgo(date, ago){
  let result = new Date(date.getFullYear(),date.getMonth(), date.getDate() - ago);
  return result;
}



Преобразуйте объект в JSON, а затем обратно в обычный объект
важность: 5
Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

let user = {
  name: "Василий Иванович",
  age: 35
};


let jsonUser = JSON.stringify(user);
console.log(jsonUser);
let newUser = JSON.parse(jsonUser);
console.log(newUser);



Исключить обратные ссылки
важность: 5
В простых случаях циклических ссылок мы можем исключить свойство, из-за которого они возникают, из сериализации по его имени.

Но иногда мы не можем использовать имя, так как могут быть и другие, нужные, свойства с этим именем во вложенных объектах. Поэтому можно проверять свойство по значению.

Напишите функцию replacer для JSON-преобразования, которая удалит свойства, ссылающиеся на meetup:

let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
  
};

// цикличные ссылки


console.log( JSON.stringify(meetup, function replacer(key, value) {
  // return (key != "" && value == meetup)? undefined: value;
  return key value;
  /* ваш код */
}));

/* в результате должно быть:
{
  "title":"Совещание",
  "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
  "place":{"number":23}
}
*/

Вычислить сумму чисел до данного
важность: 5
Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

Например:

sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
Сделайте три варианта решения:

С использованием цикла.
Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
С использованием формулы арифметической прогрессии.
Пример работы вашей функции:

function sumToLoop(n) {
  let sum = 0;
  for (let u = 0; u <= n; u++) {
    sum += u;
    
  }
  return sum;
}

console.log( sumToLoop(100) ); // 5050

function sumToRecur(n) {
  if( n <= 1){
    return n;
  }else{
    return n + sumToRecur(n-1);
  }
 
}

console.log( sumToRecur(100) ); // 5050

function sumToFormula(n) {
  return n * (n + 1) / 2;
}

console.log( sumToFormula(100) );
P.S. Какой вариант решения самый быстрый? Самый медленный? Почему?

P.P.S. Можно ли при помощи рекурсии посчитать sumTo(100000)?

Вычислить факториал
важность: 4
Факториал натурального числа – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!

Определение факториала можно записать как:

n! = n * (n - 1) * (n - 2) * ...*1
Примеры значений для разных n:

1! = 1
2! = 2 * 1 = 2
3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120
Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.

alert( factorial(5) ); // 120
P.S. Подсказка: n! можно записать как n * (n-1)! Например: 3! = 3*2! = 3*2*1! = 6

function factorial(n){
  if (n <= 1){
    return n;
  }else{
    return n * factorial(n-1);
  }
}

console.log(factorial(4))

Числа Фибоначчи 
// TODO - реши с заменой переменныйи, каждое следующее число фибоначи сумма 2х прошлых
важность: 5
Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.

Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....

Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас.

Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

Пример работы:

function fib(n) {
  if (n ==1){
    return n
  }else{
    return fib(n-1) + fib(n-2);
  }
}


console.log(fib(7)); // 2
console.log(fib(77)); // 2

P.S. Все запуски функций из примера выше должны работать быстро. Вызов fib(77) должен занимать не более доли секунды.

const fib = n => {
  let prev = 0, next = 1;
  for(let i = 0; i < n; i++){
    // let temp = next;
    // next = prev + next;
    // prev = temp;
    [next,prev]=[next+prev, next]
  }
  return prev;
}

console.log(fib(7))

Вывод односвязного списка
важность: 5
Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
// Напишите функцию printList(list), которая выводит элементы списка по одному.
// TODO

function printList(list){
  console.log(list.value);
  if (list.next){
    printList(list.next)
  }
}
printList(list)

Сделайте два варианта решения: используя цикл и через рекурсию.

Как лучше: с рекурсией или без?

Остаточные параметры и оператор расширения

function sum (a,b,...rest){
  console.log(rest);
  return a+b;
}

console.log(sum(1,2,3,55555))




function concat2(...arrs) { 
  return [].concat(...arrs);
}

  console.log(concat2(1, 2, [3, 4], [[5]]));
// => [1, 2, 3, 4, [5]]

// TODO
// http://disq.us/url?url=http%3A%2F%2Fcssdeck.com%2Flabs%2Fdentq2no%3AosHxSNLvWRJQq9kH7QAOStixIMY&cuid=1192968 -крутое преобразование в flat arr

function toString (...args){
  return args.toString().split(',');
}
console.log(toString (1, 'a', [3, 4], [[5]], [[6]], [[[7]]]));

Еще полезно знать про объекты, если я хочу передать новый объект, содержащий все предыдущие поля, и поменять одно, можно сделать так:

const a = {
    name: "Vanya",
    age: 30,
    job: "driver",
};

const b = {
   ...a,
   age: 40,
};

// b = {name: "Vanya", age: 40, job: "driver"};

Работает как Object.assign

const c = Object.assign({}, a, {age: 20});

// c = {name: "Vanya", age: 20, job: "driver"};

// TODO
Объект счётчика
важность: 5
Здесь объект счётчика создан с помощью функции-конструктора.

Будет ли он работать? Что покажет?

function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}

let counter = new Counter();

alert( counter.up() ); // ?
alert( counter.up() ); // ?
alert( counter.down() ); // ?

// TODO

Функция в if
Посмотрите на код. Какой будет результат у вызова на последней строке?

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();

//  TODO - пробегись по codemu
Сумма с помощью замыканий
важность: 4
Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

Да, именно таким образом, используя двойные круглые скобки (не опечатка).

Например:


function sum (a){
  return function (b){
    return a+b;
  }
}

console.log(sum(1)(2));
console.log(sum(5)(-1));


Фильтрация с помощью функции

function inBetween(a,b){
  return function (x){
    return x>=a && x<=b;
  }
}

Армия стрелков
function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let shooter = function() { // функция shooter
      console.log( i ); // должна выводить порядковый номер
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

console.log(army[0]()); // у 0-го стрелка будет номер 10
console.log(army[5]()); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...


// TODO
Установка и уменьшение значения счётчика
важность: 5
Измените код makeCounter() так, чтобы счётчик мог увеличивать и устанавливать значение:

counter() должен возвращать следующее значение (как и раньше).
counter.set(value) должен устанавливать счётчику значение value.
counter.decrease() должен уменьшать значение счётчика на 1.
Посмотрите код из песочницы с полным примером использования.

P.S. Для того, чтобы сохранить текущее значение счётчика, можно воспользоваться как замыканием, так и свойством функции. Или сделать два варианта решения: и так, и так.


function makeCounter() {
let count = 0;

  function counter() {
    return count++;
  };

  // counter.count = 0;
  counter.set = value => count = value;
  return counter;
}

let counter = makeCounter();
console.log( counter() ); // 0
console.log( counter() ); // 1
counter.set(10)
console.log( counter() ); // 1

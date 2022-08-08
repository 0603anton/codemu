"use strict";

let arr = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];

let sum = 0;

for (const elem of arr) {
  for (const subElem of elem) {
    for (const subSubElem of subElem) sum += subSubElem;
  }
}

console.log(sum);

let arr = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    for (let k = 0; k < arr[j].length; k++) {
      sum += arr[i][j][k];
    }
  }
}
console.log(sum);

Задача 1⋕js.Pm.Md.MAF.1

Сформируйте с помощью двух вложенных циклов следующий массив:

[[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]
let arr = [];
for (let i = 0; i < 3; i++) {
  arr[i] = [];
  for (let j = 1; j < 6; j++) {
    arr[i].push(j);
  }
}
console.log(arr)

let arr = [];
for (let i = 0; i < 3; i++) {
  arr[i] = [];
  for (let k = 0; k < 2; k++) {
    arr[i][k] = [];
    for (let j = 1; j < 6; j++) {
      arr[i][k].push(j);
    }
  }
}
console.log(arr)


Задача 3⋕js.Pm.Md.MAF.3

Сформируйте с помощью трех вложенных циклов следующий массив:

[
  [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
  ],
  [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
  ],
  [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
  ],
]


let arr = [];

for (let i = 0; i < 3; i++) {
  arr[i] = [];

  for (let j = 0; j <= 5; j++) {
    arr[i][j] = j + 1;
  }
}

console.log(arr);


let arr = [];

for (let i = 0; i < 3; i++) {
  arr[i] = [];

  for (let j = 1; j <= 5; j++) {
    arr[i].push(j);
  }
}

console.log(arr);


let arr = [];

for (let i = 0; i < 3; i++) {
  arr[i] = [];

  for (let j = 1; j <= 5; j++) {
    arr.push(j);
  }
}

console.log(arr);

let arr = [];

for (let i = 0; i < 3; i++) {
  arr[i] = [];

  for (let j = 0; j <= 5; j++) {
    arr[j][i] = j;
  }
}

console.log(arr);

Задача 15⋕js.Pm.Md.MAF.15

Сформируйте с помощью двух вложенных циклов следующий массив:

[[1, 2], [3, 4], [5, 6], [7, 8]]

let arr = [];
let counter = 1;
for (let i = 0; i < 4; i++) {
  arr[i] = [];
  for (let j = 0; j < 2; j++) {
    arr[i][j] = counter++;
  }
}
console.log(arr);


Задача 16⋕js.Pm.Md.MAF.16

Сформируйте с помощью двух вложенных циклов следующий массив:

[[2, 4, 6], [8, 10, 12], [14, 16, 18], [20, 22, 24]]

let arr = [];
let counter = 0;
for (let i = 0; i < 4; i++) {
  arr[i] = [];
  for (let j = 0; j < 3; j++) {
    arr[i][j] = counter += 2;
  }
}
console.log(arr);

Задача 17⋕js.Pm.Md.MAF.17

Сформируйте с помощью трех вложенных циклов следующий трехмерный массив:

[[[1, 2], [3, 4]], [[5, 6], [7, 8]]]

let arr = [];
let counter = 1;
for (let i = 0; i < 2; i++) {
  arr[i] = [];
  for (let j = 0; j < 2; j++) {
    arr[i][j] = [];
    for (let k = 0; k < 2; k++) {
      arr[i][j][k] = counter++;
    }
  }
}
console.log(arr);
Задача 18⋕js.Pm.Md.MAF.18

Автор следующего кода хотел сделать вот такой массив:

[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
Для этого был написан следующий код:

let arr = [];

for (let i = 0; i < 3; i++) {
  arr[i] = [];

  for (let j = 0; j < 3; j++) {
    arr[i][j] = k;
    k++;
  }
}

console.log(arr);
Написанный код, однако, не делает задуманного.Найдите и исправьте ошибку автора.

K не определён
let arr = [];

for (let i = 0, k = 1; i < 3; i++) {
  arr[i] = [];

  for (let j = 0; j < 3; j++, k++) {
    arr[i][j] = k;
  }
}

console.log(arr);


Многомерные обЪекты

Задача 1⋕js.Pm.Md.MO.1

Дан следующий объект:

let obj = {
  key1: {
    key1: 1,
    key2: 2,
    key3: 3,
  },
  key2: {
    key1: 4,
    key2: 5,
    key3: 6,
  },
  key3: {
    key1: 7,
    key2: 8,
    key3: 9,
  },
}

let sum = 0;
sum = obj[`key1`][`key1`] + obj[`key1`][`key2`] + obj[`key1`][`key3`]; //  и тд
console.log(sum)
Найдите сумму элементов приведенного объекта.

  Задача 2⋕js.Pm.Md.MO.2

Дан следующий объект:

let obj = {
  1: {
    1: 'a1',
    2: 'a2',
    3: 'a3',
  },
  2: {
    1: 'b1',
    2: 'b2',
    3: 'b3',
  },
  3: {
    1: 'c1',
    2: 'c2',
    3: 'c3',
  },
}

console.log(obj[`2`][`2`]);
console.log(obj[`3`][`1`]);
Выведите на экран элемент 'b2' и элемент 'c1'.

  Задача 3⋕js.Pm.Md.MO.3

Дан следующий объект:

let obj = {
  key1: {
    a: 1, b: 2, c: {
      d: 3,
      e: 4,
    }, f: 5,
  },
  key2: {
    g: 6, h: 7,
  },
}
Найдите сумму всех элементов - чисел.

  Задача 1⋕js.Pm.Md.MOI.1

Дан следующий объект:

let obj = {
  1: {
    1: 11,
    2: 12,
    3: 13,
  },
  2: {
    1: 21,
    2: 22,
    3: 23,
  },
  3: {
    1: 24,
    2: 25,
    3: 26,
  },
}
// Используя циклы, найдите сумму элементов этого объекта.
let sum = 0;
for (let key in obj) {
  const subElem = obj[key];
  for (let subKey in subElem) {
    sum += subElem[subKey]
  }
}
console.log(sum);

Ключи из переменных в многомерных структурах JavaScript

Задача 1⋕js.Pm.Md.VK.1

Дан следующий объект с названиями месяцев:

let months = {
  'ru': [
    'январь',
    'февраль',
    'март',
    'апрель',
    'май',
    'июнь',
    'июль',
    'август',
    'сентябрь',
    'октябрь',
    'ноябрь',
    'декабрь',
  ],
  'en': [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december',
  ],
};
// Даны также следующие переменные:

let lang = 'ru'; // может быть или 'ru' или 'en'
let month = 5;   // число от 0 до 11
// Выведите на экран название месяца, соответствующее значениям переменных lang и month.

console.log(months[lang][month]);

Задача 2⋕js.Pm.Md.VK.2

Дана вот такая структура для хранения списка дел за года, месяцы и дни:

let affairs = {
  '2018': {
    11: {
      29: ['дело111', 'дело112', 'дело113'],
      30: ['дело121', 'дело122', 'дело123'],
    },
    12: {
      30: ['дело211', 'дело212', 'дело213'],
      31: ['дело221', 'дело222', 'дело223'],
    },
  },
  '2019': {
    12: {
      29: ['дело311', 'дело312', 'дело313'],
      30: ['дело321', 'дело322', 'дело323'],
      31: ['дело331', 'дело332', 'дело333'],
    }
  },
}

const year = `2018`;
const month = 11;
const day = 29;


// Пусть даны также 3 переменные, содержащие год, месяц и день.Выведите дело, соответствующее значениям переменных.
console.log(affairs[year][month][day]);


Задача 1⋕js.Pm.Md.MS.1

Дан следующий массив работников:

let employees = [
  {
    name: 'name1',
    salary: 300,
  },
  {
    name: 'name2',
    salary: 400,
  },
  {
    name: 'name3',
    salary: 500,
  },
];
// Выведите на экран сумму зарплат первого и второго работников.

const sum = employees[0][`salary`] + employees[1][`salary`];
console.log(sum);

Задача 2⋕js.Pm.Md.MS.2

Дан следующий объект со студентами:

let students = {
  'boys': ['Коля', 'Вася', 'Петя'],
  'girls': ['Даша', 'Маша', 'Лена'],
};
// Выведите на экран элемент 'Вася' и элемент 'Лена'.

console.log(students[`boys`][1])
console.log(students[`girls`][2])

Перебор многомерных комбинаций в JavaScript

Задача 1⋕js.Pm.Md.MSI.1

Дан следующий массив работников:

let employees = [
  {
    name: 'name1',
    salary: 300,
  },
  {
    name: 'name2',
    salary: 400,
  },
  {
    name: 'name3',
    salary: 500,
  },
];
// Выведите на экран данные каждого работника в формате имя - зарплата.

for (let elem of employees) {
  console.log(`Name: ${elem['name']} Salary:${elem['salary']}`)
}

Задача 2⋕js.Pm.Md.MSI.2

Дан следующий массив работников:

let employees = [
  {
    name: 'name1',
    salary: 300,
  },
  {
    name: 'name2',
    salary: 400,
  },
  {
    name: 'name3',
    salary: 500,
  },
];
// Выведите на экран сумму зарплат всех работников.

let sum = 0;
for (let elem of employees) {
  sum += elem[`salary`];
}
console.log(sum);

  Задача 3⋕js.Pm.Md.MSI.3

Дан следующий массив работников:

let employees = [
  {
    name: 'name1',
    salary: 300,
    age: 28,
  },
  {
    name: 'name2',
    salary: 400,
    age: 29,
  },
  {
    name: 'name3',
    salary: 500,
    age: 30,
  },
  {
    name: 'name4',
    salary: 600,
    age: 31,
  },
  {
    name: 'name5',
    salary: 700,
    age: 32,
  },
];
// Выведите на экран сумму зарплат тех работников, возраст которых равен или более 30 лет.
let sum = 0;
for (let elem of employees) {
  if (elem.age >= 30) {
    console.log(elem);
    sum += elem.salary;
  }
}
console.log(sum);

  Задача 4⋕js.Pm.Md.MSI.4

Дан следующий массив работников, в котором поле dismissed хранит в себе информацию о том, уволен работник или нет(true - уволен):

let employees = [
  {
    name: 'name1',
    salary: 300,
    dismissed: false,
  },
  {
    name: 'name2',
    salary: 400,
    dismissed: true,
  },
  {
    name: 'name3',
    salary: 500,
    dismissed: false,
  },
  {
    name: 'name4',
    salary: 600,
    dismissed: true,
  },
  {
    name: 'name5',
    salary: 700,
    dismissed: false,
  },
];
// Выведите на экран имена и зарплаты неуволенных работников.

for (let elem of employees) {
  if (!elem.dismissed) {
    console.log(`Имя работника: ${elem.name} and his salary: ${elem.salary}`)
  }
}

Задача 5⋕js.Pm.Md.MSI.5

// Дана следующая структура с данными:

let data = {
  1: [
    'data11',
    'data12',
    'data13',
  ],
  2: [
    'data21',
    'data22',
    'data23',
  ],
  3: [
    'data31',
    'data32',
    'data33',
    'data34',
    'data35',
  ],
  4: [
    'data41',
    'data42',
  ],
};
// С помощью вложенных циклов выведите на экран все строки с данными.

for (let elem in data) {
  for (let arrElem of data[elem]) {
    console.log(arrElem);
  }
}

  Задача 6⋕js.Pm.Md.MSI.6

Дана следующая структура с данными:

let data = [
  {
    1: 'data11',
    2: 'data12',
    3: 'data13',
    4: 'data14',
  },
  {
    1: 'data21',
    2: 'data22',
    3: 'data33',
  },
  {
    1: 'data31',
    2: 'Anton',
  },
];
// Количество объектов в массиве и количество элементов в объекте может быть произвольным.С помощью вложенных циклов выведите на экран все строки с данными.

for (let elem of data) {
  for (let subElem in elem) {
    console.log(elem[subElem])
  }
}

  Задача 7⋕js.Pm.Md.MSI.7

Дана следующая структура с данными:

let data = [
  {
    1: [
      'data111',
      'data112',
      'data113',
    ],
    2: [
      'data121',
      'data122',
      'data123',
    ],
  },
  {
    1: [
      'data211',
      'data212',
      'data213',
    ],
    2: [
      'data221',
      'data222',
      'data223',
      'data224',
    ],
    3: [
      'data231',
      'data232',
      'data233',
      'data234',
      'data235',
    ],
  },
  {
    1: [
      'data411',
      'data412',
      'data413',
    ],
    2: [
      'data421',
    ],
  },
];
// С помощью вложенных циклов выведите на экран все строки с данными.



for (let elem of data) {
  for (let key in elem) {
    for (let subElem of elem[key]) {
      console.log(subElem)
    }
  }
}


Задача 1⋕js.Pm.SM.Mth.1

Возведите 2 в 10 степень.

  console.log(Math.pow(2, 10));

  Задача 2⋕js.Pm.SM.Mth.2

Найдите квадратный корень из 245.

console.log(Math.sqrt(245))

Задача 3⋕js.Pm.SM.Mth.3

Дан следующий массив:

const arr = [4, 2, 5, 19, 13, 0, 10];
// Найдите квадратный корень из суммы кубов его элементов.Для решения воспользуйтесь циклом for.

let sum = 0;

for (let elem of arr) {
  sum += Math.pow(elem, 3);
}

console.log(Math.sqrt(sum))


Задача 4⋕js.Pm.SM.Mth.4

Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.

  console.log(Math.sqrt(379));
console.log(Math.round(Math.sqrt(379)));
console.log(Math.sqrt(379).toFixed(1));
console.log(Math.sqrt(379).toFixed(2));

  Задача 5⋕js.Pm.SM.Mth.5

Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'.

let number = Math.sqrt(587);
console.log(number);
console.log(Math.ceil(number));
console.log(Math.floor(number));

Задача 6⋕js.Pm.SM.Mth.6

Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.

  console.log(Math.max(4, -2, 5, 19, -130, 0, 10));
console.log(Math.min(4, -2, 5, 19, -130, 0, 10));


Задача 7⋕js.Pm.SM.Mth.7

Выведите на экран случайное целое число от 1 до 100.


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 100));

// Задача 8⋕js.Pm.SM.Mth.8

// С помощью цикла заполните массив 10 - ю случайными целыми числами.

let arr = [];
let i = 0;
while (i < 10) {
  arr.push(getRandomInt(1, 100));
  i++;
}

console.log(arr)


Работа с регистром символов
Изучите теорию по следующим ссылкам:

toUpperCase toLowerCase

Задача 1⋕js.Pm.SM.St.1

Дана строка 'js'.Сделайте из нее строку 'JS'.

let str = 'js';

console.log(str.toUpperCase())
console.log(str.toLowerCase())

  Задача 2⋕js.Pm.SM.St.2

Дана строка 'JS'.Сделайте из нее строку 'js'.



  Задача 3⋕js.Pm.SM.St.3

Дана строка 'я учу javascript!'.Вырежьте из нее слово 'учу' и слово 'javascript' тремя разными способами(через substr, substring, slice).

let str = 'я учу javascript!';

console.log(str.substr(2, 3) + ` ` + str.substr(6));
console.log(str.substring(2, 5) + ` ` + str.substr(6, 16));
console.log(str.slice(2, 5) + ` ` + str.slice(6, 16));

Задача 4⋕js.Pm.SM.St.4

Дана строка 'abcde'.Определите позицию буквы 'c' в этой строке.

const str = 'abcde';
console.log(str.indexOf(`c`));

  Задача 5⋕js.Pm.SM.St.5

Дана строка.Проверьте, есть ли в этой строке символ 'a'.


const str = 'abcde';
console.log(str.indexOf(`c`));// if -1 => no

  Задача 6⋕js.Pm.SM.St.6

Дана строка.Проверьте, начинается ли эта строка с символа 'a'.

const str = 'abcde';
console.log(str.indexOf(`c`)); // if position 0
  Задача 7⋕js.Pm.SM.St.7

Дана строка.Проверьте, заканчивается ли эта строка на символ 'a'.
const str = 'abcde';
console.log(str.indexOf(`c`)); // добавить условие str.length == indexOf

  Задача 8⋕js.Pm.SM.St.8

Дана строка.Проверьте, начинается ли эта строка на 'http://'. // протос IndexOf ==0

  Задача 9⋕js.Pm.SM.St.9

Дана строка.Проверьте, заканчивается ли эта строка на '.html' // добавить условие str.length-4 == indexOf

Работа с slice
Изучите теорию по следующим ссылкам:

slice

Задача 5⋕js.Pm.SM.Ar.5

Дан следующий массив:

[1, 2, 3, 4, 5]
Сделайте из этого массива следующий:

[1, 2, 3]

const arr = [1, 2, 3, 4, 5];
console.log(arr.slice(0, 3))
Задача 6⋕js.Pm.SM.Ar.6

Дан следующий массив:

[1, 2, 3, 4, 5]
Используя этот массив, запишите в новую переменную следующий массив:

[4, 5]
const arr = [1, 2, 3, 4, 5];
const newArr = arr.slice(3);
console.log(newArr)

рекусрия 196

№2⊗jsPmFARc

Дан массив:

let arr = [1, 2, 3, 4, 5];

function getSqureSum (arr){
  let sum = arr.shift()**2;
  if (arr.length != 0){
    sum += getSqureSum(arr);
  }
  return sum;
}

console.log(getSqureSum (arr))
// С помощью рекурсии найдите сумму квадратов элементов этого массива.

function getSum(arr) {
	let sum = arr.shift();
	console.log(`"Это первое значение sum"` + sum)
	if (arr.length !== 0) {
		sum += getSum(arr);
    	console.log(`"Этозначение sum после ifa "` + sum)
	}
		console.log(`"Это sum который будет в ретёрне" ` + sum)
	return sum;
}

console.log(getSum([1, 2, 3]));


  // let counter =0;
function numbers(params) {

  if (params <10) {
    return 1;
  }
// counter++;
  
  return 1 + numbers(params/10);
}
console.log(numbers(1000));


const sumOfDigits = num => num / 10 < 1 ? 1 : 1 + sumOfDigits(num / 10);

console.log(sumOfDigits(0))

№1⊗jsPmFARS

Дан многомерный объект произвольного уровня вложенности, например, такой:

let obj = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};
// С помощью рекурсии выведите все примитивные элементы этого объекта в консоль.

function objectRecursion(obj) {
  for (let elem in obj){
    if (typeof obj[elem] == `object`){
      objectRecursion(obj[elem])
    } else{
      console.log(obj[elem])
    }
  }
}

objectRecursion(obj)

№2⊗jsPmFARS

Дан многомерный массив произвольного уровня вложенности, например, такой:

let arr = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];
// Напишите код, который развернет наш многомерный массив в одномерный. Для приведенного выше массива это будет выглядеть вот так:

// [1, 2, 7, 8, 3, 4, 5, 6, 7]
let flatArr = [];
function innerArrToFlat (arr){

  for (let elem of arr){
    if (typeof elem == `object`){
      innerArrToFlat(elem)
    } else{
      flatArr.push(elem);
    }
  }
  return flatArr;
}


console.log(innerArrToFlat (arr))

№3⊗jsPmFARS

Дан многомерный объект произвольного уровня вложенности, например, такой:

let obj={a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}
// С помощью рекурсии найдите сумму элементов этого объекта.

function sumOfElements (obj){
  let sum = 0;
  for (let elem in obj){
    if (typeof obj[elem] == `object`){
      sum+= sumOfElements(obj[elem])
    } else{
      sum+= obj[elem]
    }
  }
  return sum;
}

console.log(sumOfElements (obj))
№4⊗jsPmFARS

Дан многомерный массив произвольного уровня вложенности, содержащий внутри себя строки, например, такой:

let arr = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]]
// С помощью рекурсии слейте элементы этого массива в одну строку:

// 'abcdefgjk'
function arrToStr (arr){
  let str = ``;
  for (let elem of arr){
    if (typeof elem == `object`){
      str+= arrToStr (elem)
    } else {
      str += elem;
    }
  }
  return str;
}
console.log(arrToStr (arr));

let arr = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];

function elemToPow (arr){
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == `object`){
      elemToPow (arr[i])
    } else{
      arr[i] = arr[i]**2;
    }
  }
  return arr;
}

console.log(elemToPow (arr))


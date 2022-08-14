"use strict";
let date = new Date();
console.log(date);

console.log(date.getFullYear()); // год
console.log(date.getMonth()); // месяц
console.log(date.getDate()); // день

console.log(date.getHours()); // часы
console.log(date.getMinutes()); // минуты
console.log(date.getSeconds()); // секунды
date.getTime(); // формат временной метки
function addZero(num) {
  if (num >= 0 && num <= 9) {
    return "0" + num;
  } else {
    return num;
  }
}

console.log(
  addZero(date.getHours()) +
    `:` +
    addZero(date.getMinutes()) +
    `:` +
    addZero(date.getSeconds()) +
    ` ` +
    addZero(date.getDate()) +
    `.` +
    addZero(date.getMonth()) +
    `.` +
    date.getFullYear()
);

№1⊗jsPmTmFCh

Дана дата в формате год-месяц-день. Преобразуйте эту дату в формат день.месяц.год.

let str = "2025-12-31";
let res = str.split("-").reverse().join(".");

console.log(res);

// №1⊗jsPmTmWG

// Выведите на экран номер текущего дня недели.

let date = new Date();
console.log(date.getDay());

// №2⊗jsPmTmWG

// Определите, является ли текущий день недели выходным или рабочим днем.
if (date.getDay() == 6 || date.getDay() == 0){
  console.log(`Сегодня выходной`)
}


// №3⊗jsPmTmWG

// Определите сколько дней осталось до ближайшего воскресенья.
console.log(`До воскресенья остлось ` + (7 - date.getDay()) +` days`);

// №1⊗jsPmTmWDO

// Пусть дан следующий массив:
let date = new Date();
let month = date.getMonth();
let months = [
	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
	'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
];
// Выведите с помощью этого массива название текущего месяца.

console.log(months[month]);

// №1⊗jsPmTmTS

// Узнайте, какой день недели был в ваш день рождения.

let date = new Date(1990,2,6);
let day =date.getDay();
let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
console.log(days[day]);

№1⊗jsPmTmTmF

Выведите на экран timestamp, соответствующий дате 1 января 2025 года.

let date = new Date(2025,0,1);
console.log(date.getTime());

№1⊗jsPmTmTmD

Выведите на экран количество дней, прошедшее между 1 марта 1988 года и 10 января 2000 года.

let date1 = new Date(1988,2,1);
let date2 = new Date(2000,0,10);
let diff = date2.getTime() - date1.getTime();
console.log(diff / (1000 * 60 * 60 * 24));

№2⊗jsPmTmTmD

Выведите на экран количество месяцев, прошедшее между вашим рождением и текущим моментом времени.

let now = new Date();
let myBirthday = new Date(1990,2,6);
let diff = now.getTime() - myBirthday.getTime();
console.log((diff / (1000 * 60 * 60 * 24 *365))*12);

№1⊗jsPmTmDOD

Выведите на экран количество миллисекунд, прошедшее между 1 сентября 2000 года и 15 февраля 2010 года.

const date1 = new Date(2000,8,1);
const date2 = new Date(2010,1,15);
const diff = date2 - date1;
console.log(diff)

№2⊗jsPmTmDOD

Модифицируйте предыдущую задачу так, чтобы на экран выводилась разница в днях.

const date1 = new Date(2000,8,1);
const date2 = new Date(2010,1,15);
const diff = date2 - date1;
console.log(diff / (1000*60*60*24))

№3⊗jsPmTmDOD

Модифицируйте предыдущую задачу так, чтобы на экран выводилась разница в месяцах.
const date1 = new Date(2000,8,1);
const date2 = new Date(2010,1,15);
const diff = date2 - date1;
console.log((diff / (1000 * 60 * 60 * 24 *365))*12);

№4⊗jsPmTmDOD

Модифицируйте предыдущую задачу так, чтобы на экран выводилась разница в годах.
const date1 = new Date(2000,8,1);
const date2 = new Date(2010,1,15);
const diff = date2 - date1;
console.log((diff / (1000 * 60 * 60 * 24 *365)));

let date = new Date(2018, 1, 35);
console.log(date); // какая дата будет?
let date = new Date(2018, 13, 1);
console.log(date); // какая дата будет?

function getDaysAmount (year,month){
  let date = new Date(year, month, 0);
return date.getDate();
}

console.log(getDaysAmount (2025,2))


№1⊗jsPmTmLE

Сделайте функцию isLeap, которая параметром будет принимать год и возвращать true, если этого год високосный, и false - если нет.

function isLeap (year){
  let date = new Date(year, 2, 0);
return date.getDate() == 29;
}

console.log(isLeap (2000))

№1⊗jsPmTmDCCh

Сделайте функцию checkDate, которая будет выполнять описанную проверку. Пусть функция возвращает true, если дата корректна и false, если нет. Пример работы этой функции для 31 января и 32 января:

function checkDate (year,month,day){
  let date = new Date(year, month, day);
  return (date.getFullYear() == year && date.getMonth() == month && date.getDate() == day);
}

console.log(checkDate(2025, 0, 31)); // выведет true
console.log(checkDate(2025, 0, 32)); // выведет false


let now  = new Date(); // получаем текущий момент
let date = new Date(now.getFullYear(), 11, 31); // получаем нашу дату
console.log(date.getDay())

№2⊗jsPmTmTMG

Определите, какой день недели будет 1 числа текущего месяца.

let now = new Date();
let data = new Date(now.getFullYear(), now.getMonth(), 1);
console.log(data.getDay())

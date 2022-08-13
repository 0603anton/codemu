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
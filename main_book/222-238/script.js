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
№3⊗jsPmTmTMG

Определите, какой день недели будет 31 декабря следующего года.
let now = new Date();
let data = new Date(now.getFullYear() + 1, 11, 31);
console.log(data.getDay())

№4⊗jsPmTmTMG

Определите, какой день недели будет через год в такую же дату, как сегодня.

let now = new Date();
let data = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate());
console.log(data.getDay())

№5⊗jsPmTmTMG

Определите, какой день недели был год назад в такую же дату, как сегодня.

let now = new Date();
let data = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
console.log(data.getDay())
№6⊗jsPmTmTMG

Вопрос: не будет ли проблемы, если текущий месяц январь? Ведь он имеет номер 0, и при вычитании из него единицы мы получим минус первый месяц.

№7⊗jsPmTmTMG

Определите, какой день недели был месяц назад в такой же день месяца, как сегодня.

let now = new Date();
let data = new Date(now.getFullYear(), now.getMonth() -1, now.getDate());
console.log(data.getDay())

№8⊗jsPmTmTMG

Определите, сколько дней между 1 января и 10 сентября текущего года.
let now = new Date();
let data1 = new Date(now.getFullYear(), 0, 1);
let data2= new Date(now.getFullYear(), 9, 10);
let diff = data2 - data1;
console.log(diff / (1000*60*60*24))

№9⊗jsPmTmTMG

Определите, сколько дней между 20 числом текущего месяца и 10 числом следующего.

let now = new Date();
let data1 = new Date(now.getFullYear(), now.getMonth(), 20);
let data2= new Date(now.getFullYear(), now.getMonth() +1, 10);
let diff = data2 - data1;
console.log(diff / (1000*60*60*24))

№10⊗jsPmTmTMG

Определите, сколько часов прошло между вчерашним полднем и текущим моментом времени.

let now = new Date();
let data1 = new Date(now.getFullYear(), now.getMonth(), now.getDate()-1, 12);
// let data2= new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, 12);
let diff = now - data1;
console.log(diff / (1000*60*60 ))

№11⊗jsPmTmTMG

Определите, сколько часов прошло между началом дня и текущим моментом времени.
let now = new Date();
let data1 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0,0,0);
let diff = now - data1;
console.log(diff / (1000*60*60 ))

№12⊗jsPmTmTMG

Определите, сколько часов осталось до конца дня.

let now = new Date();
let data1 = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
let diff = data1 -now;
console.log(diff / (1000*60*60 ))


поиск всех воскресений с 1 числом
let now  = new Date();
let year = now.getFullYear();

for (let month = 0; month <= 11; month++) {
	let date = new Date(year, month, 1);
	
	if (date.getDay() == 0) {
		console.log(year + '-' + month + '-1');
	}
}

№13⊗jsPmTmTMG

Рассмотрите промежуток от 2000 года до текущего года. Определите, сколько раз 1 января в этом промежутке попадало на выходной день, то есть на субботу или на воскресенье.
let now  = new Date();
for (let year = 2000; year < now.getFullYear(); year ++){
  let date = new Date(year, 0,1);
  if (date.getDay() == 6 ||date.getDay() == 7) {
    console.log(year);
  }
}

Практика на получение моментов времени в JavaScript
№1⊗jsPmTmTMT
let now  = new Date();
let time = new Date (now.getFullYear(),now.getMonth(),now.getDate(),0,0,0);
let diff = time - now;
console.log(diff / (1000))
Определите, сколько секунд прошло с начала дня до настоящего момента времени.

№2⊗jsPmTmTMT

Определите, сколько секунд осталось до конца дня.

№1⊗jsPmTmTMT
let now  = new Date();
let time = new Date (now.getFullYear(),now.getMonth(),now.getDate(),23,59,59);
let diff = time - now;
console.log(diff / (1000*60*60))

№3⊗jsPmTmTMT

Определите, сколько дней осталось до нового года.
let now  = new Date();
let time = new Date (now.getFullYear(),11,31,23,59,59);
let diff = time - now;
console.log(diff / (1000*60*60*24))
№4⊗jsPmTmTMT

Определите, сколько пятниц 13-е в текущем году.
let now  = new Date();

for (let month = 0; month<12; month++){
let time = new Date (now.getFullYear(),month,13);
if (time.getDay() == 5){
  console.log(month)
}
}

№5⊗jsPmTmTMT

Определите, какой год был 3 месяца назад.

let now  = new Date();
let time = new Date (now.getFullYear(),now.getMonth()-3,1);
console.log(time.getFullYear())

№6⊗jsPmTmTMT

Определите, какой день недели будет в последнем дне текущего месяца.

let now  = new Date();
let time = new Date (now.getFullYear(),now.getMonth()+1, 0);
console.log(time.getDay())

№7⊗jsPmTmTMT

Напишите код, который будет определять, високосный ли текущий год.

function isLeap(year) {

}

console.log(isLeap(2001))

// №8⊗jsPmTmTMT

// Напишите код, который будет находить предыдущий високосный год.
function isLeap(year) {
for (year; year > 0; year--) {
    let date = new Date(year-1,2,0);
    if(date.getDate() == 29){
  return date.getFullYear();
    }else{
      continue;
    }
}
}
console.log(isLeap(2000))

№9⊗jsPmTmTMT

Напишите код, который будет находить следующий високосный год.

function isLeap(year) {
for (year; year > 0; year++) {
    let date = new Date(year+1,2,0);
    if(date.getDate() == 29){
  return date.getFullYear();
    }else{
      continue;
    }
}
}
console.log(isLeap(2000))

№1⊗jsPmTmDSC

Напишите код, который сравнит две приведенные ниже даты и выведет сообщение о том, какая из них больше:

let date1 = '2020-11-31';
let date2 = '2020-12-01';
console.log(date1>date2?date1:date2);

№2⊗jsPmTmDSC

Напишите код, который сравнит две приведенные ниже даты и выведет сообщение о том, какая из них больше:

let date1 = '09-21';
let date2 = '09-23';
console.log(date1>date2?date1:date2);


№3⊗jsPmTmDSC

Дана дата, содержащая месяц и день. Определите знак Зодиака, на которую приходится эта дата.

let date = '01-02';

if (date >= '01-01' && date <= '03-08') {
	console.log('1 промежуток');
}

etc...

№1⊗jsPmTmCDO

Получите объект с датой, содержащий текущий момент времени. Получите объект с датой, содержащий полдень текущего дня. Сравните два этих объекта и определите, был ли уже полдень или нет.

№2⊗jsPmTmCDO

Получите объект с датой, содержащий текущий момент времени. Получите объект с датой, содержащий 15 число текущего месяца. Сравните два этих объекта и определите, прошла ли уже половина месяца или нет.
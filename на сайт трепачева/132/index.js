132

js.Pm.Dst.Ar

№ 1

let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

let [name1, surname, department, position, salary] = arr;
console.log(name1);

№
2

function func() {
  return ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
}

let [name1, surname, department, position, salary] = func();
console.log(name1);

№
3

let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

let [, , department, position, ] = arr;
console.log(department);

№
4


let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

let [name1, surname, ...info] = arr;

console.log(info);

№
5

Задача 5 js.Pm.Dst.Ar

let arr = ['Иван', 'Иванов', 'отдел разработки'];


let [name1, surname, department, position = `Junior`] = arr;
console.log(position);

№
6
let arr = [];

function func() {
  return (new Date).getDate();
}

function funcYear() {
  return (new Date).getFullYear();
}

function funcMonth() {
  return (new Date).getMonth();
}


let [year = funcYear(), month = funcMonth(), day = func()] = arr;

console.log(year, month, day);
"use strict";
№1⊗jsPmDstAInr

В следующем коде части массива записываются в соответствующие переменные:

let arr = ['John', 'Smit', 'development', 'programmer', 2000];

// let name       = arr[0];
// let surname    = arr[1];
// let department = arr[2];
// let position   = arr[3];
// let salary     = arr[4];
// Переделайте этот код через деструктуризацию согласно изученной теории.

const [name,surname,department,position,salary] = arr;
console.log(name)

№1⊗jsPmDstAFR

В следующем коде части массива записываются в соответствующие переменные:

function func() {
	return ['John', 'Smit', 'development', 'programmer', 2000];
}

const [name,surname,department,position,salary] = func();

console.log(name,department)

№1⊗jsPmDstASE

В следующем коде части массива записываются в соответствующие переменные:

let arr = ['John', 'Smit', 'development', 'programmer', 2000];

// let department = arr[2];
// let position   = arr[3];
// Переделайте этот код через деструктуризацию согласно изученной теории.
const [,, department, position,] = arr;
console.log(department);
console.log(position);

№1⊗jsPmDstAR

В следующем коде части массива записываются в соответствующие переменные:

let arr = ['John', 'Smit', 'development', 'programmer', 2000];

// let name    = arr[0];
// let surname = arr[1];

// let info = arr.slice(2); // все элементы со второго до конца массива
// Переделайте этот код через деструктуризацию согласно изученной теории.

const [name,surname, ...rest] = arr;
console.log(name,surname, rest);


№1⊗jsPmDstADV

В следующем коде части массива записываются в соответствующие переменные:

let arr = ['John', 'Smit', 'development', 'programmer'];

// let name       = arr[0];
// let surname    = arr[1];
// let department = arr[2];

// let position;
// if (arr[3] !== undefined) {
// 	position = arr[3];
// } else {
// 	position = 'trainee';
// }
// Переделайте этот код через деструктуризацию согласно изученной теории.
let [name,surname,department, position = `trainee`] = arr;
console.log(position)


№1⊗jsPmDstAFDV

Модифицируйте полученный выше код так, чтобы при отсутствии в массиве значения для месяца по умолчанию брался текущий месяц, а при отсутствии значения для года - соответственно текущий год.

let arr = [2022]

function func() {
	return (new Date).getDate();
}

function getMonth() {
	return (new Date).getMonth();
}
// Давайте укажем эту функцию в качестве значения переменной day:

let [year, month = getMonth(), day = func()] = arr;

console.log(year)
console.log(month)
console.log(day)

№1⊗jsPmDstOInr

В следующем коде части объекта записываются в соответствующие переменные:

let options = {
	color: 'red',
	width:  400,
	height: 500,
};

// let color  = options.color;
// let width  = options.width;
// let height = options.height;
// Переделайте этот код через деструктуризацию согласно изученной теории.
let{color,width,height} = options;

console.log(color)
console.log(width)

№1⊗jsPmDstOVN

В следующем коде части объекта записываются в соответствующие переменные:

let options = {
	color: 'red',
	width:  400,
	height: 500,
};

// let c = options.color;
// let w = options.width;
// let h = options.height;
// Переделайте этот код через деструктуризацию согласно изученной теории.

let {color:c, width:w,height:h} = options;
console.log(first)

№1⊗jsPmDstODV

В следующем коде части объекта записываются в соответствующие переменные:

let options = {
	width:  400,
	height: 500,
};

// let color;
// if (options.color !== undefined) {
// 	color = options.color;
// } else {
// 	color = 'black';
// }

// let width  = options.width;
// let height = options.height;
// Переделайте этот код через деструктуризацию согласно изученной теории.

let {width,height,color = `black`} = options;
console.log(color)
console.log(width)

№1⊗jsPmDstOVDV

В следующем коде части объекта записываются в соответствующие переменные:

let options = {
	width:  400,
	height: 500,
};

// let с;
// if (options.с !== undefined) {
// 	с = options.color;
// } else {
// 	с = 'black';
// }

// let w = options.width;
// let h = options.height;
// Переделайте этот код через деструктуризацию согласно изученной теории.

let {width:w,height:h, color:c = `black`} = options;
console.log(c)

№1⊗jsPmDstFP

Переделайте следующий код через деструктуризацию согласно изученной теории:

// function func(employee) {
// 	let name       = employee[0];
// 	let surname    = employee[1];
// 	let department = employee[2];
// 	let position   = employee[3];
// 	let salary     = employee[4];
// }

function func([name,surname,department,position,salary]) {
  console.log(name);
  console.log(surname);
}

func( ['John', 'Smit', 'development', 'programmer', 2000] );

console.log(first)


№2⊗jsPmDstFP

Переделайте следующий код через деструктуризацию согласно изученной теории:

function func(employee) {
	let name     = employee[0];
	let surname  = employee[1];
	let info     = employee[2];
}

function func([name,surname, ...info]){
  console.log(name);
  console.log(info)
}

func( ['John', 'Smit', 'development', 'programmer', 2000] );

// №3⊗jsPmDstFP

// Переделайте следующий код через деструктуризацию согласно изученной теории:

// function func(employee) {
// 	let name       = employee[0];
// 	let surname    = employee[1];
// 	let department = employee[2];
	
// 	let position;
// 	if (arr[3] !== undefined) {
// 		position = arr[3];
// 	} else {
// 		position = 'джуниор';
// 	}
// }

function func([name,surname,department, position = `junior`]){
console.log(name);
console.log(surname);
console.log(department);
}

func( ['John', 'Smit', 'development'] );

// №4⊗jsPmDstFP

// Переделайте следующий код через деструктуризацию согласно изученной теории:

// function func(department, employee, hired) {
// 	let name     = employee[0];
// 	let surname  = employee[1];
	
// 	let year  = hired[0];
// 	let month = hired[1];
// 	let day   = hired[2];
// }
function func(department, [name,surname], [year,month, day]) {
  console.log(year)
}

func( 'development', ['John', 'Smit'], [2018, 12, 31] );

№5⊗jsPmDstFP

Переделайте следующий код через деструктуризацию согласно изученной теории:

// function func(options) {
// 	let color  = options.color;
// 	let width  = options.width;
// 	let height = options.height;
// }
function func({color,width,height}) {
  console.log(width)
}
let obj = {color: 'red', width: 400, height: 500};
func(obj);


// №6⊗jsPmDstFP

// Переделайте следующий код через деструктуризацию согласно изученной теории:

// function func(options) {
// 	let width  = options.width;
// 	let height = options.height;
	
// 	let color;
// 	if (options.color !== undefined) {
// 		color = options.color;
// 	} else {
// 		color = 'black';
// 	}
// }
function func({color = `black`,width,height}){
  console.log(color);
}
func( {color: 'red', width: 400, height: 500} );
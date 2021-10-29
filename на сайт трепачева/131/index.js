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

133

№ 1

let options = {
  color: 'red',
  width: 400,
  height: 500,
};

let {
  color,
  width,
  height
} = options;

console.log(color);

№
2


let options = {
  color: 'red',
  width: 400,
  height: 500,
};

let {
  color: c,
  width: w,
  height: h
} = options;

console.log(c);

№
3

let options = {
  width: 400,
  height: 500,
};


let {
  color = `black`, width, height
} = options;

console.log(color);

№
4

let options = {
  width: 400,
  height: 500,
};


let {
  color: c = `black`,
  width: w,
  height: h
} = options;

console.log(c, w, h);


134

js.Pm.Dst.Fn

№ 1

function func([name, surname, department, position, salary]) {
  console.log(name);
  console.log(surname);
}

console.log(func(['Иван', 'Иванов', 'отдел разработки', 'программист', 2000]));

№
2

function func([name, surname, department]) {}

func(['Иван', 'Иванов', 'отдел разработки', 'программист', 2000]);

№
3

function func([name, surname, department, position = `джуниор`]) {
  console.log(position);
}

func(['Иван', 'Иванов', 'отдел разработки']);

№
4

function func(department, [name, surname],
  [year, month, day]
) {
  console.log(day);
}

func('отдел разработки', ['Иван', 'Иванов'], [2018, 12, 31]);


№
5

function func({
  color,
  width,
  height
}) {
  console.log(width);
}

func({
  color: 'red',
  width: 400,
  height: 500
});

№
6


function func({
  width,
  height,
  color = `black`
}) {
  console.log(color);
}

func({
  // color: 'red',
  width: 400,
  height: 500
});
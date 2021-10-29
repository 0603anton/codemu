js.Pm.Dst.Fn

№
1

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
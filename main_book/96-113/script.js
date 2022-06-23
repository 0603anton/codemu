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
let arr =[];
for (let i = 0; i < 3; i++) {
  arr[i] = [];
  for (let j = 1; j < 6; j++) {
    arr[i].push(j);
  }
}
console.log(arr)

let arr =[];
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
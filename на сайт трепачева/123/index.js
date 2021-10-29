js.Pm.Enm.Fi

№ 1

let arr = [1, 2, 3, 4, -5];

console.log(arr.filter(elem => elem > 0));


№
2
let arr = [1, 2, 3, 4, -5];

console.log(arr.filter(elem => elem < 0));


№
3
let arr = [1, 2, 3, 4, -5, 10];

console.log(arr.filter(elem => elem > 0 && elem < 10));


№
4
let arr = [`1111`, `22222`, `3222222222`, `4`, `-5`, `1111111111111111110`];
console.log(arr.filter(elem => elem.length > 5));

№
5
let arr = [1, 2, 3, 4, -5, 10];

console.log(arr.filter((elem, index) => elem * index < 30));


№
6

let arr = [1, 2, [3, 4], 5, [6, 7]];
let result = arr.filter(elem => typeof elem !== "object");
console.log(result);
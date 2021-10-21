js.Pm.Enm.Mp

№ 1

let arr = [1, 2, 3, 4, 5];

let result = arr.map((elem) => Math.sqrt(elem));

console.log(result);

№
2

let arr = [`1`, `2`, `3`, `4`, `5`];
let result = arr.map((elem) => elem + `!`);
console.log(result);

№
3

let arr = [`12`, `23`, `34`, `45`, `56`];
let result = arr.map((elem) => elem.split(``).reverse().join(``));
console.log(result);

№
4

let arr = ['123', '456', '789'];
let result = arr.map((elem) => elem.split(``));
console.log(result);

№
5
let arr = [1, 2, 3, 4, 5];
let result = arr.map((elem, index) => elem * index);
console.log(result);
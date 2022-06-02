`use strcit`;

// let obj = {
//   1: "a",
//   2: "b",
//   3: "c",
// };

// console.log(obj);
// console.log(obj[1] + obj[2] + obj[3]);

// let obj1 = {
//   "1a": 1,
//   "2b": 2,
//   "c-c": 3,
// };

// console.log(obj1["1a"] + obj1["2b"] + obj1["c-c"]);

// let obj = { key1: 1, key2: 2, key3: 3 };
// console.log(obj.key1 + obj.key2 + obj.key3);

// Задача 1⋕js.Pm.Cl.VK.1

// Дан следующий массив:

let arr = ["a", "b", "c"];
// Дана также переменная:

let key = 2;
// Выведите на экран элемент, ключ которого хранится в переменной key.

console.log(arr[key]);

// Задача 2⋕js.Pm.Cl.VK.2

// Дан следующий массив:

let arr = [1, 2, 3, 4, 5];
// Даны также переменные:

let key1 = 1;
let key2 = 2;
// Найдите сумму элементов, ключи которых хранятся в наших переменных.
console.log(arr[key1] + arr[key2]);

let arr = [1, 2, 3];
console.log(typeof arr[0]);

let arr1 = [1, 2, 3];
let arr2 = arr1;

arr1[0] = "a";
console.log(arr2);

let arr1 = [1, 2, 3];
let arr2 = arr1;

arr1[0] = "a";
arr2[1] = "b";

console.log(arr1);

let arr1 = [1, 2, 3];
let arr2 = arr1;

arr1[0] = "a";
arr2[0] = "b";

console.log(arr2);

let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
console.log("e" in obj);
console.log("f" in obj);

let arr = ["a", "b", "c", "d", "e"];
delete arr[4];
console.log(arr);

const arr = ["a", "b", "c"];
arr[1] = "!";
console.log(arr);

const arr = ["a", "b", "c"];
arr = ["a", "b", "c"];
console.log(arr);

let arr = [1, 2, 3, 4, 5];
console.log(arr[arr.length - 1]);

let arr = [1, 2, 3, 4, 5];
console.log(arr.length);
Задача 4⋕js.Pm.Cl.Mst.4

Код должен вывести элемент объекта:

let obj = {a: 1, b: 2, c: 3};
console.log(obj[`a`]);

let obj = {a: 1, b: 2, c: 3};
let key = 'a';

console.log(obj[key]);

let obj = {a: 1, b: 2, c: 3};
let sum = obj[`a`] + obj[`b`] + obj[`c`];

console.log(sum);

let obj = {a: 1, b: 2, c: 3};
console.log(obj.length);
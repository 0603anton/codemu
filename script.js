`use strict`


// Задача 18.1

// Дан следующий массив:

// let arr = ['a', 'b', 'c'];
// Дана также переменная key со значением 2.

// Выведите на экран элемент, ключ которого хранится в переменной key.


// let arr = ['a', 'b', 'c'];
// let key = 2;

// console.log(arr[key]);

// Задача 18.2

// Дан следующий массив:

// let arr = [1, 2, 3, 4, 5];
// Дана также переменная key1 со значением 1 и переменная key2 со значением 2.

// Найдите сумму элементов, ключи которых хранятся в наших переменных.

// let arr = [1, 2, 3, 4, 5];
// let key1 = 1;
// let key2 = 2;
// console.log(arr[key1] + arr[key2]);

// Задача 18.3

// Дан следующий объект:

// let obj = {'a': 1, 'b': 2, 'c': 3};
// Дана переменная key, в которой хранится один из ключей нашего объекта. Выведите с помощью переменной key соответствующий элемент объекта.

// let obj = {'a': 1, 'b': 2, 'c': 3};
// let key = `b`;

// console.log(obj [key]);

// Пусть в переменной num хранится число.Если это число меньше 10 или больше 99,
//     то выведите на экран сообщение об этом.Если же число попадает в указанный диапазон,
//     то найдите сумму цифр этого числа.Если полученная сумма меньше или равна 9,
//     то выведите на экран сообщение о том, что сумма цифр однозначна,
//     в противном случае выведите сообщение о том, что сумма цифр двузначна.

// let num = 99;

// let sumOfDigits = function (number) {
//     let sum = 0;
//     let arr = number.toString().split(``);

//     for (let i = 0; i < arr.length; i++) {
//         // console.log(typeof(Number(arr[i])));
//         sum += Number(arr[i]);
//         // console.log(arr);
//         // console.log(sum);
//     }
//     if (sum <= 9) {
//         console.log(`summa odnoznachna`);
//     } else {
//         console.log(`summa dvuznachna ili menshe nula`);
//     }
// }

// if (num < 10 || num > 99) {
//     console.log(`ne popadaet`);
// } else {
//     sumOfDigits(num);
// }

// Задача 30.2

// Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. 
// Если это так - выведите 'да', в противном случае выведите 'нет'.

// const stroka = `abcde`;
// if (stroka[0] === `a`) {
//     console.log(`yes`);
// } else {
//     console.log(`no`);
// }

// Задача 33.1

// Пусть даны следующие переменные:

// let a = 2 * (3 - 1);
// let b = 6 - 2;
// Используя оператор ==, узнайте, равны ли значения этих переменных или нет.

// console.log(a == b);

// Задача 35.1

// Выведите в консоль числа от 1 до 100.


// let i = 1;
// while (i <= 100) {
//     console.log(i);
//     i++;
// }

// Задача 35.2

// Выведите в консоль числа 11 до 33.

// let j = 11;
// while (j <= 33) {
//     console.log(j);
//     i++;
// // }
// Задача 38.1

// Найдите произведение целых чисел от 1 до 20.

// let result = 1;
// for (i = 1; i <= 20; i++) {
//     result *= i;
//     console.log(result);
// }

// Задача 39.6

// Дан массив с элементами 2, 5, 9, 15, 1, 4.
// С помощью цикла
// for и оператора
// if выведите в консоль те элементы массива, которые больше 3 - х, но меньше 10.

// let arr = [2, 5, 9, 15, 1, 4];
// for (i=0; i < arr.length; i++) {
//     if (arr[i] > 3) {
//         console.log(arr[i]);
//     }
// }

// Задача 39.7

// Дан массив с числами.Числа могут быть положительными и отрицательными.Найдите сумму положительных элементов массива.

// let arr = [-1, -2, -3, 4, 5, 6];
// let result = 0;
// for (i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         result += arr[i]
//     }

// }

// console.log(result);

// Задача 39.9


// Дан массив числами, например: [10, 20, 30, 50, 235, 3000].
// Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

// let arr = [10, 20, 30, 50, 235, 3000];
// for (i = 0; i < arr.length; i++) {

//     if (arr[i] == 30) {
//         console.log(arr[i]);
//         // break;
//     }
// }


// let arr = [10, 20, 30, 50, 235, 3000];
// // for (let i = 0; i < arr.length; i++) {
// //     document.write(`<p>${arr[i]}</p>`)
// // }
// let ssum = 0;
// for (let elem of arr) {
//     ssum += elem;

// }    console.log(ssum);

// Задача 44.2

// Дан массив с числами. Найдите сумму элементов, расположенных от начала массива до первого отрицательного числа.


// let arr = [10, 20, 30, 50, -235, 3000];
// let sum = 0;
// for (let elem of arr) {

//     if (elem < 0) {
//         break;
//     }
//     sum +=elem;
// }

// console.log(sum);

// Задача 44.3

// Дан массив с числами. Найдите позицию первого числа 3 в этом массиве (считаем, что это число обязательно есть в массиве).

// let arr = [10, 20, 30, 50, 3, 3000];
// // let sum = 0;
// for (let elem of arr) {
//     if (arr[elem] == 3) {
//         console.log(`позиция числа ` + elem);
//         break;
//     }
// }

// let arr = [1, 2, -5, 4, 3, 5];

// for (let elem of arr) {
// if (arr[elem] == 3) {
// console.log('позиция первого числа 3 = №' + elem);
// break;
// }
// }

// Задача 44.4

// Определите, сколько целых чисел, начиная с числа 1, нужно сложить, чтобы сумма получилась больше 100.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let elem of arr) {
// 	let result;

// 	if (elem % 2 == 0) {
// 		result = elem * elem;
// 	} else if (elem % 3 == 0) {
// 		result = elem * elem * elem;
// 	}

// 	console.log(result); // вынесли вывод за условие
// }
// // Проверьте, что в этом массиве есть элемент 'c'. Если есть - выведите 'да', а если нет - выведите 'нет'.
// let arr = ['a', 'b', 'c', 'd', 'e'];
// let flag = false;
// for (let elem of arr) {
// 	console.log(elem);
// 	if (elem == `c`) {
// 		flag = true;
// 		break;
// 	}
// }

// if (flag == true) {
// 	console.log(`tcnm`);
// } else {
// 	console.log(`net`);
// }

// let arr = [1, 2, 3, 4, 5];
// let flag = false;

// for (let elem of arr) {
// 	if (elem == 3) {
// 		flag = true;
// 		break;
// 	}
// }

// if (flag === true) {
// 	console.log('есть');
// } else {
// 	console.log('нет');
// }

// const chislo = 31;
// let flag = true;
// function isPrime (a) {
// 	for (i =2; i < 31; i++) {
// 		if (a%i == 0){
// 			flag = false;
// 		}
// 	}
// }
// console.log(flag);

// Задача 49.1

// Дано число num с неким начальным значением. Умножайте его на 3 столько раз,
//  пока результат умножения не станет больше 1000. Какое число получится? Посчитайте количество итераций, необходимых для этого.

// let chislo = 3;
// let counter = 1;
// while (chislo < 1000) {
// 	chislo*=3;
// 	counter++;
// }
// console.log(chislo);

// let positiveSum = arr => {
// 	let sum = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] > 0) {
// 			sum = sum + arr[i];
// 		} else if (arr[i] === undefined || arr[i] == 0) {
// 			sum = sum + 0;
// 		}
// 	}
// 	return sum;
// }

// let str = `-`;
// for (let i = 1; i < 10; i++) {
// 	str += (i + `-`);
// }
// console.log(str);

// 51.1
// let str = ``;
// for (let i = 1; i <= 30; i++){
// 	str+=i;
// }
// console.log(str);

// 52.1
// let numbers = ``;
// for (let index = 1; index <= 3; index++) {
// 	for (let j = 1; j < 4; j++) {
// 		numbers += (String(index) + j + ` `);

// 	}

// }
// console.log(numbers);

// let arr = [];
// for (let i = 1, j = 0; i <= 99; i += 2, j++) {
// 	arr[j] = i;
// }
// console.log(arr);

// let arr = [1, 2, 3, -4, -5];
// let newArr = [];
// for (let i = arr.length - 1; i >= 0; i--) {
// 	newArr.push(arr[i]);
// }

// console.log(arr.length);
// console.log(arr);
// console.log(newArr);

// let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// let arr2 = [1, 2, 3, 4, 5, 6, 7];

// let obj = {};

// for (let i = 0; i < +arr1.length; i++){
// 	obj[arr2[i]] = arr1[i];
// }

// // console.log(obj);

// Задача 57.4

// Дан объект:


// 	Запишите в новый объект те элементы, значения которых расположены в промежутке от 10 до 20.

// let obj = {
// 	'a': 12,
// 	'b': 21,
// 	'c': 13,
// 	'd': 23,
// 	'e': 17
// };
// let result = {};

// for (let key in obj) {
// 	if (obj[key] >= 10 && obj[key] <= 20) {
// 		result[key] = obj[key];
// 	}
// }
// console.log(result);

// Задача 57.5

// Дан объект:

// let obj = {
// 	1: 'пн',
// 	2: 'вт',
// 	3: 'ср',
// 	4: 'чт',
// 	5: 'пт',
// 	6: 'сб',
// 	7: 'вс'
// };

// let result = {};

// for (let key in obj) {
// 	if (key % 2 != 0) {
// 		result[key] = obj[key];
// 	}
// }
// console.log(result);
// // Запишите в новый объект дни недели, номера которых являются нечетными числами.

// Задача 57.6

// // Дан объект:

// let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
// for (let key in obj) {
// 	obj[key] = obj[key]**2;
// }
// console.log(obj);
// // Переберите этот объект циклом и возведите каждый элемент этого объекта в квадрат.

// Задача 57.7

// Самостоятельно, не подсматривая в мой код, выполните переворот какого-нибудь объекта.

// let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
// let result = {};

// for (let key in obj) {
// 	result[obj[key]] = key;

// }
// console.log(result);

// Задача 58.1

// Дан следующий объект с работниками и их зарплатами:

// 	let obj = {
// 		employee1: 100,
// 		employee2: 200,
// 		employee3: 300,
// 		employee4: 400,
// 		employee5: 500,
// 		employee6: 600,
// 		employee7: 700,
// 	};


// for (let key in obj) {
// 	if(obj[key]<= 400){
// 	obj[key]*= 1.1;
// 	}
// }
// console.log(obj);
// Увеличьте зарплату каждого работника на 10 % .

// Задача 58.3

// Даны следующие массивы:

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];
// let obj = {};
// for (let i =0; i<arr1.length; i++) {
// 	obj[arr1[i]] = arr2[i];
// }
// console.log(obj);
// С помощью этих массивов создайте новый объект, сделав его ключами элементы первого массива, а значениями - элементы второго.

// Задача 58.4

// Дан следующий объект:

// 	let obj = {
// 		1: 6,
// 		2: 7,
// 		3: 8,
// 		4: 9,
// 		5: 10
// 	};

// let sumKey = 0;
// let sumAmount = 0;


// for (let key in obj) {
// 	sumKey += Number(key);
// 	sumAmount += obj[key];
// }
// console.log(sumKey);
// console.log(sumAmount);
// console.log(sumKey / sumAmount);
// Найдите сумму ключей этого объекта и поделите ее на сумму значений.

// Задача 58.5

// Дан следующий объект:

// let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
// let arr1 = [];
// let arr2 = [];

// for(let key in obj){
// 	arr1.push(key); 
// 	arr2.push(obj[key]); 
// }
// console.log(arr1, arr2);

// Запишите ключи этого объекта в один массив, а значения - в другой.

// Дан следующий объект:

// let obj = {
// 	1: 125,
// 	2: 225,
// 	3: 128,
// 	4: 356,
// 	5: 145,
// 	6: 281,
// 	7: 452,
// };
// let arr1 = [];
// let tmpStr =``;

// for(let key in obj){
// 	tmpStr = String(obj[key]);
// 	if (tmpStr[0] == 1 ||  tmpStr[0]  == 2){
// 		arr1.push(obj[key]);
// 	}
// }
// console.log(arr1);
// Запишите в новый массив элементы, значение которых начинается с цифры 1 или цифры 2.

// Задача 58.7

// Дан следующий массив:

// let arr = ['a', 'b', 'c', 'd', 'e'];
// // Создайте из этого массива следующий объект:

// // let arr = {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'};
//  let obj  ={};
// for (let i =0; i < arr.length; i++){
// 	obj[i+1] = arr[i];
// }
// console.log(obj);


// Задача 58.8

// Дан следующий массив:

// let arr = ['a', 'b', 'c', 'd', 'e'];
// Создайте из этого массива следующий объект:

// let arr = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};

// let arr = ['a', 'b', 'c', 'd', 'e'];

//  let obj  ={};
// for (let i =0; i < arr.length; i++){
// 	obj[arr[i]] = i+1;
// }
// console.log(obj);

// Задача 59.1

// Дан следующий массив:


// Подсчитайте количество цифр 3 в этом массиве. 2-ой вариант 2 и 3

// let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let counter3 = 0;
// let counter2 = 0;
// for(let num of arr) {
//     if (num == 3){
//         counter3++;
//     } else if (num == 2) {
//         counter2++;
//     }
// }
// console.log(counter3);
// console.log(counter2);



// 59.3 Давайте подсчитаем сколько каких элементов есть в этом массиве и представим результат в виде объекта вот такого объекта:

// {a: 3, b: 2, c: 1}

// let arr = ['a', 'b', 'c', 'a', 'a', 'b'];
// let obj= {};


// for (let elem of arr){
//     if (obj[elem] === undefined){
//         obj[elem]= 1;
//     } else {
//         obj[elem]++;
//     }
// }

// console.log(obj);

// 60.1

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length - 1; i++) {
    console.log(arr[i + 1]);
}

// Задача 60.2

// Модифицируйте предыдущую задачу так, чтобы в каждой итерации цикла выводилась
//  сумма текущего и следующего элемента массива.

// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length - 1; i++) {
//     console.log(arr[i + 1] + arr[i]);
// }

// Задача 60.3

// Дан массив с числами.Переберите его циклом и в каждой
// итерации цикла выведите два предыдущих элемента массива.

// let arr = [1, 2, 3, 4, 5];

// for (let i = 2; i < arr.length; i++) {
//     console.log(arr[i - 2] + ` ` + arr[i - 1]);
// }

// Задача 60.4

// Модифицируйте предыдущую задачу так, чтобы в каждой итерации цикла
// выводилась сумма двух предыдущих элементов и текущего элемента массива.

// let arr = [1, 2, 3, 4, 5];

// for (let i = 2; i < arr.length; i++) {
//     console.log(arr[i - 2] + arr[i - 1] + arr[i]);
// }

// Задача 60.5

// Дан массив с числами.Переберите его циклом и в каждой итерации
// цикла выведите сумму предыдущего, текущего и следующего элементов массива.

// let arr = [1, 2, 3, 4, 5];

// for (let i = 2; i < arr.length - 1; i++) {
//     console.log(arr[i - 1] + arr[i] + arr[i + 1]);
// }

// let one = 0;
// let two = 1;
// let three = 2;

// for (let i = 0; i < 12; i++) {
//     let current = one + two + three;

//     one = two;
//     two = three;
//     three = current;
//     console.log(current);

// }

// let one = 0;
// let two = 1;

// for (let i = 1; i <= 10; i++) {
// 	let current = one + two;

// 	one = two;
// 	two = current;

// 	console.log(current);
// }

// Задача 62.2

// Выведите на экран следующую пирамидку:

// 1
// 333
// 55555
// 7777777
// 999999999

// let sum = ``;
// for (let i = 1; i <= 9; i += 2) {
//         sum = ``;
//     for (let k = 1; k <= i; k++) {
//         sum += i;
//     }
//     console.log(sum);
// }

// Задача 62.1

// Выведите на экран следующую пирамидку:

// xx
// xxxx
// xxxxxx
// xxxxxxxx
// xxxxxxxxxx


// let str = ``;
// for (let i = 1; i <= 5; i ++) {

//         str += `xx`;
//         console.log(str);

// }

// Задача 62.3

// Выведите на экран следующую пирамидку:

// xxxxxxxxxx
// xxxxxxxx
// xxxxxx
// xxxx
// xx

// let str = ``;
// for (let i = 5; i > 0; i--) {
//     str =``;
//     for (j = 0; j < i; j++){
//         str += `xx`

//     }
//     console.log(str);
// }

// Задача 62.4

// Выведите на экран следующую пирамидку:

// 999999999
// 88888888
// 7777777
// 666666
// 55555
// 4444
// 333
// 22
// 1

// let str = ``;
// for (let i = 9; i > 0; i--){
//     str = ``;
//     for (j = 0; j<i; j++){
//         str += i;

//     }
//     console.log(str);
// }

// let str = ``;
// for (let i = 1; i < 9; i++){
//     str = ``;
//     for (j = 0; j<=i; j++){
//         str += i;

//     }
//     console.log(str);
// }


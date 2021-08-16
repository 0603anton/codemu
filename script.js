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
// С помощью этих массивов создайте новый объект, сделав его ключами элементы первого массива, а значениями - элементы 
второго.

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

// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length - 1; i++) {
//     console.log(arr[i + 1]);
// }

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

// Задача 63.1

// С помощью цикла сформируйте следующий массив:

//     ['xx', 'xxxx', 'xxxxxx', 'xxxxxxxx', 'xxxxxxxxxx']

// let str = ``;
// let arr = [];

// for (let i = 0; i < 5; i++) {
//     str += `xx`;
//     arr.push(str);
// }
// console.log(arr);

// Задача 63.2

// С помощью цикла сформируйте следующий массив:

//     ['11111', '22222', '33333', '44444', '55555']


// let str = ``;
// let arr = [];

// for (let i = 1; i < 6; i++) {
//     str = ``;
//     for (let j = 0; j < 5; j++) {
//         str += i;
//     }

//     arr.push(str);
// }
// console.log(arr);

// Задача 64.1

// Выведите с помощью цикла столбец чисел от 1 до 100.


// for (let i = 1; i < 101; i++) {
//     console.log(i);

// }

// Задача 64.2

// Выведите с помощью цикла столбец чисел от 100 до 1.

// for (let i = 100; i > 0; i--) {
//     console.log(i);

// }

// Задача 64.3

// Выведите с помощью цикла столбец четных чисел от 1 до 100.

// for (let i = 2; i < 101; i += 2) {
//     console.log(i);

// }

// Задача 64.4

// Заполните массив 10 - ю иксами с помощью цикла.

// let str = `x`;
// let arr = [];
// for (let i = 0; i < 10; i++) {
//     arr[i] = str;

// }

// console.log(arr);

// Задача 64.5

// Заполните массив числами от 1 до 10 с помощью цикла.


// let arr = [];
// for (let i = 1; i < 11; i++) {
//     arr.push(i);

// }

// console.log(arr);

// Задача 64.6

// Дан массив с числами.С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10 - ти.

// let arr = [1, 55, 22, 32, 4, 8, 6, 65, 7];

// for (const elem of arr) {
//     if (elem > 0 && elem < 10) {
//         console.log(elem);
//     }

// }

// Задача 64.7

// Дан массив с числами.С помощью цикла проверьте, что в нем есть элемент со значением 5.

// let arr = [1, 55, 22, 32, 4, 8, 6, 65, 7];

// for (const elem of arr) {
//     if (elem === 5) {
//         console.log(elem);
//     } else {
//         console.log(`no 5`);
//     }

// }

// Задача 64.8

// Дан массив с числами.С помощью цикла найдите сумму элементов этого массива.

// let arr = [1, 55, 22, 32, 4, 8, 6, 65, 7];
// let sum = 0;
// for (const elem of arr) {
//     sum +=elem;
// }
// console.log(sum);
// Задача 64.9

// Дан массив с числами.С помощью цикла найдите сумму квадратов элементов этого массива.

// let arr = [1, 55, 22, 32, 4, 8, 6, 65, 7];
// let sum = 0;
// for (const elem of arr) {
//     sum +=elem**2;
// }
// console.log(sum);

// Задача 64.10

// Дан массив с числами.Найдите среднее арифметическое его элементов(сумма элементов, делить на количество).

// let arr = [1, 55, 22, 32, 4, 8, 6, 65, 7];
// let sum = 0;
// let result = 0;
// for (const elem of arr) {
//     sum +=elem;
//     result = sum/arr.length;
// }
// console.log(result);

// Задача 64.11

// Напишите скрипт, который будет находить факториал числа.Факториал(обозначается!)
//  - это произведение(умножение) всех целых чисел, меньше данного, и его самого.Например, 4! = 1 * 2 * 3 * 4.

// function factorial(params) {
//     let fact = 1;
//     for (let i = params; i > 0; i--) {
//         fact *= i;
//     }
//     console.log(fact);
// }

// factorial(3);

// function euclideanDistance(point1, point2) {
//     console.log(point1.lenght);
//     if (point1.lenght == 1) {

//         console.log(Math.sqrt(Math.pow(point2[0] - point1[0], 2)));
//     } else if (point1.lenght == 2) {
//         return Math.sqrt(Math.pow(point2[0] - point1[0], 2) + Math.pow(point2[1] - point1[1], 2));
//     } else if (point1.lenght == 3) {
//         return Math.sqrt(Math.pow(point2[0] - point1[0], 2) + Math.pow(point2[1] - point1[1], 2) + +Math.pow(point2[2] - point1[2], 2))
//     }
//     //   return // the distance between the two points, rounded to two decimal places
// };


// Задача 65.1

// Дан следующий массив:

//     let arr = [
//         ['a', 'b', 'c'],
//         ['d', 'e', 'f'],
//         ['g', 'h', 'i'],
//         ['j', 'k', 'l'],
//     ];
// // Выведите с его помощью элементы с текстом 'l', 'e', 'g'
// // и 'a'.

// console.log(arr[3][2], arr[1][1], arr[2][0], arr[0][0]);


// Задача 65.2

// Дан следующий массив:

//     let arr = [
//         [1, 2],
//         [3, 4],
//         [5, 6]
//     ];

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         sum += arr[i][j];
//     }
// }
// console.log(sum);
// Найдите сумму всех его элементов.


// Дан следующий массив:

//     let arr = [
//         [
//             [1, 2],
//             [3, 4],
//         ],
//         [
//             [5, 6],
//             [7, 8],
//         ],
//     ];


// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         for (let k = 0; k < arr[j].length; k++) {
//             sum += arr[i][j][k];
//         }

//     }
// }
// console.log(sum);

// Найдите сумму всех элементов приведенного массива.

// Задача 65.4

// Дан следующий массив:

//     let sum = 0;

// let arr = [
//     [1, 2, 3, [4, 5, [6, 7]]],
//     [8, [9, 10]]
// ];

// for (let elem of arr) {
//     for (let innerElem of arr[elem]) {
//         sum += elem + innerElem;
//     }

// }

// console.log(sum);
// Найдите сумму всех элементов приведенного массива.

// Задача 66.1

// Дан двухмерный массив с числами:

//     let arr = [
//         [1, 2, 3],
//         [4, 5],
//         [6]
//     ];
// let sum = 0;

// for (let elem of arr) {
//     for (let innerElem of elem) {
//         sum += innerElem;
//     }
// }
// console.log(sum);

// // }
// С помощью вложенных циклов найдите сумму элементов этого массива.

// Задача 66.2

// Дан трехмерный массив с числами:

//     let arr = [
//         [
//             [1, 2],
//             [3, 4]
//         ],
//         [
//             [5, 6],
//             [7, 8]
//         ]
//     ];

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         for (let k = 0; k < arr[j].length; k++) {
//             sum += arr[i][j][k];
//         }

//     }
// }
// console.log(sum);
// С помощью вложенных циклов найдите сумму элементов этого массива.

// Задача 67.1

// Сформируйте с помощью двух вложенных циклов следующий массив:

//     [
//         [1, 2, 3, 4, 5],
//         [1, 2, 3, 4, 5],
//         [1, 2, 3, 4, 5]
//     ]

// let arr = [];
// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//     for (let j = 0; j < 5; j++) {
//         arr[i].push(j + 1);
//     }
// }

// console.log(arr);
// Задача 67.2

// Сформируйте с помощью двух вложенных циклов следующий массив:

//     [
//         ['x', 'x', 'x', 'x'],
//         ['x', 'x', 'x', 'x'],
//         ['x', 'x', 'x', 'x']
//     ]

// let arr = [];
// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//     for (let j = 0; j < 4; j++) {
//         arr[i].push(`x`);
//     }
// }

// console.log(arr);
// Задача 67.3

// Сформируйте с помощью трех вложенных циклов следующий массив:

//     [
//         [
//             [1, 2, 3, 4, 5],
//             [1, 2, 3, 4, 5],
//         ],
//         [
//             [1, 2, 3, 4, 5],
//             [1, 2, 3, 4, 5],
//         ],
//         [
//             [1, 2, 3, 4, 5],
//             [1, 2, 3, 4, 5],
//         ],
//     ]

// let arr = [];
// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//     for (let j = 0; j < 2; j++) {
//         arr[i].push([]);
//         for (let k = 0; k < 5; k++) {
//             arr[i][j].push(k + 1);
//         }
//     }
// }

// console.log(arr);

// let arr = [];

// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//     for (let j = 1; j <= 5; j++) {
//         arr[i].push(j);
//     }
// }

// console.log(arr);
// let arr = [];

// for (let i = 0; i < 3; i++) {
//     arr[i] = [];

//     for (let j = 0; j <= 5; j++) {
//         arr[i][j] = j + 1;
//     }
// }

// console.log(arr);


// let arr = [];

// for (let i = 0; i < 3; i++) {
//     arr[i] = [];

//     for (let j = 1; j <= 5; j++) {
//         arr[i].push(j);
//     }
// }

// console.log(arr);

// let arr = [];

// for (let i = 0; i < 3; i++) {
//     arr[i] = [];

//     for (let j = 1; j <= 5; j++) {
//         arr[i].push(j);
//     }
// }

// console.log(arr);

// let arr = [];

// for (let i = 0; i < 3; i++) {
//     arr[i] = [];

//     for (let j = 0; j <= 5; j++) {
//         arr[i][j] = j;
//     }
// }

// console.log(arr);

// Задача 67.15

// Сформируйте с помощью двух вложенных циклов следующий массив:

//     [
//         [1, 2],
//         [3, 4],
//         [5, 6],
//         [7, 8]
//     ]


// let arr = [];
// let counter = 1;

// for (let i = 0; i < 4; i++) {
//     arr[i] = [];

//     for (let j = 1; j < 3; j++) {
//         arr[i].push(counter);
//         counter++;
//     }
// }

// console.log(arr);

// Задача 67.16

// Сформируйте с помощью двух вложенных циклов следующий массив:

//     [
//         [2, 4, 6],
//         [8, 10, 12],
//         [14, 16, 18],
//         [20, 22, 24]
//     ]


// let arr = [];
// let counter = 2;

// for (let i = 0; i < 4; i++) {
//     arr[i] = [];

//     for (let j = 1; j < 4; j++) {
//         arr[i].push(counter);
//         counter += 2;
//     }
// }

// console.log(arr);
// Задача 67.17

// Сформируйте с помощью трех вложенных циклов следующий трехмерный массив:

//     [
//         [
//             [1, 2],
//             [3, 4]
//         ],
//         [
//             [5, 6],
//             [7, 8]
//         ]
//     ]

// let arr = [];
// let counter = 1;

// for (let i = 0; i < 2; i++) {
//     arr[i] = [];
//     console.log(arr);
//     for (let j = 1; j < 2; j++) {
//         arr[i] = [];
//         // console.log(arr);
//         for (let k = 1; k < 2; k++) {
//             arr[i][j] = counter;
//         }
//     }
// }
// console.log(arr);


// Задача 67.17
// Сформируйте с помощью трех вложенных циклов следующий трехмерный массив: [
//     [
//         [1, 2],
//         [3, 4]
//     ],
//     [
//         [5, 6],
//         [7, 8]
//     ]
// ]
// let arr = [];
// let k = 1;

// for (let i = 0; i < 4; i++) {
//     arr[i] = [];
//     for (let j = 0; j < 2; j++) {
//         arr[i][j] = k++;

//     }
// }
// console.log(arr); //[[[1, 2], [3, 4]], [[5, 6], [7, 8]]]


// TODO

// Задача 67.17

// Сформируйте с помощью трех вложенных циклов следующий трехмерный массив:

//     [
//         [
//             [1, 2],
//             [3, 4]
//         ],
//         [
//             [5, 6],
//             [7, 8]
//         ]
//     ]

// let arr1 = [];
// let counter = 1;

// for (let i = 0; i < 1; i++) {
//     arr1[i] = [];
//     console.log(arr1);
//     for (let j = 0; j < 2; j++) {
//         arr1[i][j] = counter;
//         counter++;
//     }
// }

// console.log(arr1);


// Дан следующий объект:

//     let obj = {
//         key1: {
//             key1: 1,
//             key2: 2,
//             key3: 3,
//         },
//         key2: {
//             key1: 4,
//             key2: 5,
//             key3: 6,
//         },
//         key3: {
//             key1: 7,
//             key2: 8,
//             key3: 9,
//         },
//     }
// // Найдите сумму элементов приведенного объекта.

// let sum = 0;
// for (let elem in obj) {
//     for (let innerElem in obj[elem]) {
//         sum += obj[elem][innerElem];
//     }

// }
// console.log(sum);

// Задача 68.2

// Дан следующий объект:

//     let obj = {
//         1: {
//             1: 'a1',
//             2: 'a2',
//             3: 'a3',
//         },
//         2: {
//             1: 'b1',
//             2: 'b2',
//             3: 'b3',
//         },
//         3: {
//             1: 'c1',
//             2: 'c2',
//             3: 'c3',
//         },
//     }

// console.log(obj[`2`][`2`]);
// console.log(obj[`3`][`1`]);
// Выведите на экран элемент 'b2'
// и элемент 'c1'.

// Задача 68.3

// Дан следующий объект:

//     let obj = {
//         key1: {
//             a: 1,
//             b: 2,
//             c: {
//                 d: 3,
//                 e: 4,
//             },
//             f: 5,
//         },
//         key2: {
//             g: 6,
//             h: 7,
//         },
//     }


// let sum = 0;

// for (let elem in obj) {
//     if (typeof obj[elem] === `object`) {
//         for (let innerElem in obj[elem]) {
//             if (typeof obj[elem][innerElem] === `object`) {
//                 for (let innerInnerObject in obj[elem][innerElem]) {
//                     sum += obj[elem][innerElem][innerInnerObject];
//                 }
//             } else {
//                 sum += obj[elem][innerElem];
//             }

//         }
//     } else {
//         sum += obj[elem];
//     }
// }

// console.log(sum);
// Найдите сумму всех элементов - чисел.

// Задача 69.1

// Дан следующий объект:

//     let obj = {
//         1: {
//             1: 11,
//             2: 12,
//             3: 13,
//         },
//         2: {
//             1: 21,
//             2: 22,
//             3: 23,
//         },
//         3: {
//             1: 24,
//             2: 25,
//             3: 26,
//         },
//     }

// let sum = 0;

// for (let elem in obj) {
//     for (let innerElem in obj[elem]) {
//         sum += obj[elem][innerElem];
//     }
// }

// console.log(sum);


// Дан следующий объект с названиями месяцев:

// let months = {
//     'ru': [
//         'январь',
//         'февраль',
//         'март',
//         'апрель',
//         'май',
//         'июнь',
//         'июль',
//         'август',
//         'сентябрь',
//         'октябрь',
//         'ноябрь',
//         'декабрь',
//     ],
//     'en': [
//         'january',
//         'february',
//         'march',
//         'april',
//         'may',
//         'june',
//         'july',
//         'august',
//         'september',
//         'october',
//         'november',
//         'december',
//     ],
// };
// // Даны также следующие переменные:

// let lang = 'ru'; // может быть или 'ru' или 'en'
// let month = 5; // число от 0 до 11

// console.log(months[lang][month]);

// Задача 71.1

// Дан следующий массив работников:

//     let employees = [{
//             name: 'name1',
//             salary: 300,
//         },
//         {
//             name: 'name2',
//             salary: 400,
//         },
//         {
//             name: 'name3',
//             salary: 500,
//         },
//     ];

// console.log(employees[0][`salary`] + employees[1][`salary`]);
// Выведите на экран сумму зарплат первого и второго работников.

// Задача 71.2

// Дан следующий объект со студентами:

//     let students = {
//         'boys': ['Коля', 'Вася', 'Петя'],
//         'girls': ['Даша', 'Маша', 'Лена'],
//     };

// console.log(students[`boys`][1]);
// console.log(students[`girls`][2]);
// Выведите на экран элемент 'Вася'
// и элемент 'Лена'.

// Задача 72.1

// Дан следующий массив работников:

//     let employees = [{
//             name: 'name1',
//             salary: 300,
//         },
//         {
//             name: 'name2',
//             salary: 400,
//         },
//         {
//             name: 'name3',
//             salary: 500,
//         },
//     ];

// for (let elem of employees) {
//     console.log(elem[`name`] + ` ` + elem[`salary`]);
// }
// Выведите на экран данные каждого работника в формате имя - зарплата.

// Задача 72.2

// Дан следующий массив работников:


//     let employees = [{
//             name: 'name1',
//             salary: 300,
//         },
//         {
//             name: 'name2',
//             salary: 400,
//         },
//         {
//             name: 'name3',
//             salary: 500,
//         },
//     ];

// for (let elem of employees) {
//     sum += elem[`salary`];
// }

// console.log(sum);
// Выведите на экран сумму зарплат всех работников.

// Задача 72.3

// Дан следующий массив работников:
//     let sum = 0;
// let employees = [{
//         name: 'name1',
//         salary: 300,
//         age: 28,
//     },
//     {
//         name: 'name2',
//         salary: 400,
//         age: 29,
//     },
//     {
//         name: 'name3',
//         salary: 500,
//         age: 30,
//     },
//     {
//         name: 'name4',
//         salary: 600,
//         age: 31,
//     },
//     {
//         name: 'name5',
//         salary: 700,
//         age: 32,
//     },
// ];

// for (let elem of employees) {
//     if (elem[`age`] >= 30) {
//         sum += elem[`salary`];
//     }

// }

// console.log(sum);
// Выведите на экран сумму зарплат тех работников, возраст которых равен или более 30 лет.

// Задача 72.4

// Дан следующий массив работников, в котором поле dismissed хранит в себе информацию о том, уволен работник или нет(true - уволен):

//     let employees = [{
//             name: 'name1',
//             salary: 300,
//             dismissed: false,
//         },
//         {
//             name: 'name2',
//             salary: 400,
//             dismissed: true,
//         },
//         {
//             name: 'name3',
//             salary: 500,
//             dismissed: false,
//         },
//         {
//             name: 'name4',
//             salary: 600,
//             dismissed: true,
//         },
//         {
//             name: 'name5',
//             salary: 700,
//             dismissed: false,
//         },
//     ];
// Выведите на экран имена и зарплаты неуволенных работников.


// Задача 72.5

// Дана следующая структура с данными:

//     let data = {
//         1: [
//             'data11',
//             'data12',
//             'data13',
//         ],
//         2: [
//             'data21',
//             'data22',
//             'data23',
//         ],
//         3: [
//             'data31',
//             'data32',
//             'data33',
//             'data34',
//             'data35',
//         ],
//         4: [
//             'data41',
//             'data42',
//         ],
//     };


// for (let elem in data) {
//     for (let innerElem of data[elem])
//         console.log(innerElem);
// }
// С помощью вложенных циклов выведите на экран все строки с данными.

// Задача 72.6

// Дана следующая структура с данными:

//     let data = [{
//             1: 'data11',
//             2: 'data12',
//             3: 'data13',
//             4: 'data14',
//         },
//         {
//             1: 'data21',
//             2: 'data22',
//             3: 'data33',
//         },
//         {
//             1: 'data31',
//             2: 'data32',
//         },
//     ];


// for (let elem of data) {
//     for (let innerElem in elem)
//         console.log(elem[innerElem]);
// }
// Количество объектов в массиве и количество элементов в объекте может быть произвольным.

// С помощью вложенных циклов выведите на экран все строки с данными.

// Задача 72.7

// Дана следующая структура с данными:

//     let data = [{
//             1: [
//                 'data111',
//                 'data112',
//                 'data113',
//             ],
//             2: [
//                 'data121',
//                 'data122',
//                 'data123',
//             ],
//         },
//         {
//             1: [
//                 'data211',
//                 'data212',
//                 'data213',
//             ],
//             2: [
//                 'data221',
//                 'data222',
//                 'data223',
//                 'data224',
//             ],
//             3: [
//                 'data231',
//                 'data232',
//                 'data233',
//                 'data234',
//                 'data235',
//             ],
//         },
//         {
//             1: [
//                 'data411',
//                 'data412',
//                 'data413',
//             ],
//             2: [
//                 'data421',
//             ],
//         },
//     ];


// for (let elem of data) {
//     for (let innerElem in elem) {
//         for (let innerInnerElem of elem[innerElem]) {
//             console.log(innerInnerElem);
//         }
//     }

// }
// С помощью вложенных циклов выведите на экран все строки с данными.

// Задача 73.1

// Возведите 2 в 10 степень.

// console.log(Math.pow(2, 10));

// Задача 73.2

// Найдите квадратный корень из 245.

// console.log(Math.sqrt(245));

// Задача 73.3

// Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов.Для решения воспользуйтесь циклом
// for.


// let smt = 0;
// let sum = 0;

// let arr = [4, 2, 5, 19, 13, 0, 10];
// for (let i = 0; i < arr.length; i++) {

//     sum += Math.pow(arr[i], 3);
// }
// let result = Math.sqrt(sum)
// console.log(result);

// const renderLine = function () {
//     let iterator = 1;
//     return () => {
//         console.log(`-------------------------${iterator}--------------------------`);
//         iterator += 1;
//     };
// }();

// (function () {
//     const arr = [4, 2, 5, 19, 13, 0, 10];
//     const result = Math.sqrt(arr.reduce((previous, current) => previous + Math.pow(current, 3), 0));
//     console.log(result);
//     renderLine();
// })();

// Задача 72.4

// Дан следующий массив работников, в котором поле dismissed хранит в себе информацию о том, уволен работник или нет(true - уволен):

//     let employees = [{
//             name: 'name1',
//             salary: 300,
//             dismissed: false,
//         },
//         {
//             name: 'name2',
//             salary: 400,
//             dismissed: true,
//         },
//         {
//             name: 'name3',
//             salary: 500,
//             dismissed: false,
//         },
//         {
//             name: 'name4',
//             salary: 600,
//             dismissed: true,
//         },
//         {
//             name: 'name5',
//             salary: 700,
//             dismissed: false,
//         },
//     ];
// Выведите на экран имена и зарплаты неуволенных работников.

// Задача 73.4

// Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.

// console.log(Math.sqrt(379));
// console.log(Math.round(Math.sqrt(379)));
// console.log(Math.sqrt(379).toFixed(1));
// console.log(Math.sqrt(379).toFixed(2));

// Задача 73.5

// Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor'
// и 'ceil'.

// console.log(Math.ceil(Math.sqrt(587)));
// console.log(Math.floor(Math.sqrt(587)));

// Задача 73.6

// Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.

// console.log(Math.max(4, -2, 5, 19, -130, 0, 10));
// console.log(Math.min(4, -2, 5, 19, -130, 0, 10));

// Задача 74.3

// Дана строка 'я учу javascript!'.Вырежьте из нее слово 'учу'
// и слово 'javascript'
// тремя разными способами(через substr, substring, slice).

// let str = `я учу javascript!`;
// console.log(str.slice(2, 6));
// console.log(str.slice(-11, -1));

// console.log(str.substr(2, 3)); // начальная позиция а затем второй аргумент, сколько резать символов после этого.
// console.log(str.substr(-10, 9));

// console.log(str.substring(2, 6)); // не принмиает оторицательные
// console.log(str.substring(7, 16));

// Задача 74.4

// Дана строка 'abcde'.Определите позицию буквы 'c'
// в этой строке.

// let str = 'abcde';
// console.log(str.indexOf(`c`));

// Задача 74.5

// Дана строка.Проверьте, есть ли в этой строке символ 'a'.

// let str = 'abcde';
// console.log(str.indexOf(`a`));

// Задача 74.6

// Дана строка.Проверьте, начинается ли эта строка с символа 'a'.

// Задача 74.7

// Дана строка.Проверьте, заканчивается ли эта строка на символ 'a'.

// let str = 'abcde';
// console.log(str.indexOf(`a`));
// console.log(str.length);
// console.log((str.length - 1) == str.lastIndexOf(`e`));

// Задача 74.8

// Дана строка.Проверьте, начинается ли эта строка на http: aaaaa //.

// let str = 'aaaaaaaa.html';

// console.log(str.endsWith(`.html`));
// console.log((str.length - 5) == str.lastIndexOf(`.html`));

// Задача 74.9

// Дана строка.Проверьте, заканчивается ли эта строка на aaaaaaaa.html.


// Задача 74.12

// Дана строка '1-2-3-4-5'.С помощью метода split запишите каждое число этой строки в отдельный элемент массива.

// let str = '1-2-3-4-5';
// let arr = str.split(`-`);
// console.log(arr);

// Задача 74.13

// Дана строка '12345'.С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.

// Задача 74.14

// Дан следующий массив:

//     let arr = [1, 2, 3, 4, 5];
// console.log(arr.join(`-`));

// Задача 75.1

// Дан массив[1, 2, 3].Добавьте ему в конец элементы 4, 5, 6.

// let arr = [1, 2, 3];
// arr.push(4, 5);
// console.log(arr);

// Задача 75.2

// Дан массив[1, 2, 3].Добавьте ему в начало элементы 4, 5, 6.

// let arr = [1, 2, 3];
// arr.unshift(4, 5, 6);
// console.log(arr);

// Задача 75.3

// Дан массив['js', 'css', 'jq'].Выведите на экран первый элемент.

// let arr = ['js', 'css', 'jq'];
// console.log(arr.shift());
// console.log(arr.pop());

// Задача 75.4

// Дан массив['js', 'css', 'jq'].Выведите на экран последний элемент.

// Задача 75.5

// Дан массив[1, 2, 3, 4, 5].С помощью метода slice запишите в новый элементы[1, 2, 3].

// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.slice(0, 3);
// console.log(newArr);

// Задача 75.6

// Дан массив[1, 2, 3, 4, 5].С помощью метода slice запишите в новый элементы[4, 5].

// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.slice(3);
// console.log(newArr);

Задача 75.7

Дан массив[1, 2, 3, 4, 5].С помощью метода splice преобразуйте массив в[1, 4, 5].

let arr = [1, 2, 3, 4, 5];
let newArr = arr.splice(1, 2);
console.log(arr);

Задача 75.8

Дан массив[1, 2, 3, 4, 5].С помощью метода splice запишите в новый массив элементы[2, 3, 4].

Задача 75.9

Дан массив[1, 2, 3, 4, 5].С помощью метода splice сделайте из него массив[1, 2, 3, 'a', 'b', 'c', 4, 5].

let arr = [1, 2, 3, 4, 5];
arr.splice(1, 0, `a`, `b`);
arr.splice(6, 0, `c`);
arr.splice(8, 0, `e`);
console.log(arr);

Задача 75.10

Дан массив[1, 2, 3, 4, 5].С помощью метода splice сделайте из него массив[1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
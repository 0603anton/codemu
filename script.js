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

// Задача 75.7

// Дан массив[1, 2, 3, 4, 5].С помощью метода splice преобразуйте массив в[1, 4, 5].

// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.splice(1, 2);
// console.log(arr);

// Задача 75.8

// Дан массив[1, 2, 3, 4, 5].С помощью метода splice запишите в новый массив элементы[2, 3, 4].

// Задача 75.9

// Дан массив[1, 2, 3, 4, 5].С помощью метода splice сделайте из него массив[1, 2, 3, 'a', 'b', 'c', 4, 5].

// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 0, `a`, `b`);
// arr.splice(6, 0, `c`);
// arr.splice(8, 0, `e`);
// console.log(arr);

// Задача 75.10

// Дан массив[1, 2, 3, 4, 5].С помощью метода splice сделайте из него массив[1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].


// Давайте преобразуем первую букву этой строки в верхний регистр:

//     let str = 'london';

// let result = str.slice(0, 1).toUpperCase() + str.slice(1);
// console.log(result); // выведет 'London'
// Задача 76.1

// Преобразуйте последнюю букву строки в верхний регистр.

// let str = 'london';

// let result = str.slice(0, -1) + str.slice(-1).toUpperCase();
// console.log(result);

// Задача 76.2

// Преобразуйте первые 2 буквы строки в верхний регистр.

// let str = 'london';

// let result = str.slice(0, 2).toUpperCase() + str.slice(2);
// console.log(result);

// Задача 76.3

// Пусть дана строка, у которой первая буква в верхнем регистре, например вот такая:

//     let str = 'London';
// Преобразуйте первую букву строки в нижний регистр.



// Давайте напишем код, который преобразует первую букву каждого слова в верхний регистр.
// let str = 'word1 word2 word3';
// let arr = str.split(` `);

// for (let i = 0; i < 3; i++) {
//     arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
// }
// str = arr.join(` `);
// console.log(str);


// Задача 76.5

// Преобразуйте строку
// в 'VarTestText'.

// let str = 'var_test_text';

// let arr = str.split(`_`);
// for (let i = 0; i < 3; i++) {
//     arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
// }
// str = arr.join(``);
// console.log(str);


// Написанный код должен работать для любых строк такого типа(то есть для строк, в которых слова разделены символов подчеркивания).

// Задача 76.6

// Модифицируйте предыдущую задачу так, чтобы первая буква новой строки была в нижнем регистре.

// let str = 'var_test_text';

// let words = str.split('_');

// console.log(words);

// for (let i = 1; i < words.length; i++) {
//     words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
// }
// let res = words.join('');
// console.log(res);

// Задача 77.1

// Сделайте функцию, выводящую на экран ваше имя.

// function func() {
//     console.log(`anton`);
// }

// func();

// Задача 77.2

// Сделайте функцию, выводящую на экран сумму чисел от 1 до 100.

// let sum = 0;

// function sumOfnum(firstNum, secondNum) {
//     for (let i = firstNum; i <= secondNum; i++) {
//         sum += i;
//     }
//     return sum;
// }

// console.log(sumOfnum(1, 100));

// Задача 78.1

// Сделайте функцию, которая параметром принимает число и выводит на экран куб этого числа.

// function exponentiation(num) {
//     console.log(Math.pow(num, 2));
// }

// exponentiation(2);

// Задача 78.2

// Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное.В первом случае пусть функция выводит на экран текст '+++', а во втором '---'.

// function plusOrMinus(params) {
//     if (params < 0) {
//         console.log(`---`);
//     } else if (params == 0) {
//         console.log(`ZERO`);
//     } else {
//         console.log(`+++`);
//     }
// }

// plusOrMinus(0);

// Задача 79.3

// Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, округляющая дробь до трех знаков в дробной части:

//     function sqrt(num) {
//         return Math.sqrt(num);
//     }

// function round(num) {
//     return num.toFixed(3);
// }

// let result = round(sqrt(2));
// console.log(result);


// Задача 79.4

// Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, возвращающая сумму трех чисел:

//     function sqrt(num) {
//         return Math.sqrt(num);
//     }

// function sum(num1, num2, num3) {
//     return num1 + num2 + num3;
// }

// function round(num) {
//     return num.toFixed(3);
// }

// let result = round(sum(sqrt(2), sqrt(3), sqrt(4)));

// console.log(result);
// С помощью этих функций найдите сумму корней чисел 2, 3 и 4 и запишите ее в переменную result.

// Задача 79.5

// Пусть у вас есть функция, округляющая дробь до трех знаков в дробной части:

//     function round(num) {
//         return num.toFixed(3);
//     }
// С помощью этой функции модифицируйте предыдущую задачу так, чтобы в переменную result записывалась дробь, округленная до 3 - х знаков в дробной части.

// Задача 79.10

// Напишите функцию, которая параметром будет принимать число и делить его на 2 столько раз, пока результат не станет меньше 10.
// Пусть функция возвращает количество итераций, которое потребовалось для достижения результата.

// let counter = 0;

// function countTwo(num) {
//     for (let i = num; i >= 10; i /= 2) {
//         counter++;
//     }
//     console.log(counter);
//     // return counter;

// }

// countTwo(500);

// Задача 80.1

// let arr1 = [1, 2, 3, 4];
// let arr2 = [5, 6, 7, 8];

// function sumPow(arr) {
//     let sum = 0;

//     for (let elem of arr) {
//         sum += elem;
//     }
//     console.log(sum);
//     return sum;

// }

// sumPow(arr1);

// Напишите функцию, которая будет находить сумму квадратов элементов массива.

// let arr1 = [1, 2, 3, 4];
// let arr2 = [5, 6, 7, 8];

// function sumPow(arr) {
//     let sum = 0;

//     for (let elem of arr) {
//         sum += Math.pow(elem, 2);
//     }
//     console.log(sum);
//     return sum;

// }

// sumPow(arr1);


// Задача 80.2

// Сделайте функцию getDigitsSum(digit - это цифра), которая параметром будет принимать целое число и возвращать сумму его цифр.

// function getDigitsSum(num) {
//     let arr = String(num).split(``);
//     let sum = 0;
//     console.log(arr);

//     for (let elem of arr) {
//         sum += Number(elem);
//     }
//     console.log(sum);
//     return sum;
// }

// getDigitsSum(12312311);

// Задача 80.3

// Реализуйте функцию getDivisors, которая параметром будет принимать число и возвращать массив его делителей, то есть чисел, на которое
// делится наше число.К примеру, если мы передадим число 24 - мы должны получить массив[1, 2, 3, 4, 6, 8, 12, 24].

// function getDivisors(num) {
//     let arr = [];
//     for (let i = 1; i <= num; i++) {
//         if (num % i == 0) {
//             arr.push(i);
//         }
//     }
//     console.log(arr);
//     return arr;
// }

// getDivisors(21);
// Задача 80.4

// Сделайте функцию reverseStr, которая параметром будет принимать строку и переворачивать ее символы в обратном порядке.
// Решите задачу без цикла, используя комбинацию стандартных функций JavaScript.

// function reverseStr(str) {
//     str = str.split(``).reverse().join();
//     console.log(str);
//     return str;
// }

// reverseStr(`abc`);
// Задача 80.5

// Сделайте функцию delElem, которая параметрами будет принимать значение и массив и удалять
// из массива все элементы с таким значением.
// let arr1 = [1, 2, 3, 4];
// let arr2 = [];

// function delElem(params, arr) {
//     for (let elem of arr) {
//         if (params != elem) {
//             arr2.push(elem);
//         }
//     }

//     return arr2;
// }
// console.log(delElem(1, arr1));

// Задача 80.6

// Сделайте функцию, заполняющую массив целыми числами от 1 до заданного.

// let arr = [];

// function addNumbers(num) {
//     for (let i = 1; i <= num; i++) {
//         arr.push(i);
//     }
//     console.log(arr);
// }

// addNumbers(5);




// Пример работы такой функции:

//     console.log(func(5)); // выведет [1, 2, 3, 4, 5]
// Задача 80.7

// Сделайте функцию, заполняющую массив целыми числами от начального до конечного заданных чисел.

// Пример работы такой функции:

//     let arr = [];

// function addNumbers(numStart, numEnd) {
//     for (let i = numStart; i <= numEnd; i++) {
//         arr.push(i);
//     }
//     console.log(arr);
// }

// addNumbers(5, 15);

// console.log(func(3, 7)); // выведет [3, 4, 5, 6, 7]

// Задача 81.1

// Сделайте функцию, которая параметром будет принимать массив с числами, и проверять, что все элементы
// в этом массиве являются четными числами.

// let arr = [1, -2, 3, 4, -5];

// function evenNum(arr) {
//     for (let elem of arr) {
//         if (elem % 2 != 0) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(evenNum(arr));
// Задача 81.2

// Сделайте функцию, которая параметром будет принимать число и проверять, что все цифры это числа являются нечетными.

// function oddNumber(num) {
//     let arr = String(num).split(``);
//     console.log(arr);
//     for (let elem of arr) {
//         if (elem % 2 == 0) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(oddNumber(111));


// Задача 81.3

// Сделайте функцию, которая параметром будет принимать массив и проверять,
// есть ли в этом массиве два одинаковых элемента подряд.

// function similarNum(num) {
//     let arr = String(num).split(``);
//     console.log(arr);
//     for (let i = 0; i <= arr.length; i++) {
//         if (+arr[i] == +arr[i + 1]) {
//             return true;
//         }
//     }
//     return false;
// }

// console.log(similarNum(2312312));

// Задача 82.1

// Дана следующая функция:

//     function func(a, b) {
//         if (a == b) {
//             return true;
//         } else {
//             return false;
//         }
//     }

// function func(a, b) {
//     return a === b;
// }

// func(1, 1);


// function func(a, b) {
//     return a == b;
// }

// console.log(func(1, 2));

// Перепишите ее код в сокращенной форме согласно изученной теории.

// Задача 82.2

// Дана следующая функция:

//     function func(a, b) {
//         if (a != b) {
//             return true;
//         } else {
//             return false;
//         }
//     }

// function func(a, b) {
//     return a != b;
// }

// console.log(func(1, 2));
// Перепишите ее код в сокращенной форме согласно изученной теории.

// Задача 82.3

// Дана следующая функция:

//     function func(a, b) {
//         if (a + b >= 10) {
//             return true;
//         } else {
//             return false;
//         }
//     }

// function func(a, b) {
//     return a + b >= 10;
// }

// console.log(func(1, 2));
// Перепишите ее код в сокращенной форме согласно изученной теории.

// Задача 82.4

// Дана следующая функция:

//     function func(num) {
//         if (num >= 0) {
//             return true;
//         } else {
//             return false;
//         }
//     }


// Перепишите ее код в сокращенной форме согласно изученной теории.

// Задача 83.1

// Дана функция, проверяющая числа на простоту:

// function isPrime(num) {
//     for (let i = 2; i < num; i++) {
//         if (num % i == 0) {
//             return false;
//         }
//     }

//     return true;
// }


// for (let i = 1; i <= 100; i++) {
//     console.log(isPrime(i));
//     console.log(i);
// }



// С помощью приведенной функции найдите все простые числа в интервале от 1 до 100.

// Задача 83.2

// Дана функция getDigitsSum, которая параметром принимает целое число и возвращает сумму его цифр:

//     function getDigitsSum(num) {
//         let sum = 0;
//         let digits = String(num).split('');

//         for (let digit of digits) {
//             sum += Number(digit);
//         }

//         return sum;
//     }


// for (let i = 1; i <= 2030; i++) {
//     if (getDigitsSum(i) == 13) {
//         console.log(i);
//     }
// }

// С помощью приведенной функции getDigitsSum найдите все года от 1 до 2030, сумма цифр которых равна 13.

// Задача 83.3

// Пусть дан какой - то массив с числами, например, такой:

//     [123, 456, 789]
// Давайте сделаем так, чтобы цифры в каждом элементе массива были в обратном порядке.То есть из нашего массива сделаем следующий:

//     [321, 654, 987]
// Некий программист уже написал код, реализующий описанную задачу:

//     let nums = [123, 456, 789];

// function reverseArr(nums) {
//     let result = [];
//     for (let num of nums) {
//         result.push(String(num).split('').reverse().join(''));
//     }
//     return result;
// }

// console.log(reverseArr(nums));



// console.log(result); // выведет [321, 654, 987]
// Переделайте приведенный код так, чтобы переворот числа выполняла отдельная функция.

// Задача 83.4

// Даны два числа.Необходимо проверить, равна ли сумма цифр первого числа сумме цифр второго числа.

// Некий программист уже написал решение задачи, вот оно:

//     let num1 = 234;
// let num2 = 531;

// function sumOfDigits1(num) {
//     let digits = String(num).split('');
//     let digitsSum = 0;
//     for (let digit of digits) {
//         digitsSum += Number(digit);
//     }
//     return digitsSum;
// }

// function digitCompare(num, num1) {
//     if (num == num1) {
//         console.log('суммы цифр совпадают');
//     } else {
//         console.log('суммы цифр не совпадают');
//     }
// }

// digitCompare(sumOfDigits1(num1), sumOfDigits1(num2));


// В чем недостатки приведенного кода ? Переделайте код так, чтобы он был более удачным.

// Задача 83.5

// Дан массив с числами.Необходимо перебрать этот массив с числами и вывести в консоль
// нетривиальные делители этих чисел(то есть исключая число 1 и само число).

// Некий программист уже написал решение задачи:

//     let nums = [12, 24, 35, 14];

// for (let num of nums) {
//     console.log(num + ': ' + getDivisors(num).join(', '));
// }

// function getDivisors(num) {
//     let result = [];

//     for (let i = 2; i < num; i++) {
//         if (num % i == 0) {
//             result.push(i);
//         }
//     }

//     return result;
// }

// console.log(getDivisors(321));

// Программист не тестировал отдельно работу функции getDivisors, а написал весь код сразу и затем запустил его.
// При запуске оказалось, что код работает как - то не так.
// Видимо, в функции getDivisors была допущена какая - то ошибка.

// Найдите и исправьте ошибку.Потестируйте отдельно функцию getDivisors, чтобы убедиться, что она работает корректно после вашей правки.
// После того, как вы убедитесь в корректности работы функции - проверьте полный код решения задачи.


// Задача 84.1

// Дана функция getSum, находящая сумму элементов переданного массива:

//     function getSum(arr) {
//         let sum = 0;

//         for (let elem of arr) {
//             sum += Number(elem);
//         }

//         return sum;
//     }
// // Дана функция getDigits, возвращающая массив цифр числа:

// function getDigits(num) {
//     return String(num).split('');
// }
// // Используя комбинацию приведенных функций найдите сумму цифр числа 12345.

// console.log(getSum(getDigits(12345)));


// console.log(getAvg(getDivisors(24)));

// // Нахождение среднего арифметического:
// function getAvg(arr) {
//     let sum = 0;

//     for (let elem of arr) {
//         sum += elem;
//     }

//     return sum / arr.length;
// }

// // Нахождение массива делителей числа:
// function getDivisors(num) {
//     let result = [];

//     for (let i = 2; i < num; i++) {
//         if (num % i == 0) {
//             result.push(i);
//         }
//     }
//     return result;
// }

// Пусть у нас дан массив с числами.Решим следующую задачу:
//     запишем в новый массив только те элементы, сумма цифр в которых от 1 до 9.

// let arr = [12, 19, 28, 13, 14, 345];
// let result = [];

// function getDigits(num) {
//     let arr = String(num).split(``);
//     return arr;
// }

// function getSum(arr) {
//     let sum = 0;
//     for (let elem of arr) {
//         sum += Number(elem);
//     }
//     return sum;
// }

// function inRange(num) {
//     let someNum = getSum(getDigits(num));
//     return someNum >= 1 && someNum <= 9;
// }



// for (let elem of arr) {
//     if (inRange(elem)) {
//         result.push(elem);
//     }
// }

// console.log(result);

// Задача 86.1

// Реализуйте функцию getOwnDivisors.Потестируйте ее работу.

// function getOwnDivisors(num) {
//     let divisors = [];
//     for (let i = 1; i < num; i++) {
//         if (num % i == 0) {
//             divisors.push(i);
//         }
//     }
//     return divisors;
// }




// // Задача 86.2

// // Реализуйте функцию getSum.Потестируйте ее работу.


// function getSum(arr) {
//     let sum = 0;
//     for (let elem of arr) {
//         sum += elem;
//     }
//     return sum;
// }

// // console.log(getSum(getOwnDivisors(220)));

// // Задача 86.3

// // Проверьте работу функции isFreindly.

// function isFreindly(num1, num2) {
//     let sum1 = getSum(getOwnDivisors(num1));
//     let sum2 = getSum(getOwnDivisors(num2));

//     if (sum1 == num2 && sum2 == num1) {
//         return true;
//     } else {
//         return false;
//     }
// }

// // console.log(isFreindly(220, 284));
// function findApair(num1, num2) {
//     let result = [];
//     for (let i = num1; i <= num2; i++) {
//         for (let j = num1; j <= num2; j++) {
//             if (isFreindly(i, j)) {
//                 let tempArr = [i, j];
//                 result.push(tempArr);
//             }
//         }

//     }
//     return result;
// }


// console.log(findApair(1, 2000));
// Задача 86.4

// Сделайте функцию getFreindly, которая будет находить пары дружественных чисел в заданном промежутке и
// возвращать их в виде двухмерного массива вида[[220, 284], [1184, 1210], [2620, 2924]].
// С помощью созданной функции найдите все пары дружественных чисел на промежутке от 1 до 9000.



// let alldivisors = []; //массив делителей всех чисел
// function getOwnDivisors(num) {
//     let divisors = [1];
//     for (let i = 2; i < num; i++) {
//         if (num % i == 0) divisors.push(i);
//     }
//     alldivisors[num] = divisors; //под индексом num будет храниться массив делителей num
// };

// function getSum(arr) {
//     let sum = 0;
//     arr.forEach(el => sum += el);
//     return sum;
// };

// function isFrendly(num1, num2) {
//     let check1 = getSum(alldivisors[num1]) == num2; //обращение к элементу массива, который хранит делители числа num1
//     let check2 = getSum(alldivisors[num2]) == num1;
//     return check1 && check2 && num1 != num2;
// }

// // Пишем майнер дружественных чисел
// function getFriendly(numStart, numEnd) {
//     let res = [];
//     for (let i = numStart; i <= numEnd; i++) {
//         getOwnDivisors(i); //заполнение массива
//     }
//     for (let i = numStart; i <= numEnd; i++) {
//         for (let j = i; j <= numEnd; j++) {
//             if (isFrendly(i, j)) {
//                 res.push([i, j]);
//                 console.log([i, j]);
//             }
//         }
//     }
//     return res;
// }

// // Запускаем майнер. По условию задачи
// // искать от 1 до 9000, но я не дождался...
// console.log(getFriendly(1, 9000));

// Задача 86.5

// Совершенное число - целое число, равное сумме всех своих собственных
// делителей(то есть всех положительных делителей, отличных от самого числа).
// Сделайте функцию getPerfect, которая будет находить совершенные числа в заданном диапазоне.
// Проверьте работу функции в промежутке от 1 до 1000.


// function getDivisors(params) {
//     let arr = [];
//     for (let i = 1; i < params; i++) {
//         if (params % i == 0) {
//             arr.push(i);
//         }
//     }
//     return arr;
// }

// function getSum(arr) {
//     let sum = 0;
//     for (let elem of arr) {
//         sum += elem;
//     }
//     return sum;
// };


// function getPerf(param) {
//     let result = [];
//     for (let i = param; i <= 9000; i++) {
//         if (i == getSum(getDivisors(i))) {
//             result.push(i);
//         }
//     }
//     return result;
// }

// console.log(getPerf(1));


// Задача 86.6

// Сделайте функцию getSimpleDivisors, которая будет принимать параметром
// целое число и находить все делители этого числа, являющиеся простыми числами.

// function getDivisors(params) {
//     let arr = [];
//     for (let i = 1; i < params; i++) {
//         if (params % i == 0) {
//             arr.push(i);
//         }
//     }
//     return arr;
// };

// function isPrime(num) {

//     for (let i = 2; i < num; i++) {
//         if (num % i == 0) {
//             return false;
//         }


//     }
//     return true;
// }





// function getPrimeDivisors(params) {
//     let result = [];
//     for (let elem of getDivisors(params)) {
//         if (isPrime(elem)) {
//             result.push(elem);
//         }
//     }
//     return result;
// }

// console.log(getPrimeDivisors(333));

// Пусть у нас даны два массива:

let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4, 5];
// // Можно заметить, что числа 2 и 3 присутствуют и в одном, и во втором массиве.Такие общие элементы называются пересечением массивов.

// // Давайте напишем функцию getInt, которая будет находить пересечение массивов и возвращать пересечение этих массивов.

// function getInt(arr1, arr2) {
//     let result = [];
//     for (let elem of arr1) {
//         if (inArray(elem, arr2)) {
//             result.push(elem);
//         }
//     }
//     return result;
// }

// function inArray(elem, arr) {
//     return arr.indexOf(elem) !== -1;
// }

// console.log(getInt(arr1, arr2));

// Можно заметить, что числа 1, 4 и 5 не присутствуют одновременно в обоих массивах.Такие элементы называются разностью массивов.

// Давайте функцию getDiff, которая будет находить разность двух массивов.

// Я вижу следующий алгоритм: нужно взять первый массив, и проверить каждый его элемент на то, есть ли он во втором массиве.Если элемента нету во втором массиве - то его берем в результат.

// Затем такую же манипуляцию следует проделать и со вторым массивом.


// function getDiff(arr1, arr2) {
//     let diff1 = getDiffone(arr1, arr2);
//     let diff2 = getDiffone(arr2, arr1);

//     return [].concat(diff1, diff2);
// }

// function getDiffone(arr1, arr2) {
//     let result = [];
//     for (let elem of arr1) {
//         if (!inArray(elem, arr2)) {
//             result.push(elem);
//         }
//     }
//     return result;
// }


// function inArray(elem, arr) {
//     return arr.indexOf(elem) !== -1;
// }

// console.log(getDiff([1, 2, 3], [2, 3, 4, 5])); // выведет [1, 4, 5]

// Задача 89.1

// Реализуйте функцию getGreatestCommonDivisor, которая параметрами будет принимать два числа и возвращать НОД этих двух чисел.

// При решении задачи старайтесь использовать вспомогательные функции, в том числе полученные нами ранее в теоретической части.

// Обязательно тестируйте каждую вспомогательную функцию перед использованием.

// function getGreatestCommonDivisor(num1, num2) {

//     let commonDiv = getCommonDivisors(getDivisors(num1), getDivisors(num2));

//     return Math.max.apply(null, commonDiv);
// }

// function getDivisors(num) {
//     let result = [];
//     for (let i = 1; i <= num; i++) {
//         if (num % i == 0) {
//             result.push(i);
//         }
//     }
//     return result;
// }

// // console.log(getDivisors(6));

// function inArray(num, arr) {
//     return arr.indexOf(num) !== -1;
// }

// // console.log(inArray(1, [1, 2, 3]));

// function getCommonDivisors(arr1, arr2) {
//     let result = [];
//     for (let elem of arr1) {
//         if (inArray(elem, arr2)) {
//             result.push(elem);
//         }
//     }
//     return result;
// }

// // console.log(getCommonDivisors([1, 3, 5], [2, 3, 6]));

// console.log(getGreatestCommonDivisor(24, 36));

// Задача 89.2

// Положительные целые числа, не имеющие общих делителей, кроме тривиальной единицы, называются взаимно простыми.

// Говоря другими словами, два числа можно назвать взаимно простыми, если их НОД равен единице.

// Напишите функцию, которая параметрами будет принимать два числа и проверять - взаимно простые они или нет.

// function getGreatestCommonDivisor(num1, num2) {

//     let commonDiv = getCommonDivisors(getDivisors(num1), getDivisors(num2));

//     let nod = Math.max.apply(null, commonDiv);

//     console.log(`Числа ${num1} и ${num2} взаимнопростые:`);
//     return nod == 1;
// }

// function getDivisors(num) {
//     let result = [];
//     for (let i = 1; i <= num; i++) {
//         if (num % i == 0) {
//             result.push(i);
//         }
//     }
//     return result;
// }

// // console.log(getDivisors(6));

// function inArray(num, arr) {
//     return arr.indexOf(num) !== -1;
// }

// // console.log(inArray(1, [1, 2, 3]));

// function getCommonDivisors(arr1, arr2) {
//     let result = [];
//     for (let elem of arr1) {
//         if (inArray(elem, arr2)) {
//             result.push(elem);
//         }
//     }
//     return result;
// }

// // console.log(getCommonDivisors([1, 3, 5], [2, 3, 6]));

// console.log(getGreatestCommonDivisor(2, 3));

// Задача 90.1

// Самостоятельно, не подсматривая в мой код, реализуйте описанную функцию.При решении задачи код функции
// getRandomInt скопируйте из учебника.


// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function getRandomElem(arr) {
//     return arr[getRandomInt(0, arr.length - 1)];
// }

// arr = [1, 5, 7];

// // console.log(getRandomElem(arr));


// // Задача 90.2

// // Используя созданную функцию, найдите сумму трех случайных элементов из массива.

// function sumOfRandomElem(arr) {
//     let sum = 0;
//     for (let i = 0; i < 3; i++) {
//         sum += getRandomElem(arr);
//     }
//     return sum;
// }

// console.log(sumOfRandomElem(arr));

// Задача 91.1

// Самостоятельно, не подсматривая в мой код, реализуйте описанную функцию.При решении задачи код функции getRandomInt скопируйте из учебника.

// Реализуем функцию shuffle, параметром принимающую массив и перемешивающую его элементы в случайном порядке.

// function shuffle(arr) {
//     let result = [];

//     while (arr.length > 0) {
//         let random = getRandomInt(0, arr.length - 1);
//         let elem = arr.splice(random, 1)[0];
//         result.push(elem);
//     }
//     // console.log(result);
//     return result;

// }



// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
}

// console.log(shuffle([1, 2, 3, 4, 5]));

// Задача 91.2

// Сделайте функцию range принимающую параметрами 2 целых числа - начало и конец диапазона, и возвращающую массив,
//     заполненный целыми числами из этого диапазона.

// function range(num, num1) {
//     let result = [];
//     for (let i = num; i <= num1; i++) {
//         result.push(i);
//     }
//     return result;
// }

// console.log(range(1, 10));


// Задача 91.3

// Сделайте функцию rangeRand, возвращающую массив, заполненный случайными целыми числами из заданного диапазона.
// При этом числа не должны повторяться.Для решения задачи используйте комбинацию функций range и shuffle.

// function rangeRand(num, num1) {
//     return shuffle(range(num, num1));
// }

// console.log(rangeRand(1, 15));

// Задача 92.1

// Самостоятельно, не подсматривая в мой код, реализуйте описанную функцию.
// При решении задачи код функций getRandomInt и shuffle скопируйте из учебника.
// Давайте теперь реализуем функцию randoms, возвращающую заданное количество случайных элементов из массива.
// Пусть первым параметром функция принимает массив, а вторым - количество элементов, которое следует вернуть.


// function randoms(arr, numOfElem) {
//     return cutFirstElem(shuffle(arr), numOfElem);
// };

// function shuffle(arr) {
//     let result = [];

//     while (arr.length > 0) {
//         let random = getRandomInt(0, arr.length - 1);
//         let elem = arr.splice(random, 1)[0];
//         result.push(elem);
//     }
//     // console.log(result);
//     return result;

// }

// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function cutFirstElem(arr, num) {
//     return arr.slice(0, num);
// }

// console.log(randoms([1, 2, 3, 4, 5], 3));

// let a = [9, 7, 5, 3, 1, 2, 4, 6, 8];
// let a = [2, 1];

// function bubblesortOnce(a) {
//     // TODO
//     let b = [...a]
//     for (let i = 0; i < b.length - 1; i++) {
//         if (b[i] > b[i + 1]) {
//             let temp = b.slice(b.indexOf(b[i]), i + 2).reverse();
//             // console.log(temp);
//             b.splice(b.indexOf(b[i]), 2, temp[0], temp[1]);
//         }

//     }
//     return b;

// }

// console.log(bubblesortOnce(a));

// let b = [...a]

// for (let i = 0; i < b.length - 1; i++) {
//     if (b[i] > b[i + 1]) {
//         let temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//     }
// }



// упрощённая версия

// let a = [9, 7, 5, 3, 1, 2, 4, 6, 8];


// function bubblesortOnce(a) {
//     // TODO
//     let b = [...a]

//     for (let i = 0; i < b.length - 1; i++) {
//         if (b[i] > b[i + 1]) {
//             // let temp = b[i];
//             // b[i] = b[i + 1];
//             // b[i + 1] = temp;
//             [b[i], b[i + 1]] = [b[i + 1], b[i]]

//         }
//     }
//     return b;

// }

// console.log(bubblesortOnce(a));

// пузырьковая сортировка базовый вариант

// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = 0; j < arr.length; j++) {

//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

//             }
//         }

//     }
//     return arr;
// }

// console.log(bubbleSort([3, 10, 4, 3]));

// Пусть нам нужно вывести на экран все возможные счастливые автобусные билеты.Билет называется счастливым, 
// если сумма первых трех цифр билета равна сумме вторых трех цифр(будем рассматривать только билеты, в номере которых 6 цифр).


function getLuckyTickets() {
    let result = [];

    for (let i = 1001; i <= 999999; i++) {
        if (isLucky(i)) {
            result.push(i);
        }
    }

    return result;
}

function isLucky(num) {
    let str = normilize(num);

    let sum1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
    let sum2 = Number(str[3]) + Number(str[4]) + Number(str[5]);

    return sum1 == sum2;
}

function normilize(num) {
    let str = String(num);

    if (str.length == 4) {
        str = `00` + str;
    } else if (str.length == 5) {
        str = `0` + str;
    }
    return str;
}

// Задача 94.1

// Реализуйте описанную функцию.Потестируйте ее работу.

function normilize(num) {
    let str = String(num);

    if (str.length == 4) {
        str = `00` + str;
    } else if (str.length == 5) {
        str = `0` + str;
    }
    return str;
}

function isLucky(numStr) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < numStr.length / 2; i++) {
        sum1 += Number(numStr[i]);
    }
    // console.log(sum1);
    for (let i = numStr.length / 2; i < numStr.length; i++) {
        sum2 += Number(numStr[i]);
    }
    // console.log(sum2);
    return sum1 == sum2;
}

// console.log(isLucky('1203'));
// console.log(isLucky('012003'));
// console.log(isLucky('123006'));
// console.log(isLucky('33'));

// Объясните работу следующей строки функции normalizeNum:

//     return formStr('0', digitsAmount - str.length) + str;
/*Функция с 2 парметрами. 1 параметр символ который эта функция будет добавлять к строке
   , второй параметр это выражение которое выщитывает необходимое количество символов котоыре надо 
   добавить. а затем к тим символам добавляем исходую строку  */

// function formStr(data, length) {
//     let str = ``;
//     for (let i = 0; i <= length; i++) {
//         str += data;
//     }
//     return str;
// }

// console.log(formStr('0', 10));

function isLucky(numStr) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < numStr.length / 2; i++) {
        sum1 += Number(numStr[i]);
    }
    // console.log(sum1);
    for (let i = numStr.length / 2; i < numStr.length; i++) {
        sum2 += Number(numStr[i]);
    }
    // console.log(sum2);
    return sum1 == sum2;
}


function normalizeNum(num, digitsAmount) {
    let str = String(num);
    return formStr('0', digitsAmount - str.length) + str;
}


function formStr(data, length) {
    let str = ``;
    for (let i = 0; i < length; i++) {
        str += data;
    }
    return str;
}



// console.log(normalizeNum(123, 6)); // выведет '000123'
// console.log(normalizeNum(1234, 6)); // выведет '001234'
// console.log(normalizeNum(12345, 6)); // выведет '012345'
// console.log(normalizeNum(123456, 6)); // выведет '123456'

// console.log(isLucky(normalizeNum(1203, 4))); // выведет true
// console.log(isLucky(normalizeNum(312, 4))); // выведет true

// console.log(isLucky(normalizeNum(6123, 6))); // выведет true
// console.log(isLucky(normalizeNum(600123, 6))); // выведет true

// console.log(isLucky(normalizeNum(700123, 6))); // выведет false
// console.log(isLucky(normalizeNum(070123, 6))); // выведет false


// Задача 94.6

// Сделайте функцию getLast, которая параметром будет принимать число цифр в билете и возвращать число,
// соответствующее концу цикла.Потестируйте эту функцию на различных значениях.


108

Задача 1 js.Pm.FA.FO .1

Сделайте объект с тремя функциями.Пусть первая возвращает через
return число 1, вторая - число 2, третья - число 3. С помощью созданных функций выведите на экран сумму возвращаемых чисел.

Задача 2 js.Pm.FA.FO .2

Переберите созданный объект циклом и выведите результаты работы функций на экран.

let obj = {
    func1: function () {
        return 1;
    },
    func2: function () {
        return 2;
    },
    func3: function () {
        return 3;
    },
};

for (let elem in obj) {
    console.log(obj[elem]());
}

Задача 3 js.Pm.FA.FO .3

Сделайте объект с тремя функциями, каждая из которых будет принимать параметром массив с числами.Сделайте так,
    чтобы первая функция возвращала сумму элементов массива, вторая функция - сумму квадратов, а третья - сумму кубов.

let obj = {
    func1: function (arr) {
        let sum = 0;
        for (let elem of arr) {
            sum += elem;
        }
        return sum;
    },
    func2: function (arr) {
        let sum = 0;
        for (let elem of arr) {
            sum += Math.pow(elem, 2);
        }
        return sum;
    },
    func3: function (arr) {
        let sum = 0;
        for (let elem of arr) {
            sum += Math.pow(elem, 3);
        }
        return sum;
    },
};

for (let elem in obj) {
    console.log(obj[elem]([1, 2, 3]));
}


109


Задача 1 js.Pm.FA.PFAP .1

Сделайте функцию test, параметрами принимающую 3 функции.Передайте в нее первым параметром функцию, возвращающую 1, вторым - функцию, возвращающую 2,
    третьим - функцию, возвращающую 3. Выведите на экран сумму результатов функций.

test(
    function () {
        return 1;
    },
    function () {
        return 2;
    },
    function () {
        return 3;
    }
);

function test(func1, func2, func3) {
    return func1() + func2() + func3(); // выведет 6
}

// Задача 2 js.Pm.FA.PFAP .2

// Сделайте функцию test, параметрами принимающую 3 функции и возвращающую сумму результатов переданных функций.

// Задача 3 js.Pm.FA.PFAP .3

// Сделайте 3 функции, объявив их как Function Declaration и дав им имена func1, func2 и func3.Пусть первая функция возвращает 1, вторая - 2, а третья - 3. Передайте эти функции параметром в функцию test из предыдущей задачи.

function func1() {
    return 1;
}

function func2() {
    return 2;
}

function func3() {
    return 3;
}



// Задача 4 js.Pm.FA.PFAP .4

// Модифицируйте предыдущую задачу так, чтобы функции были объявлены как Function Expression с теми же именами.

let func1 = function () {
    return 1;
}
let func2 = function () {
    return 1;
}
let func3 = function () {
    return 1;
}

function test(func1, func2, func3) {
    return (func1() + func2() + func3()); // выведет 6
}

console.log(test(func1, func2, func3));


function test(func) {
    alert(func(3));
}

test(function (num) {
    return Math.pow(num, 3);
});


let func = function (num, num1) {
    return num + num1;
}
// console.log(func(1, 2));
// function func(num) {
//     return num ** 3;
// }

function test(func) {
    console.log(func);
    console.log(func(2, 3));
}

test(func);


Задача 9 js.Pm.FA.PFAP .9

Пусть функция test первым параметром принимает число, а вторым и третьим параметрами - функции, также параметром принимающие числа.

Пусть функция test возвращает сумму результатов переданных функций:

    function test(num, func1, func2) {
        return func1(num) + func2(num);
    }
Вызовите функцию test, первым параметром передав число 3, вторым параметром функцию,
возводящую число в квадрат, а третьим - функцию, возводящую число в куб.Выведите результат работы на экран.

function test(num, func1, func2) {
    return func1(num) + func2(num);
}

function func1(num) {
    return num ** 2;
}

function func2(num) {
    return num ** 3;
}

console.log(test(2, func1, func2));

Давайте сделаем функцию, которая параметром будет принимать массив, а вторым параметром - функцию.Переданная функция должна будет применится к каждому элементу массива:

    function test(arr, func) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = func(arr[i]);
        }
        return arr;
    }

let result = test([1, 2, 3], function (num) {
    return num * num;
});

console.log(result); // выведет [1, 4, 9]


Задача 11 js.Pm.FA.PFAP .11

Вызовите созданную вами функцию test, передав ей параметром массив с числами.Сделайте так, чтобы функция вернула массив с кубами этих чисел.

function test(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = func(arr[i]);
    }
    return arr;
}

let result = test([1, 2, 3], function (num) {
    return num ** 3;
});

console.log(result); // выведет [1, 4, 9]

Вложенные функции в JavaScript

Задача 1 js.Pm.FA.NF .1

Сделайте функцию func, которая параметрами будет принимать два числа, а возвращать сумму квадрата первого числа с кубом второго числа.

Сделайте для этого вспомогательную функцию square, возводящую число в квадрат, и вспомогательную функцию cube, возводящую число в куб.

function func(num, num1) {
    function square(num) {
        return num ** 2;
    }

    function cube(num1) {
        return num1 ** 3;
    }

    return square(num) + cube(num1);
}

console.log(func(2, 3));


Задача 1 js.Pm.FA.FRF .1

Сделайте функцию func1, которая будучи вызвана вот так: func1()(), вернет число 1.
Сделайте аналогичную функцию func2, возвращающую число 2. Найдите сумму результатов этих функций.


function fanc1() {
    return function () {
        return function () {
            return 1;
        }
    }
}

function fanc2() {
    return function () {
        return function () {
            return 2;
        }
    }
}

console.log(fanc1()()() + fanc2()()());


Задача 3 js.Pm.FA.FRF .3

Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4), вернет сумму переданных в параметры чисел.

function fanc1() {
    return function (num1) {
        return function (num2) {
            return function (num3) {
                return num1 + num2 + num3;
            }
        }
    }
}

console.log(fanc1()(2)(3)(4));

Задача 4 js.Pm.FA.FRF .4

Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4)(5)(), вернет массив переданных в параметры чисел.

function func(num) {
    let arr = [];
    return function (num1) {
        return function (num2) {
            return function (num3) {
                return function () {
                    arr.push(num, num1, num2, num3);
                    return arr;
                }
            }
        }
    }
}

console.log(func(2)(3)(4)(5)());


Задача 1 js.Pm.FA.Cls .1

Самостоятельно, не подсматривая в мой код, реализуйте счетчик вызова функции, работающий на замыканиях.

function func() {
    let num = 0;
    return function () {
        return num++;
    }
}

let test = func();
console.log(test());
console.log(test());
console.log(test());

Задача 2 js.Pm.FA.Cls .2

Пусть функция в замыкании хранит число 10. Сделайте так, чтобы каждый вызов функции уменьшал это число на 1 и
выводил на экран уменьшенное число.

function func() {
    let num = 10;
    return function () {
        return num--;
    }
}

let test = func();
console.log(test());
console.log(test());
console.log(test());

Задача 3 js.Pm.FA.Cls .3

Модифицируйте предыдущую задачу так, чтобы отсчет доходил до 0, а затем каждый последующий вызов функции
выводил на экран сообщение о том, что отсчет окончен.

function func() {
    let num = 1;
    return function () {
        if (num <= 0) {
            return `отсчет окончен`;
        } else {
            return num--;
        }

    }
}

let test = func();
console.log(test());
console.log(test());
console.log(test());


Задача 12 js.Pm.FA.IIFE .12

Допишите следующий код так, чтобы его запуск алертом выводил '!':

    (function () {
        return function () {
            return function () {
                return console.log(`!`);
            }
        }
    })()()();




Задача 13 js.Pm.FA.IIFE .13

Допишите следующий код так, чтобы его запуск выводил сумму переданных параметрами чисел:

    (function (num1) {
        return function (num2) {
            return console.log(num1 + num2);
        }
    })(1)(2);
Задача 14 js.Pm.FA.IIFE .14

Допишите следующий код так, чтобы его запуск выводил сумму переданных параметрами чисел:

    (function (num1) {
        return function (num2) {
            return function (num3) {
                return console.log(num1 + num2 + num3);
            }
        }
    })(1)(2)(3);


Задача 1 js.Pm.FA.CIIFE .1

Не подсматривая в мой код, самостоятельно реализуйте такой же счетчик.


let func = (function func() {
    let a = 1;
    return function () {
        a++
        if (a == 5) {
            a = 0;
        }
        console.log(a);
    }
})();


func();
func();
func();
func();
func();
Задача 2 js.Pm.FA.CIIFE .2

Модифицируйте работу счетчика так, чтобы он считал до 5, а потом отсчет начинался сначала.

function callback(str) {
    // let str = String(elem);
    return str.split(``).reverse().join(``);
}



let arr = [`pivo`, `vodka`, `voda`];

function each(arr, callback) {
    let result = [];

    for (let elem of arr) {
        result.push(callback(elem)); // вызываем функцию-коллбэк
    }

    return result;
}

console.log(each(arr, callback));
// Задача 1 js.Pm.FA.Clb .1

// Дан массив со строками.С помощью созданной нами функции each переверните символы каждой строки в обратном порядке.




Задача 2 js.Pm.FA.Clb .2

Дан массив со строками.С помощью созданной нами функции each сделайте заглавным первый символ каждой строки.

let arrrr = ['hshh', 'ssssdsa', '123'];


function rev(elem) {
    let str = String(elem);
    return str.slice(0, 1).toUpperCase() + str.slice(1);
}

function each(arr, callback) {

    let arrr = [];

    for (let elem of arr) {
        arrr.push(callback(elem))
    }
    return arrr
}

console.log(each(arrrr, rev));

Задача 3 js.Pm.FA.Clb .3

Дан массив с числами.С помощью созданной нами функции each найдите произведение каждого элемента массива на его порядковый номер.

// let elems = [1, 2, 3, 4, 5];

// function callback(arr) {
//     let result = [];

//     for (let elems of arr) {
//         result.push(elems * (arr.indexOf(elems) + 1));
//     }
//     return result;
// }

// console.log(callback(elems));

// let result = filter([1, 2, 3, 4, 5], function (elem) {
//     if (elem % 2 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// });

// console.log(result); // выведет [2, 4]


// Реализуйте функцию filter, которая будет осуществлять фильтрацию массива. Пусть первым параметром функция принимает массив, а вторым - функцию-коллбэк, 
// и возвращает массив элементов, для которых функция-коллбэк вернет true.

// Пример работы такой функции (оставим в массиве только четные числа):

let result = filter([1, 2, 3, 4, 5], function (elem) {
    if (elem % 2 != 0) {
        return true;
    } else {
        return false;
    }
});

console.log(result); // выведет [2, 4]

function filter(arr, callback) {
    let res = [];
    // let i = 0;
    for (let elem of arr) {
        if (callback(elem)) {
            res.push(elem)
        }
    }
    return res
}


Задача 5 js.Pm.FA.Clb .5

Дан массив с числами.С помощью созданной нами функции filter оставьте в этом массиве только положительные числа.

let result = filter([1, -2, 3, 4, -5], function (elem) {
    if (elem > 0) return true;
    else return false;
});

console.log(result);

function filter(arr, callback) {
    let result = [];
    for (let elem of arr) {
        if (callback(elem)) {
            result.push(elem);
        }
    }
    return result;
}


Задача 6 js.Pm.FA.Clb .6

Дан массив со строками.С помощью созданной нами функции filter оставьте в этом массиве только строки, длина которых от 1 до 3 символов.

let result = filter(['ST', 'STRssssss', 'STRsss', 'STRas', 'S'], function (elem) {

});
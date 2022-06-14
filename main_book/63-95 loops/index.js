"use strict";

// let i = 0;
// while (i <= 100) {
//   console.log(i);
//   i++;
// }

// for (let i = 0; i <= 101; i++) {
//   console.log(i);
// }

// for (let i = 1; i < 34; i += 2) {
//   console.log(i);
// }

// // Задача 3⋕js.Pm.Lp.Fr.3

// // С помощью цикла for выведите в консоль четные числа в промежутке от 0 до 100.

// for (let i = 0; i < 101; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// for (let i = 0; i < 101; i++) {
//   if (!(i % 2 == 0)) {
//     console.log(i);
//   }
// }

// for (let i = 100; i > 0; i--) {
//   console.log(i);
// }

// let result = 1;
// for (let i = 1; i < 21; i++) {
//   result *= i;
// }
// console.log(result);

// let sum = 0;
// for (let i = 0; i < 101; i += 2) {
//   sum += i;
// }
// console.log(sum);

// let sum = 0;
// for (let i = 0; i < 101; i++) {
//   if (!(i % 2 == 0)) {
//     sum += i;
//   }
// }
// console.log(sum);

// // 67

// let arr = ["a", "b", "c", "d", "e"];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// let arr = [1, 2, 3, 4, 5];
// let result = 0;

// for (let i = 0; i < arr.length; i++) {
//   result += arr[i] * arr[i];
// }

// console.log(result);

// // Задача 6⋕js.Pm.Lp.AFr.6

// // Дан массив с элементами 2, 5, 9, 15, 1, 4. С помощью цикла for и оператора if выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.

// let arr = [2, 5, 9, 15, 1, 4];

// for (let i = 0; i<arr.length; i++){
//   if (arr[i] > 3 && arr[i] < 10){
//     console.log(arr[i]);
//   }
// }

// Задача 7⋕js.Pm.Lp.AFr.7

// Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.

// let arr = [2, 5, 9, 15, 1, 4];
// let sum =0;
// for (let i = 0; i<arr.length; i++){
//   if (arr[i] >0){
//     sum += arr[i];
//   }
// }

// console.log(sum);

// Задача 8⋕js.Pm.Lp.AFr.8

// Дан массив arr. Найдите среднее арифметическое его элементов (сумма делить на количество). Проверьте задачу на массиве с элементами 1, 2, 3, 4, 5.

// let arr = [1, 2, 3, 4, 5];
// let result;
// let sum =0;

// for (let i = 0; i<arr.length; i++){
// sum += arr[i];

// }
// result = sum/arr.length;
// console.log(result);

// Задача 9⋕js.Pm.Lp.AFr.9

// Дан массив числами, например:

// let arr = [10, 20, 30, 50, 235, 3000];
// // Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
// for (let i = 0; i <arr.length; i++){
//   let str = String(arr[i]);
//   if (Number(str[0] == 1 || str[0] == 2 || str[0] == 5)){
//     console.log(arr[i]);
//   }
// }

// Задача 10⋕js.Pm.Lp.AFr.10

// Дан массив с числами. Выведите элементы этого массива в обратном порядке.

// let arr = [10, 20, 30, 50, 235, 3000];

// for (let i = arr.length-1; i>0; i--){
//   console.log(arr[i]);
// }

// Задача 11⋕js.Pm.Lp.AFr.11

// Дан массив с числами. С помощью цикла выведите на экран все элементы, значение которых совпадает с их порядковым номером в массиве.

// let arr = [0,1,2,3,5];

// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i];
//   if (element == i){
//     console.log(arr[i])
//   }
// }

// Задача 12⋕js.Pm.Lp.AFr.12

// Дан массив с числами. С помощью цикла for и функции document.write выведите каждый элемент массива с новой строки. Используйте для этого тег br.

// let arr = [0,1,2,3,5];

// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i];
//   if (element == i){
//   document.write(`${arr[i]} <br>`)
//   }
// }

// Задача 13⋕js.Pm.Lp.AFr.13

// Дан массив с числами. С помощью цикла for и функции document.write выведите каждый элемент массива в отдельном абзаце.

// let arr = [0,1,2,3,5];

// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i];
//   if (element == i){
//   document.write(`<p>`  ,arr[i] ,'</p>');
//   }
// }

// Задача 14⋕js.Pm.Lp.AFr.14

// Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.

// let week = ["пн", "вт","ср", "чт", "пн", "сб", "вс"];

// for (let i = 0; i < week.length; i++){
//   if (week[i] == "сб" || week[i] == 'вс'){
//     document.write(`<b>`,week[i]," ",`</b>`)
//   } else{
//     document.write(week[i]," ")
//   }

// }

// Задача 15⋕js.Pm.Lp.AFr.15

// Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. Номер текущего дня должен храниться в переменной day.

// let arr = ["a", "b", "c", "d", "e"];
// for (const elem of arr) {
//   console.log(elem);
// }

// let object = { a: 1, b: 2, c: 3, d: 4, e: 5 };
// let sum = 0;
// for (const key in object) {
//   if (Object.hasOwnProperty.call(object, key)) {
//     const element = object[key];
//     sum += element;
//   }
// }
// console.log(sum);

// Задача 1⋕js.Pm.Lp.Br.1

// Дан массив с числами. Запустите цикл, который будет по очереди выводить элементы этого массива в консоль до тех пор, пока не встретится элемент со значением 0. После этого цикл должен завершить свою работу.

// const arr = [1,2,3,0,5,6];
// for (let elem of arr){
//   if (elem == 0){
//     break;
//   }
//   console.log(elem);
// }

// Задача 2⋕js.Pm.Lp.Br.2

// Дан массив с числами. Найдите сумму элементов, расположенных от начала массива до первого отрицательного числа.

// const arr = [1,2,3,0,-1,6];
// let sum =0;
// for (let elem of arr){
//   if (elem < 0){
//     break;
//   }
//   sum += elem;
// }
//   console.log(sum);

// Задача 3⋕js.Pm.Lp.Br.3

// Дан массив с числами. Найдите позицию первого числа 3 в этом массиве (считаем, что это число обязательно есть в массиве).

// Задача 4⋕js.Pm.Lp.Br.4

// Определите, сколько целых чисел, начиная с числа 1, нужно сложить, чтобы сумма получилась больше 100.

let arr = ["a", "b", "c", "d", "e"];
// Проверьте, что в этом массиве есть элемент 'c'. Если есть - выведите 'да', а если нет - выведите 'нет'.
let flag = false;
for (let elem of arr) {
  if (elem == `c`) {
    flag = true;
    // console.log(`yes`)
    break;
  } else {
    // console.log(`no`)
  }
}
if (flag == true) {
  console.log(`yes`);
} else {
  console.log(`no`);
}

let number = 0;
while (number < 100 && number !== null) {
  number = prompt("ёвведите чилсо более 100", " ");
}


Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.

Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.

Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.

Напишите код, который выводит все простые числа из интервала от 2 до n.

Для n = 10 результат должен быть 2,3,5,7.

P.S. Код также должен легко модифицироваться для любых других интервалов.


let number = prompt(`Enter yout number`, `1`);
let arr = [];

let n = 10;
nextPrime:
for (let i = 2; i <= n; i++) { 
  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime;
  }
  arr.push(i);
}

console.log(arr);


let number = prompt(`Enter yout number, please: `, `1`);
let arr = [];

metka: 
  for (let i = 2; i<= number; i++){
    for( let j = 2; j<i; j++){
      if (i%j == 0)  continue metka;
    }
    arr.push(i);
  }

  console.log(arr)


  let number = prompt(`Enter your nu,ber please `, `1`);

  let flag = true;
  for (let i = 2; i<number; i++){
    if (number % i == 0){
      flag =false;
      break;
    }
  }
  console.log(number + ` это число ` + flag)


  let number = 3;
let flag = true;
  for (let i = 2; i <10; i++){
    if ( number %2 == 0){
      flag =false;
      break;
    }
  }
  console.log(`Число ${number} ${flag} натуральное`)


let number = 10;
let arrNatural=[];
  metka: for (let i = 2; i<number; i++){
    for (let j=2; j<i; j++){
      if(i%j ==0){
        continue metka;
      }
    }
    arrNatural.push(i);
  }

  console.log(arrNatural) // !!! порешай ещё с алгоритмами сложности

  Задача 1⋕js.Pm.Lp.AIN.1

Дано число num с неким начальным значением. Умножайте его на 3 столько раз, пока результат умножения не станет больше 1000. Какое число получится? Посчитайте количество итераций, необходимых для этого.
let num = 3;
let counter =0;
while (num < 1000){
  num *=3;
  counter++;
}

console.log(counter, num)

//  Решение через цикл for и var
for (var number = 3, i = 0; number <1000; number*=3, i++ );
console.log(number,i);


// Рисунки цтклами

let str = '-';
for (let i =0; i<10; i++){
  str +=i + `-`;
}
console.log(str)


// Задача 1⋕js.Pm.Lp.FrDT.1

// Переберите циклом числа от 10 до 1000 и выведите на экран те числа, сумма двух первых цифр которых равна 5.

for (let i = 10; i< 1000; i++) {
  let str = String(i);
  if (Number(str[0]) + Number(str[1]) == 5){
    console.log(i)
  }
}

Задача 1⋕js.Pm.Lp.Nsd.1

С помощью двух вложенных циклов выведите на экран следующую строку:

111222333444555666777888999
let str = ``;
for (let i = 1; i <10; i++){
  for (let j = 0; j<3; j++){
    str += i;
  }
}
    console.log(str);
Задача 2⋕js.Pm.Lp.Nsd.2

С помощью двух вложенных циклов выведите на экран следующую строку:

11 12 13 21 22 23 31 32 33

let str = ``;
for (let i = 1; i <4; i++){
  for (let j = 1; j<4; j++){
    str +=`${i}${j} `;
  }
}
    console.log(str);

    let arr = [];
    for (let i = 0; i < 100; i++) {
      arr[i]+=1;
      
    }

    console.log(arr);

    Задача 4⋕js.Pm.Lp.ALF.4

С помощью цикла заполните массив нечетными числами в промежутке от 1 до 99.

let arr = [];
for( let i = 1, j=0; i <100; i += 2, j++){
  arr[j] = i;
}

console.log(arr);

Задача 4⋕js.Pm.Lp.APF.4

Дан массив с числами. Переберите его циклом и запишите в новый массив только положительные из чисел.

let arr = [1,2,-3,4,-5];
let psitiveArr = [];
for (let elem of arr){
  if (elem >0){
    
  psitiveArr.push(elem)}
}

console.log(psitiveArr)

// Задача 5⋕js.Pm.Lp.APF.5

// Дан следующий массив:

let arr = ['a', 'b', 'c', 'd', 'e'];
// Описанным способом сделайте из него массив:

// let arr1 = ['e', 'd', 'c', 'b', 'a'];
let newArr = [];
for (let i = arr.length -1; i>=0; i--){
  newArr.push(arr[i]);


}
console.log(newArr);

let obj = {};
let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let arr2 = [1, 2, 3, 4, 5, 6, 7];
for (let i = 0; i < arr1.length; i++){
  obj[arr1[i]] = arr2[i];
}
console.log(obj);

let obj = {};
let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let arr2 = [1, 2, 3, 4, 5, 6, 7];
for (let i = 0; i < arr1.length; i++){
  obj[arr2[i]] = arr1[i];
}
console.log(obj);

Задача 4⋕js.Pm.Lp.OLF.4

Дан объект:

let obj = {'a': 12, 'b': 21, 'c': 13, 'd': 23, 'e': 17};
// Запишите в новый объект те элементы, значения которых расположены в промежутке от 10 до 20.
let newObj = {};
for (let key in obj){
  if (obj[key] >= 10 && obj[key] <= 20){
    newObj[key] = obj[key]
  }
}
console.log(newObj)

Задача 5⋕js.Pm.Lp.OLF.5

Дан объект:

let obj = {1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс'};
// Запишите в новый объект дни недели, номера которых являются нечетными числами.
let newObj = {};
for (let key in obj){
  if (key%2 !== 0){
    newObj[key] = obj[key]
  }
}
console.log(newObj)


Задача 6⋕js.Pm.Lp.OLF.6

Дан объект:

let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
// Переберите этот объект циклом и возведите каждый элемент этого объекта в квадрат.

for (let key in obj){
  obj[key] = obj[key]**2;
}

console.log(obj)


let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
let reverseObj = {};
for (let key in obj){
  reverseObj[obj[key]] = key;
}

console.log(reverseObj);

Задача 1⋕js.Pm.Lp.FChT.1

Дан следующий объект с работниками и их зарплатами:

let obj = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};
// Увеличьте зарплату каждого работника на 10%.

for (let key in obj){
  obj[key] *= 1.1; 
}
console.log(obj)

Задача 2⋕js.Pm.Lp.FChT.2

Модифицируйте предыдущую задачу так, чтобы зарплата увеличивалась только тем работникам, у которых она меньше или равна 400.

Задача 3⋕js.Pm.Lp.FChT.3

Даны следующие массивы:

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
С помощью этих массивов создайте новый объект, сделав его ключами элементы первого массива, а значениями - элементы второго.

Задача 4⋕js.Pm.Lp.FChT.4

Дан следующий объект:

let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};

// Найдите сумму ключей этого объекта и поделите ее на сумму значений.
let sum1 = 0;
let sum2 = 0;

for (let key in obj){
  sum1+= Number(key);
  sum2 += obj[key];
  
}
console.log(sum1)
console.log(sum2)
console.log(sum1/sum2);


Задача 5⋕js.Pm.Lp.FChT.5

Дан следующий объект:

let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
Запишите ключи этого объекта в один массив, а значения - в другой.

Задача 6⋕js.Pm.Lp.FChT.6

Дан следующий объект:

let obj = {
	1: 125,
	2: 225,
	3: 128,
	4: 356,
	5: 145,
	6: 281,
	7: 452,
};
Запишите в новый массив элементы, значение которых начинается с цифры 1 или цифры 2. То есть у вас в результате получится вот такой массив:

let arr = [
	125,
	225,
	128,
	145,
	281,
];
Задача 7⋕js.Pm.Lp.FChT.7

Дан следующий массив:

let arr = ['a', 'b', 'c', 'd', 'e'];
// Создайте из этого массива следующий объект:
let obj={};
// let arr = {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'};
for (let i =0; i < arr.length; i++){
  obj[i+1] = arr[i];
}

console.log(obj);
Задача 8⋕js.Pm.Lp.FChT.8

Дан следующий массив:

let arr = ['a', 'b', 'c', 'd', 'e'];
Создайте из этого массива следующий объект:

let arr = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};

let arr = ['a', 'b', 'c', 'a', 'a', 'b'];
let count = {};

for (let elem of arr){
  if (count[elem] == undefined){
    count[elem] =1
  } else {
    count[elem]++
  }
}

console.log(count);

Задача 1⋕js.Pm.Lp.AEN.1

Дан массив с числами. Переберите его циклом и в каждой итерации цикла выведите следующий элемент массива.

let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
for (let i = 0; i < arr.length -1; i++){
  console.log(arr[i+1])
}

Задача 2⋕js.Pm.Lp.AEN.2

Модифицируйте предыдущую задачу так, чтобы в каждой итерации цикла выводилась сумма текущего и следующего элемента массива.

let arr = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < arr.length -1; i++){
  console.log(arr[i+1] + arr[i])
}

// Задача 3⋕js.Pm.Lp.AEN.3

// Дан массив с числами. Переберите его циклом и в каждой итерации цикла выведите два предыдущих элемента массива.

// Задача 4⋕js.Pm.Lp.AEN.4

// Модифицируйте предыдущую задачу так, чтобы в каждой итерации цикла выводилась сумма двух предыдущих элементов и текущего элемента массива.

// Задача 5⋕js.Pm.Lp.AEN.5

// Дан массив с числами. Переберите его циклом и в каждой итерации цикла выведите сумму предыдущего, текущего и следующего элементов массива.

let one = 0;
let two = 1;

for (let i = 0; i <= 10; i++){
  let current = one + two;

  one = two;
  two = current;

  console.log(current);

}

// Решите задачу на нахождение ряда чисел, каждое из которых равно сумме трех предыдущих, а первые три числа равны 0, 1 и 2.

let one = 0;
let two = 1;
let three = 2;

for (let i = 0; i <= 5; i++){
  let current = one + two + three;

  one = two;
  two = three;
  three = current;

  console.log(current);

}

// Выведите на экран следующую пирамидку:

// 1
// 333
// 55555
// 7777777
// 999999999
let str = '';
for (let i = 1; i < 10; i+=2){
  for (let j = 1; j <= i;j++){
    str += `x`;

  }
  console.log(str)
}

let str = '';
for (let i = 1; i < 10; i+=2){
        str =``;
  for (let j = 1; j <= i;j++){

    // if (i%2 !=0){
    str += i;
    // }

  }
      console.log(str)
}


let arr = [];
let str = ``;

for (let i =1; i<=5; i++){
  	str += 'xx';
	arr.push(str);
}
console.log(arr);


С помощью цикла сформируйте следующий массив:

['11111', '22222', '33333', '44444', '55555'];
let arr = [];
let str = ``;

for (let i =1; i <=5; i++){
  str = ``;
  for (let j =1; j<=5; j++){
    str += i;
  }
  arr.push(str);
}
console.log(arr)

let arr = [10, 20, 30, 40, 21, 32, 51];
// Возьмите из этого массива те элементы, у которых первая цифра 1 или 2, и найдите их сумму.
let sum =0;
for (let elem of arr){
  let str = ``+elem;
  if (str[0] == 1 ||str[0] == 2){
    sum+= elem;
  }
}
console.log(sum)

let obj = {a: 10, b: 20, c: 30, d: 40, e: 50};
let sum = 0;

for (let elem in obj) {
//   console.log(elem)
//   console.log(obj[elem])
let str = String(obj[elem]);
console.log(str)
	if (str[0] == 1 || str[0] == 2) {

		sum += obj[elem];
	}
}

console.log(sum);
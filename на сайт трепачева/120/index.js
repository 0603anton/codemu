js.Pm.FA.RMs

№ 1

let obj = {
  a: 1,
  b: {
    c: 2,
    d: 3,
    e: 4
  },
  f: {
    g: 5,
    j: 6,
    k: {
      l: 7,
      m: {
        n: 8,
        o: 9
      }
    }
  }
}

function showObjProp(obj) {
  for (let prop in obj) {
    if (typeof obj[prop] !== "object") {
      console.log(obj[prop]);
    } else {
      showObjProp(obj[prop]);
    }

  }
}

showObjProp(obj);

№
2


const arr = [1, [2, 7, 8],
  [3, 4, [5, [6, 7]]]
];

let result = []; //как тут обойтись без объйявления глобальной переменной??? И надо ли без неё обходитьсяы

function converToSimpleArr(arr) {

  for (let elem of arr) {
    if (typeof elem !== "object") {
      result.push(elem);
    } else {
      converToSimpleArr(elem);
    }
  }
  return result;
}

console.log(converToSimpleArr(arr));

№
3

let obj = {
  a: 1,
  b: {
    c: 2,
    d: 3,
    e: 4
  },
  f: {
    g: 5,
    j: 6,
    k: {
      l: 7,
      m: {
        n: 8,
        o: 9
      }
    }
  }
}



function getSum(obj) {
  let sum = 0;
  for (let prop in obj) {
    if (typeof obj[prop] !== "object") {
      sum += obj[prop];
    } else {
      sum += getSum(obj[prop]);
    }
  }
  return sum;
}

console.log(getSum(obj));

№
4

let arr = ['a', ['b', 'c', 'd'],
  ['e', 'f', ['g', ['j', 'k']]]
];

function converToString(arr) {
  let str = ``;
  for (let elem of arr) {
    if (typeof elem !== "object") {
      str += elem;
    } else {
      str += converToString(elem);
    }
  }
  return str;
}

console.log(converToString(arr));

№
5

let arr = [1, [2, 7, 8],
  [3, 4],
  [5, [6, 7]]
];

function square(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "object") {
      arr[i] = arr[i] ** 2;
    } else {
      square(arr[i]);
    }
  }
  return arr;
}

console.log(square(arr));
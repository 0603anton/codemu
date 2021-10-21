js.Pm.FA.Rc


№ 1

let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5
};

function showObjProp(obj) {
  for (let prop in obj) {
    console.log(obj[prop]);
  }
}

showObjProp(obj);

//немогу понять как тут решить с использованием рекурсии именно??


№
2


let arr = [
  1,
  2,
  3,
  4,
  5
];



function getSquareSum(arr) {

  let sum = arr.shift() ** 2;
  if (arr.length != 0) {
    sum += getSquareSum(arr);
  }
  return sum;
}

console.log(getSquareSum(arr));
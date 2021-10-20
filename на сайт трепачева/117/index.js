js.Pm.FA.Clb

№ 7

let result = every([1, 2, 3, 4, 25], function (elem) {
  if (elem > 0) {
    return true;
  } else {
    return false;
  }
});

console.log(result);

function every(arr, callback) {

  for (let elem of arr) {
    if (!callback(elem)) {
      return false;
    }
  }
  return true;
}

№
8

let result = every([1, -22, 3, 4, 5], function (elem) {
  if (elem < 0) {
    return true;
  } else {
    return false;
  }
});

console.log(result);

function every(arr, callback) {

  for (const elem of arr) {
    if (callback(elem)) {
      return true;
    }
  }
  return false;
}

№
9

let result = alternate(
  ['a', 'b', 'c', 'd', 'e'],
  function (elem) {
    return elem + '!';
  },
  function (elem) {
    return elem + '?';
  },
);

console.log(result); // выведет ['a!', 'b?', 'c!', 'd?', 'e!']

function alternate(arr, callback1, callback2) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      result.push(callback1(arr[i]));
    } else {
      result.push(callback2(arr[i]));
    }
  }
  return result;
}
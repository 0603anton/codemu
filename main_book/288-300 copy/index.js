"use strict";
function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const array = rangeOfNumbers(startNum, endNum - 1);

    array.push(endNum);
    return array;
  }
}

console.log(countdown(4, 4));


test

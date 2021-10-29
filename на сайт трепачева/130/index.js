js.Pm.Osr.SRAp

№ 1

function sredneeSum(...nums) {
  let sum = 0;
  for (let elem of nums) {
    sum += elem;
  }
  return sum / nums.length;
}

console.log(sredneeSum(1, 2, 3, 4, 5));

№
2

function unite(arr, arr1, arr2) {
  let result = [];
  result.push(arr, arr1, arr2);
  return result;
}

console.log(unite([1, 2, 3], [4, 5, 6], [7, 8, 9]));

№
3

function merge(arr, arr1, arr2) {
  let tempArr = [];
  let result = [];
  tempArr.push(arr, arr1, arr2);
  for (let elem of tempArr) {
    for (let subElem of elem) {
      result.push(subElem);
    }
  }

  return result;
}

console.log(merge([1, 2, 3], [4, 5, 6], [7, 8, 9]));
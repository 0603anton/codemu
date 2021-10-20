js.Pm.FA.AF

№ 1

let result = every([1, 2, 3, 4, 5], elem => elem > 0);

№
2

let result = every([1, 2, 3, 4, 5], (elem, index) => elem * index > 10);


№
3

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let result = each(arr, (elem, index) => elem * index > 10);
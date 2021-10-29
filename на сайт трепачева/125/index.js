js.Pm.Enm.Sm

№ 1
let arr = [2, 4, 6, 8];
console.log(arr.some(elem => elem > 0));


№
2
let arr = [2, 4, 6, 8, 10];
console.log(arr.some((elem, index) => elem * index < 30));
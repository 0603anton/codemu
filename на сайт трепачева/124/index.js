js.Pm.Enm.Ev

№ 1
let arr = [2, 4, 6, 8];
console.log(arr.every(elem => elem > 0));


№
2
let arr = [2, 4, 6, 8, 10];
console.log(arr.every((elem, index) => elem * index < 30));
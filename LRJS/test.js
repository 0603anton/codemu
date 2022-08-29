function diffSubtract(date1, date2) {
  return date2 - date1;
}

function diffGetTime(date1, date2) {
  return date2.getTime() - date1.getTime();
}

function bench(func) {
  let date1 = new Date(0);
  let date2 = new Date();

  let start = Date.now();
  for (let i = 0; i < 100000; i++) {
    func(date1, date2);
  }
  return Date.now() - start;
}

alert("Время diffSubtract: " + bench(diffSubtract) + "мс");
alert("Время diffGetTime: " + bench(diffGetTime) + "мс");

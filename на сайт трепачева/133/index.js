js.Pm.Dst.Obâ 1

let options = {
  color: 'red',
  width: 400,
  height: 500,
};

let {
  color,
  width,
  height
} = options;

console.log(color);

â
2


let options = {
  color: 'red',
  width: 400,
  height: 500,
};

let {
  color: c,
  width: w,
  height: h
} = options;

console.log(c);

â
3

let options = {
  width: 400,
  height: 500,
};


let {
  color = `black`, width, height
} = options;

console.log(color);

â
4

let options = {
  width: 400,
  height: 500,
};


let {
  color: c = `black`,
  width: w,
  height: h
} = options;

console.log(c, w, h);
let multiply = function (x, y) {
  console.log(x, " * ", y, " = ", x * y);
};

let mu2 = multiply.bind(this, 2);
mu2(3);

let mu3 = multiply.bind(this, 3);
mu3(5);

//Alternative
console.log("Alternative");
let mul = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

let mul2 = mul(2);
mul2(3);

let mul3 = mul(3)(4);

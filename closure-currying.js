// ###############################################################################################################################

                   // Closure

function outer() {
  let a = 90;
  function inner() {
    console.log(a);
  }
  return inner();
}

outer();

// ------------------------------------------------------------------------------

const summation = function (a) {
  var c = 6;
  console.log("live viewers : ", a);
  return function (b) {
    return a + b + c;
  };
};
const sumall = summation(5)(9);
console.log(sumall);

// ------------------------------------------------------------------------------
// ###############################################################################################################################

                                  //Currying  ::
//  the technique of translating the evaluation of a function that takes multiple arguments into evaluating a sequence of functions, each with a single argument.

// ###############################################################################################################################

//Instead of
const adding = (a, b, c) => console.log(a + b + c);
adding(90, 90, 91); // 271

// Currying Does
const adding1 = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};

console.log(adding1(90)(90)(92)); //272

// ------------------------------------------------------------------------------

function a(aa) {
  return function (bb) {
    return function (cc) {
      return aa + bb + cc;
    };
  };
}

const sum = a(2)(2)(3);
console.log(sum);

// ------------------------------------------------------------------------------

// Currying in Js

function a(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}

const sum1 = a(2);
const sum2 = sum1(2);
const sum3 = sum2(5);
console.log(sum3); //9

// Or

const summ = a(5)(5)(5);
console.log(summ); //15

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

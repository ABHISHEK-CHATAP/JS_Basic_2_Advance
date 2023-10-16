// 1. What is async await in JavaScript?
// Await function is used to wait for the promise. It could be used within the async block only. It makes the code wait until the promise returns a result. It only makes the async block wait.

// 2.What is JSON in JavaScript?
// JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax.

// console.log(9+9);

function func1() {
  function func2() {
    console.log(x);
    console.log(y);
  }
  var x = 2;
  let y = 12;
  func2();
}
func1();
//2
//12

// --------------------------------------------------------------------------------------------------

(function () {
  setTimeout(() => console.log(1), 2000);
  console.log(2);
  setTimeout(() => console.log(3), 0);
  console.log(4);
})();
//2
//4
//3
//1

// --------------------------------------------------------------------------------------------------

function func2() {
  for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 2000);
  }
}
func2();
//3
//3
//3

// --------------------------------------------------------------------------------------------------





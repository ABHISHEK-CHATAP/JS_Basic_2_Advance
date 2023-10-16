const person = {
    name: "John",
    age: 30,
    greet: function() {
      console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
    },
  };
  
  
    const greetFunction = person.greet;
    greetFunction();
  
  // person.greet();                   //Hello, my name is John and I am 30 years old.
// console.log(person.greet());       // Hello, my name is John and I am 30 years old.


// ------------------------------------------------------------------------------------------------------------------------------------------

function delayPrint(message, delay) {
    setTimeout(()=> {
      console.log(message);
    }, delay);
  }
  
  console.log("Start");
  delayPrint("Middle", 1000);
  console.log("End");

//   ==> start ==> end ==> Middle

// ------------------------------------------------------------------------------------------------------------------------------------------

function calculateSum() {
    const args = Array.from(arguments); // in-Build method fro getting the Arguments    
    console.log("args : ", args);
    return args.reduce((acc, current) => acc + current, 0);
  }
  
  const sum = calculateSum(1, 2, 3, 4, 5);
  
  console.log("sum : ",sum); // 15


// ------------------------------------------------------------------------------------------------------------------------------------------


function createMultiplier(multiplier) {
    return function (number) {
        console.log("retrun no :",number); // 5
      return number * multiplier;
    };
  }
  
  const double = createMultiplier(2);
  const triple = createMultiplier(3);
  
  console.log(double(5));   // 10
  console.log(triple(5));  // 15

// ------------------------------------------------------------------------------------------------------------------------------------------

const myArray = [1, 2, 3, 4, 5];
const result = myArray.reduce(function(acc, number) {
  if (number % 2 === 0) {
    acc.push(number * 3);
  }
  return acc;
}, []);

console.log(result);

// => [6,12]

// ------------------------------------------------------------------------------------------------------------------------------------------




















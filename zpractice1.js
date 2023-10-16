// ------------------------------------------------------------------------------------------------------------------------------------------


for (var i = 0; i < 4; i++) {
    console.log(i);
} // 1,2,3

// ------------------------------------------------------------------------------------------------------------------------------------------


for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 6000);
}

// ------------------------------------------------------------------------------------------------------------------------------------------




const ar = [1, 2, 3];
const b = ar;
b[0] = 5;
b[1] =5;

console.log(ar); //[ 5, 5, 3 ]
console.log(b)  //[ 5, 5, 3 ]

// ------------------------------------------------------------------------------------------------------------------------------------------


function createIncrementor(incrementAmount) {
    let count = 0;
    function increment() {
      count += incrementAmount;
      return count;
    }
    return increment;
  }
  
  const incrementByTwo = createIncrementor(2);
  const incrementByFive = createIncrementor(5);
  
  console.log(incrementByTwo()); // 2
  console.log(incrementByFive()); // 5
  console.log(incrementByTwo()); //4

// ------------------------------------------------------------------------------------------------------------------------------------------



const greeting = "Hello, JavaScript!";
const logGreeting = function() {
    console.log(greeting);
    // const greeting = "Hi, there!";
};
logGreeting();
// Reference error :  cannot access "greeting" before initialization;

// block scope me aur ek (const greeting) store hai toh block level ka console block level ke greeting ke con sdole ko access karega
// agar block ka greeting const variable comment kare toh error nhi aayega
// ------------------------------------------------------------------------------------------------------------------------------------------

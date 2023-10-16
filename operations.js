//  Searching in Array

const fruits =  ["apple", "banana", "grapes", "mango", "orange"];

const filterItems = (arr, query)=>{
   return arr.filter((el)=> el.toLowerCase().includes(query))
}
// console.log(filterItems(fruits,"s"));  //[ 'grapes', 'orange' ]

// ###############################################################################


// A function : is a block of code , designed for doing a particular tasks

// const objData = {
//     FirstName : "Abhishek",
//     LastName : "Chatap",
//     age : 23 
// }

// const ObjToString = JSON.stringify(objData)
// console.log(ObjToString);

// const StringtObj = JSON.parse(ObjToString)
// console.log(StringtObj);

// ###############################################################################

// Convert Num To String  &&&&  String to Number

const num = 10;
const numTostring = num.toString()
// console.log(typeof numTostring);

const stringtoNum = parseInt(numTostring)
// console.log(typeof stringtoNum);

// ###############################################################################

// Map ( this is not a map(HOF) it is a data structure of JS)
//  Map = holds key-value pairs and remembers the original insertion order of the keys 

const map1 = new Map();
map1.set("a", 1);
map1.set("b", 2);
map1.set("c", 3);

// console.log(map1.get("a"));  //1
// console.log(map1.delete("c")); // true
// console.log(map1.get("c"));  // undefined

// ###############################################################################

// Math.Random()

for(let i=0 ; i<= 5; i ++ ){
    // console.log(Math.random(i) *1000)
}
// O/p => 364.5474059077416
//        517.8697107553505 
//        842.7059717834715 
//        708.8450074051844 
//        600.0962235605087 
//        43.688673420562374

// ###############################################################################


const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

//          Object.assign(target, source)
const obj = Object.assign(o1, o2, o3);
// console.log(obj); //    { a: 1, b: 2, c: 3 }
// console.log(o1);    ///{ a: 1, b: 2, c: 3 }
// console.log(o2);     // {b:2}

// console.log(Object.keys(obj)); /// [ 'a', 'b', 'c' ]
// console.log(Object.values(obj));//  [ 1, 2, 3 ]

// ###############################################################################

// Set :- Data structure

const numbers = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5];
// console.log([...new Set(numbers)]);

const set1 = new Set();
set1.add(12);
set1.add(2);
set1.add(90);

// console.log(set1);   //Set(3) { 12, 2, 90 }

// ###############################################################################


const number = [1,2,3,4,5,6,7,8,9,10];
const isEven = (num)=>{ return num.filter((x)=> x % 2 !== 0)}
// console.log(isEven(number));    // [ 1, 3, 5, 7, 9 ]



// ###############################################################################


// var salary = "9999";
// (() =>{
//     console.log("Original salary was " + salary);
//     var salary = "8888";
//     console.log("My New Salary " + salary);
// })();



// var a={},
//     b={key:'b'},
//     c={key:'c'};

// a[b]=123;
// a[c]=456;

// console.log(a[b]);



// let name ="foo"; 
// console.log('name:', name); //global scope, here name = foo
// const id =1;
// console.log('id:', id); //global scope, here id=1
// var age = 23;
// console.log('age:', age); //global scope, here age = 20

// if(id) { 
//     let name ="bar"; //block scope
//     console.log('inside block name:', name); //here name = bar
//     //const id =1;
//     // if you uncomment the above line, program will throw an error as const can't be assigned twice
//     console.log('id:', id); //id =1 
//     var age = 29;
//     console.log('age:', age); // here age=25
// }
// console.log('outside block name:', name); //here name will be foo again
// console.log('id:', id); //id =1
// console.log('age:', age);





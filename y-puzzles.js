// console.log("Abhi", 4+5);

const date = new Date();
// console.log(date);

// --------------------------------------------------------------------------------------------------------

// Objects  =>  Objects is a collection of Properties , And Each properties is in key-value pair 
let employee = {  // object 
    "name" : "foo", // key is name and value is foo
    "id"   : 123 //key is id and value is 123
};

// console.log(employee.name); //  foo
// console.log(delete employee.name);  // true
// console.log(employee)  ; // { id: 123 }

// --------------------------------------------------------------------------------------------------------

// Square of even numbers

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const isEven =(num)=>{
return num.filter((x)=> x%2 == 0 ).map((x)=> x**2)
}
// console.log(isEven(numbers))

// --------------------------------------------------------------------------------------------------------




// const Input = prompt("enter Something here : ");
// const length = Input + " " + "Ab"
// console.log(length)

// var input = prompt("Please enter a string:");
// var output  = input.split("").reverse().join("");
// console.log("Reverse of given string is: " + output);


// var input1 = parseInt(prompt("Enter first number:"));
// var input2 = parseInt(prompt("Enter second number:"));
// var input3 = parseInt(prompt("Enter third number:"));
// var result = (input1 + input2 + input3) / 3;
// console.log("The average of three numbers: " + result);
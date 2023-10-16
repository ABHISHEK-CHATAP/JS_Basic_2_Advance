// Constructor function in JavaScript
// Introduced in the ES6 version, classes are nothing but syntactic sugars for constructor functions.
//  They provide a new way of declaring constructor functions in javascript.  
// Below are the examples of how classes are declared and used:

//old way
// function Person(name,age,gender){
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }



//new way ES^-2015
class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}


  
  var person1 = new Person("Vivek", 76, "male");
  console.log(person1);
//   Person { name: 'Vivek', age: 76, gender: 'male' }
  
  var person2 = new Person("Courtney", 34, "female");
  console.log(person2);
//Person { name: 'Courtney', age: 34, gender: 'female' }

// ------------------------------------------------------------------------------------------------------------

// Rest operator

const Addnumbers = (a,b,...rest)=>{
    console.log(rest);
   return a+b;
}

 const res = Addnumbers(2,3,5,6,7,8,9,10);
console.log(res);


// ------------------------------------------------------------------------------------------------------------


















































































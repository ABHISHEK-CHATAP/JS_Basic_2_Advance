

// Rest and Spread Operator

const AddNumbers = (a,b,c, ...other) =>{
console.log(other);
return a+b+c;
};

const result = AddNumbers(2,3,5,6,7,8,9,10)
console.log(result);    // [ 6, 7, 8, 9, 10 ] 10



 // Rest using Object
 const students ={
    name : "Abhishek",
    age :23,
    hobbies : ["Cricket", "tennis"]
}

// const age1 = students.age;

// console.log(rest);

// const {age, ...rest} = students;

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Spread Operator


// spread Using Array

const names = ["Ajay", "Abhishek", "Vivek"];

const getNames = (name1, name2, name3, name4)=>{
    console.log(name1, name2, name3, name4);
}

 getNames(...names) //Ajay Abhishek Vivek undefined




// spread using Objects
const student1 ={
    ...students,
    age : 24
}

console.log("Override object",student1); //Override object { name: 'Abhishek', age: 24, hobbies: [ 'Cricket', 'tennis' ] }


























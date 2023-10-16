// Call , Apply and Bind;

const person1 = {
    Fname : "Abhishek",
    Lname : "Chatap",
    age : 23,
    FullName : function(city, Country, message){
        return (this.Fname + " " + this.Lname + " and Age is : " + this.age) + " " + city + " " + Country + " "+ message;
    }
};

const person2 = {
    Fname : "Ayush",
    Lname : "C",
    age: 21 
};


console.log(person1.FullName("Banglore", "Russia", "nagpur to America", "ab"));

// Call
console.log(person1.FullName.call(person2, "JApan")); //Ayush C and Age is : 21 JApan

// apply
console.log(person1.FullName.apply(person2, ["Ramtek", "India", "I Luv india"]));

// Bind
const result = person1.FullName.bind(person2);
console.log(result());




// To get Access one Object Method into Another object
//  so we use , Call , apply, and bind method

// -------------------------------------------------------------------------------------------------------------------------------------------------------

// so you understand call method,
// apply is similar to call , but difference is [arguments we  are passing in array ] 
// In call method we are not passing Arguments 

// Bind is exact similar to call , but here only result we stored variable and call it whenever we want 



















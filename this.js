// this keyword refers to object
// different ways to use this keyword
// 1. By itself
// 2. Inside Object method
// 3. Inside function


const obj = {
    name : "Abhishek",
    lastName : "Chatap",
    fullName : function(){
        return this.name + " " + this.lastName;
    }
}

// console.log(obj.fullName()); //Abhishek Chatap

// --------------------------------------------------------------------------------------------------------

const cobj = {
    name : "Abhishek",
    lastName : "Chatap",
    fullName : ()=>{
        return this.name + " " + this.lastName;
    }
}
//error with Arrow Function
console.log(cobj.fullName()); // undefined undefined
// Arrow function se {this} keyword kaam nhi kr raha hai?

// --------------------------------------------------------------------------------------------------------



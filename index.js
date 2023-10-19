const arr = [1,1,2,33,33,"Abhi",5,7,"Abhi",7,9,"Au"];
const arr1 = ["jimmy","347"]

const unique = ()=>{
    return [...new Set(arr)]
};

// console.log(unique());

const concat = ()=>{
    return [...arr,...arr1];
}
// console.log(concat());
// console.log([...arr,...arr1]);
// console.log(arr.concat(arr1));

for (let i=0; i<= arr.length; i++){
    // console.log(Object.keys(arr));
};

const nArr = new Array ("Abhi", 1,1,2,5) 
// console.log(nArr);

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((word) => word.length > 6);
// console.log(result);    o/p => //[ 'exuberant', 'destruction', 'present' ]

// ####################################################################################################
//Find all prime numbers in an array
const elements = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const element1 = [2,2,3,4,5,1,1,6,6,7,9,9];

const sorted =  [...new Set(element1)]
// console.log(sorted); // [ 2, 3, 4, 5,1, 6, 7, 9]

const isPrime =(num)=>{
   for (let i=2; num>i; i++){
           if(num % i == 0){
            return false
           }
   }
   return num > 1;
}
// console.log(elements.filter(isPrime));    //[ 2, 3, 5, 7, 11, 13 ]

// ####################################################################################################

// table of Numbers ::

let val = prompt("enter a number : ");
for(let i = 1; i<=10; i++){
    // console.log( val , "*", i ,"=", val * i );
}


// ####################################################################################################

// promises in Js

// Promise.all
// Promise.any
// Promise.allSettled
// Promise.race

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 1 resolved"), 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Promise 2 rejected"), 1500);
});

Promise.all([promise1, promise2])
  .then((results) => console.log(results))
  .catch((error) => console.error(error));

// If all promise is (resolve ), it will give the array of resolve ==> [ 'Promise 1 resolved', 'Promise 2 rejected' ]
// If any one is in (reject) then it will not print resolve one it will directly print (reject promise)  ==> Promise 2 rejected

// --------------------------------------------------------------------------------------------------------------------

const promise = new Promise((resolve, reject) => {
  const GoodDeveloper = true;
  if (GoodDeveloper) {
    setTimeout(() => {
      resolve("You Are a Good Developer, Keep working on ur skill's ....");
    }, 0);
  } else {
    setTimeout(() => {
      reject("Keep Working..");
    }, 0);
  }
});
// console.log("promise :", promise);
promise.then((res) => console.log(res)).catch((err) => console.log(err));

// --------------------------------------------------------------------------------------------------------------------


let promise3 = new Promise(function(resolve, reject) { 
  let x = 3; 
  let y = 9;
  let val= x*y;
  
  if(val%2 == 0) { 
    resolve(); 
  } else { 
    reject(); 
  } 
  }); 
  
  promise3. 
    then(function () { 
      console.log('Result is an even number'); 
    }). 
    catch(()=> { 
      console.log('Rejected'); 
    }); 


    // ###################################################################################################################################################################
    

    
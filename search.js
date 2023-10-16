// Linear Search

const values = [2, 4, 3, 5, 7, 9, 10];

const fun1 = (array, key) => {
  for (let i = 0; i <= array.length; i++) {
    if (array[i] === key) {
      console.log("key found at index : ", i);
    } 
  }
  return -1
};
fun1(values, 79);

// -------------------------------------------------------------------------------------------------------------------

// Binary Search



const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < 10; i++) {
  setTimeout(() => console.log(b[i]), 1000);
}

for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log(b[i]), 2000);
}














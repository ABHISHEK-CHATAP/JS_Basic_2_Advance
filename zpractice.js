






const newwCurrying = (x) => {
  return (y) => {
    return (z) => {
      return x + y + z;
    };
  };
};

const ans = newwCurrying(5)(5)(5);
console.log(ans); 
 // 15

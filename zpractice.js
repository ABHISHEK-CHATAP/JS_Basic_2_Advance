



fetch('https://dummyjson.com/carts/1', { //---------------------------------------- 1
  method: 'PUT', /* or PATCH */
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    merge: true, // this will include existing products in the cart
    products: [
      {
        id: 1,
        quantity: 1,
      },
    ]
  })

})        //---------------------------------------- 1
.then(res => res.json())
.then(console.log);



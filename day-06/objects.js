/*A JavaScript object is a collection of named values.

Immutability means: once you've created a value, you don't change that value directly.
Instead, you create a new value containing the change.

*/

const user = {
  name: "Amit",
  age: 30,
  address: {
    city: "Pune"
  }
};

console.log("Original:", user);

// Immutable update
const updatedUser = {
  ...user,
  age: 31,
  address: {
    ...user.address,
    city: "Mumbai"
  }
};

console.log("Updated:", updatedUser);

console.log("Original age:", user.age);
console.log("Updated age:", updatedUser.age);

console.log("Original city:", user.address.city);
console.log("Updated city:", updatedUser.address.city);

console.log("Same object?", user === updatedUser);

console.log(
  "Same address object?",
  user.address === updatedUser.address
);

//practice example
{
const order = {
  id: 101,
  customer: {
    name: "Amit",
    address: {
      city: "Pune",
      pincode: 411001
    }
  },
  payment: {
    method: "UPI",
    status: "pending"
  }
};

const updatedOrder = {
    ...order,
    customer:{
        ...order.customer,
        address:{
            ...order.customer.address,
            city: "Mumbai",
            pincode: 400001
        }
    },
    payment:{
        ...order.payment,
        status: "Success"
    }
};

console.log(order.customer.address.city);
// Pune

console.log(order.customer.address.pincode);
// 411001

console.log(order.payment.status);
// pending

console.log(updatedOrder.customer.address.city);
// Mumbai

console.log(updatedOrder.customer.address.pincode);
// 400001

console.log(updatedOrder.payment.status);
// success

console.log(order !== updatedOrder);
// true

/*Think of the original object as:

order
 ├── customer
 │    └── address
 │         ├── city
 │         └── pincode
 └── payment
      ├── method
      └── status

When changing a deeply nested property, you create a new path down to that property:

new order
 ├── new customer
 │    └── new address
 │         ├── Mumbai
 │         └── 400001
 └── new payment
      ├── UPI
      └── success
*/
}


//Practice example 2
{
const a = {
  name: "Amit"
};

const b = a;

const c = {
  ...a
};

console.log(a === b); //true
console.log(a === c); //false

b.name = "Rahul";

console.log(a.name); //Rahul
console.log(c.name); //Amit
}

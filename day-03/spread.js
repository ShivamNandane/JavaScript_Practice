// The spread operator is ... and it means roughly "take the contents of this array/object and spread them out here."

const numbers = [1, 2, 3];

// Copy
const copy = [...numbers];

console.log(copy);
// [1, 2, 3]

// Add an element
const newNumbers = [...numbers, 4];

console.log(newNumbers);
// [1, 2, 3, 4]

console.log(numbers);
// [1, 2, 3]


// Objects
const user = {
  name: "Rahul",
  age: 28
};

// Copy object
const userCopy = {
  ...user
};

console.log(userCopy);


// Update object
const updatedUser = {
  ...user,
  age: 29
};

console.log(updatedUser);
// { name: "Rahul", age: 29 }

console.log(user);
// { name: "Rahul", age: 28 }


// Merge objects
const address = {
  city: "Pune",
  country: "India"
};

const completeUser = {
  ...user,
  ...address
};

console.log(completeUser);
// {
//   name: "Rahul",
//   age: 28,
//   city: "Pune",
//   country: "India"
// }
// 
{
const users = [
  {
    id: 1,
    name: "Rahul"
  },
  {
    id: 2,
    name: "Amit"
  }
];

const newUser = {
  id: 3,
  name: "Anay"
};

const updatedUser = [...users,newUser];

const trial = [...updatedUser,...users,{id: 4,name:"Anay2"}] //just for my doubt clearing

console.log(updatedUser);
console.log(users);
console.log(newUser);
console.log(trial);
}

//Practice question 01 
{
  const user = {
  id: 101,
  name: "Rahul",
  age: 28,
  address: {
    city: "Pune",
    country: "India"
  }
};

const updatedUser = {...user,name:"Amit",age:30}
console.log(updatedUser);

//Question 02 

const fruits = ["Apple", "Banana", "Orange"];
const updatedFruits = ["Mango",...fruits, "Grapes"];
console.log(updatedFruits);
console.log(fruits);
}
{
//Question 03
const users = [
  { id: 1, name: "Rahul" },
  { id: 2, name: "Amit" },
  { id: 3, name: "Priya" }
];

//const updatedUsers = {...users,users[1] name: "Ananya" }

const updatedUsers = users.map(user => 
  user.id === 2 ? {...user, name: "Ananya"} : user
);
console.log(updatedUsers);
console.log(users);
}

{
  //same type as Question 03

  const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 },
  { id: 3, name: "Tablet", price: 15000 }
];

const updatedProducts = products.map(product => product.id ===2 ? {...product, price: 25000} : product);
console.log(updatedProducts);
console.log(products);
}


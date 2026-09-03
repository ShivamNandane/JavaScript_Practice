/* JavaScript Array methods are built-in functions that let you work with collections of values—searching them, transforming them, filtering them, 
sorting them, checking conditions, and accumulating results. */

/*
map()     → transform every element
filter()  → keep matching elements
find()    → find one element
some()    → at least ONE matches
every()   → ALL match
forEach() → perform an action for each element
reduce()  → combine into one result
*/

const products = [
  { id: 1, name: "Laptop", price: 1000, inStock: true },
  { id: 2, name: "Phone", price: 700, inStock: false },
  { id: 3, name: "Keyboard", price: 100, inStock: true },
  { id: 4, name: "Monitor", price: 500, inStock: true }
];

const result = products
.filter(product => product.price >= 400 && product.inStock)
.map(product => product.name);

console.log(result);


//Example 2 

//display: Total amount from delivered orders.

const orders = [
  { id: 101, status: "DELIVERED", amount: 500 },
  { id: 102, status: "PENDING", amount: 300 },
  { id: 103, status: "DELIVERED", amount: 700 }
];
 
const deliveredTotal  = orders.filter(order => order.status ==="DELIVERED").reduce((total, order) => total + order.amount, 0);

console.log(deliveredTotal );


//Challenge example 3
{
const employees = [
  { name: "Alice", salary: 50000, active: true },
  { name: "Bob", salary: 80000, active: false },
  { name: "Charlie", salary: 90000, active: true },
  { name: "David", salary: 40000, active: true }
];

//Get an array containing the names of active employees.
const activeEmployees = employees.filter(employee => employee.active).map(employee => employee.name);
console.log(activeEmployees);

//Find the employee whose name is "Charlie".
const findCharlie = employees.find(employee => employee.name==="Charlie");
console.log(findCharlie);

//Check whether at least one employee earns more than 100,000.
const empSalary = employees.some(employee => employee.salary >= 100000);
console.log(empSalary);

//Check whether every employee is active.
const findActive = employees.every(employee => employee.active);
console.log(findActive);

//Calculate the total salary of active employees.
const totalSalaryActiveEmp = employees.filter(employee => employee.active).reduce((total, employee) => total + employee.salary, 0);
console.log(totalSalaryActiveEmp);

}

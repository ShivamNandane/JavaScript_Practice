/*An arrow function is a shorter way to create a JavaScript function.
 For example, const add = (a, b) => a + b means roughly “create a function that takes a and b and returns a + b.*/


//What does this return?
const add = (a, b) => a + b;
add(10, 20);
console.log(add(10, 20)); // This will return 30 and log it to the console.


//What's wrong here? // wrong syntax, missing return statement
const add1 = (a, b) => {
    a + b;
};
//Fix it.
const add2 = (a, b) => {     
    return a + b;
};
console.log(add2(10, 20)); // This will return 30 and log it to the console.


//What does this do?
//Does "Hello" print immediately when the code is defined? Or only when:
const greet = () => {
    console.log("Hello");
};

greet();
//is executed?
//answer: "Hello" will only print when greet() is executed, not when the code is defined.


const handleLogin = () => {
    console.log("Login");
};

// What happens when JavaScript executes:
//answer: Nothing will happen when JavaScript executes handleLogin; it will not print anything to the console because the function is defined but not called.

handleLogin;

//Does "Login" print?
//answer: No, "Login" will not print because the function is not invoked. To see "Login" printed, you need to call the function using handleLogin();

//What about:
handleLogin();
//answer: Yes, "Login" will print to the console because the function is invoked with handleLogin().



// topics: arrow functions, template literals, destructuring, spread/rest operators, promises, async/await, classes, modules, and error handling.
// Here are some practice exercises for you to work on using arrow functions in JavaScript:
// 1. **Basic Arrow Function**:
//    - Write an arrow function that takes two numbers as parameters and returns their sum. Test the function by calling it with different pairs of numbers and logging the results to the console.

const sum = (a,b) => a+b; //implicit return, no need for return keyword or curly braces
console.log(sum(5,10));

// 2. **Arrow Function with No Parameters**:
//    - Write an arrow function that takes no parameters and returns a string "Hello, World!". Call the function and log the result to the console.

const greet2 = () => "Hello, World!"; //implicit return, no need for return keyword or curly braces
console.log(greet2());

// 3. **Arrow Function with One Parameter**:
//    - Write an arrow function that takes one parameter (a name) and returns a greeting message using template literals. Call the function with different names and log the results to the console.
const greet3 = (name) => `Hello, ${name}!`; // template literals means we can use ${} to insert variables into a string.
console.log(greet3("Alice"));
console.log(greet3("Bob"));

// 4. **Arrow Function with Multiple Parameters**:
//    - Write an arrow function that takes three parameters (first name, last name, and age) and returns a string introducing the person. Call the function with different sets of parameters and log the results to the console.
const introducePerson = (firstName, lastName, age) => `Hello, my name is ${firstName} ${lastName} and I am ${age} years old.`; // here we used multiple parameters and template literals to create a string that introduces the person.
console.log(introducePerson("John", "Doe", 30));
console.log(introducePerson("Jane", "Smith", 25));

// 5. **Arrow Function with Default Parameters**:
//    - Write an arrow function that takes two parameters (a number and a multiplier) and returns the product. Set a default value for the multiplier parameter. Call the function with and without the multiplier argument and log the results to the console.
const multiply = (number, multiplier = 2) => number * multiplier; // here we set a default value for the multiplier parameter to 2.
console.log(multiply(5)); // this will use the default value of 2 for multiplier, so it will return 10.
console.log(multiply(5, 3)); // this will use the provided value of 3 for multiplier, so it will return 15.

// 6. **Arrow Function with Rest Parameters**:
//    - Write an arrow function that takes a variable number of arguments (using rest parameters) and returns the sum of all the arguments. Call the function with different numbers of arguments and log the results to the console.
const sumAll = (...numbers) => numbers.reduce((acc, curr) => acc + curr, 0); // here we used rest parameters to take a variable number of arguments and reduce method to sum them up.
console.log(sumAll(1, 2, 3)); // this will return 6
console.log(sumAll(4, 5, 6, 7)); // this will return 22

// 7. **Arrow Function with Object Destructuring**:
// what is destructuring? Destructuring is a feature in JavaScript that allows you to extract values from arrays or properties from objects and assign them to variables in a more concise way. It can be done using either array destructuring or object destructuring syntax.
// - Write an arrow function that takes an object as a parameter and uses destructuring to extract specific properties. Return a string that includes the extracted properties. Call the function with different objects and log the results to the console.
const personInfo = ({ firstName, lastName, age }) => `Hello, my name is ${firstName} ${lastName} and I am ${age} years old.`; // here we used object destructuring to extract specific properties from the object.
console.log(personInfo({ firstName: "John", lastName: "Doe", age: 30 }));
console.log(personInfo({ firstName: "Jane", lastName: "Smith", age: 25 }));

// 8. **Arrow Function with Array Destructuring**:
//how it is different from object destructuring? In object destructuring, we extract properties from an object using their keys, while in array destructuring, we extract elements from an array using their index positions.

// - Write an arrow function that takes an array as a parameter and uses destructuring to extract specific elements. Return a string that includes the extracted elements. Call the function with different arrays and log the results to the console.
const arrayInfo = ([first, second, third]) => `The first element is ${first}, the second element is ${second}, and the third element is ${third}.`; // here we used array destructuring to extract specific elements from the array.
console.log(arrayInfo([1, 2, 3]));
console.log(arrayInfo(["apple", "banana", "cherry"]));


// 9. **Arrow Function with Spread Operator**:
//what is spread operator? The spread operator is a feature in JavaScript that allows you to expand an iterable (like an array or object) into individual elements. It is represented by three dots (...) and can be used in various contexts, such as function calls, array literals, and object literals.
// - Write an arrow function that takes two arrays as parameters and uses the spread operator to combine them into a single array. Return the combined array. Call the function with different arrays and log the results to the console.
const combineArrays = (arr1, arr2) => [...arr1, ...arr2]; // here we used the spread operator to combine two arrays into a single array.
console.log(combineArrays([1, 2, 3], [4, 5, 6])); // this will return [1, 2, 3, 4, 5, 6]
console.log(combineArrays(["apple", "banana"], ["cherry", "date"])); // this will return ["apple", "banana", "cherry", "date"]

// 10. **Arrow Function with Ternary Operator**:
//what is ternary operator? The ternary operator is a conditional operator that takes three operands. It is a shorthand way of writing an if-else statement and is represented by the question mark (?) and colon (:). The syntax is: condition ? expressionIfTrue : expressionIfFalse.
// - Write an arrow function that takes a number as a parameter and uses the ternary operator to check if the number is even or odd. Return a string indicating whether the number is even or odd. Call the function with different numbers and log the results to the console.
const checkEvenOrOdd = (num) => (num % 2 === 0 ? "even" : "odd");
console.log(checkEvenOrOdd(4)); // this will return "even"
console.log(checkEvenOrOdd(7)); // this will return "odd"

// 11. **Arrow Function with Promises**:
//what is promise? A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to write asynchronous code in a more synchronous and readable manner, avoiding callback hell. A Promise can be in one of three states: pending, fulfilled, or rejected.
// - Write an arrow function that returns a Promise which resolves after 2 seconds with a message "Promise resolved!". Use `setTimeout` to simulate the delay. Call the function and use `.then()` to log the resolved message to the console.
const resolveAfter2Seconds = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolved!");
    }, 2000);
  });
};

resolveAfter2Seconds().then((message) => {
  console.log(message);
});

// 12. **Arrow Function with Async/Await**:
//what is async/await? Async/await is a syntactic feature in JavaScript that allows you to write asynchronous code in a more synchronous and readable manner. It is built on top of Promises and provides a way to handle asynchronous operations using the `async` keyword for functions and the `await` keyword for waiting on Promises.
// - Write an arrow function that uses `async/await` to call the previous Promise-based function. Log the resolved message to the console.
const callResolveAfter2Seconds = async () => {
  const message = await resolveAfter2Seconds();
  console.log(message);
};

callResolveAfter2Seconds();

// 13. **Arrow Function with Classes**:
//what is class? A class is a blueprint for creating objects in JavaScript. It defines the properties and methods that the objects created from the class will have. Classes provide a way to encapsulate data and behavior, allowing for object-oriented programming in JavaScript.
// - Write an arrow function that defines a class `Person` with a constructor that takes `name` and `age` as parameters. Add a method `greet` that returns a greeting message. Create an instance of the class and call the `greet` method, logging the result to the console.
const createPerson = (name, age) => {
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    greet() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }

  return new Person(name, age);
};

const person = createPerson("Alice", 30);
console.log(person.greet());


// 15. **Arrow Function with Error Handling**:
//what is error handling? Error handling is the process of anticipating, detecting, and responding to errors that may occur during the execution of a program. It allows developers to gracefully handle unexpected situations, preventing crashes and providing meaningful feedback to users. In JavaScript, error handling can be done using try-catch blocks, throwing custom errors, and using error objects.
// - Write an arrow function that takes a number as a parameter and throws an error if the number is negative. Use a try-catch block to call the function and log the error message to the console if an error is thrown.
const checkPositive = (num) => {
  if (num < 0) {
    throw new Error("Number must be positive.");
  }
  return num;
};

try {
  console.log(checkPositive(-5));
} catch (error) {
  console.error(error.message);
}


// 16. **Arrow Function with Callback**:
//what is callback? A callback is a function that is passed as an argument to another function and is executed after the completion of that function. It allows you to control the flow of asynchronous operations and handle the results or errors when they are available. Callbacks are commonly used in JavaScript for tasks like event handling, API requests, and timers.
// - Write an arrow function that takes a number and a callback function as parameters. The arrow function should call the callback with the square of the number. Test the function by passing different numbers and logging the results using the callback.
const squareAndCallback = (num, callback) => {
  const square = num * num;
  callback(square);
};

squareAndCallback(5, (result) => {
  console.log(result);
});


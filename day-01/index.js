//Learn when to use Const and let

const firstName = "Rahul";
let score = 0;

console.log(firstName);
console.log(score);

//Now I can change the value of score because let is used to declare score and let variables can be reassigned.
score = 100;

console.log(score);

//now if i try to change the value of firstName it will give an error because const is used to declare firstName and const variables cannot be reassigned.
//firstName = "Amit";

//now lets try changing the value of a property of an object declared with const. 
// This is allowed because the object itself is not being reassigned, only its properties are being modified.
const user = {
    name: "Rahul",
    age: 25
};

user.name = "Amit";

console.log(user);

//But if we try to reassign the entire object, it will give an error.
// user = {
//     name: "Priya",
//     age: 30
// };
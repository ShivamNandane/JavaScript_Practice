/*Here are some practice exercises for you to work on using `const` and `let` in JavaScript:
1. **Variable Declaration**:
   - Declare a variable using `let` and assign it a number. Then, change its value to another number and log it to the console.
   - Declare a variable using `const` and assign it a string. Try to change its value and observe what happens. */

   let number = 10;
   console.log(number); // this will log 10 to console
   number = 20; // this will change the value of number to 20
   console.log(number); // this will log 20 to console
   
   const message = "Hello"; 
   console.log(message); // this will log "Hello" to console
//    message = "Hello,World";
//    console.log(message); // This will throw an error because you cannot reassign a const variable.

/*2. **Block Scope**:
   - Create a block (using curly braces `{}`) and declare a variable using `let` inside it. Try to access that variable outside the block and observe what happens.
   - Do the same with a variable declared using `const`.*/

   // Block scope with let
   {
       let blockVariable = "I am inside a let block";
       console.log(blockVariable); // this will log "I am inside a block" to console
   }
   //console.log(blockVariable); //this will throw error because blockVariable is not define outside the block and it is only accessible inside the block.

   //Block scope with const
   {
    const blockConst = "I am inside a const block"
    console.log(blockConst); // this will log "I am inside a const block" to console
   }
   //console.log(blockConst); //this will throw error because blockConst is not define outside the block and it is only accessible inside the block.

   
/*3. **Reassignment**:
   - Declare a variable using `let` and assign it a boolean value. Change its value to another boolean and log it to the console.
   - Declare a variable using `const` and assign it an array. Try to change the contents of the array (e.g., push a new element) and log the array to the console.*/

   let booleanValue = true;
   console.log(booleanValue); // this will log true to console
   booleanValue = false; // this will change the value of booleanValue to false
   console.log(booleanValue); // this will log false to console 

   const myArray = [1,2,3,4];
   console.log(myArray); // this will log [1,2,3,4] to console
   myArray.push(5); // this will add 5 to the end of the array
   console.log(myArray); // this will log [1,2,3,4,5] to console
   //even though we cannot reassign a const variable, we can still modify the contents of an array or object that is assigned to a const variable.

   /*4. **Object Mutation**:
   - Declare a variable using `const` and assign it an object. Change one of the properties of the object and log the object to the console.*/

   const myObject = {
    name: "Rahul",
    age:25
   }
   console.log(myObject); // this will log the object to the console
   myObject.name = "Rahul Sharma"; // this will change the name property of the object
   console.log(myObject); // this will log the updated object to the console
   //even though we cannot reassign a const variable, we can still modify the properties of an object that is assigned to a const variable.

   /*5. **Practice with Functions**:
   - Write a function that takes two parameters and returns their sum. Use `let` to declare a variable inside the function to store the result before returning it.
   - Write another function that takes an array as a parameter and returns the first element. Use `const` to declare the array inside the function.*/
   
   function sum(a,b){
    let result = a + b; // this will store the sum of a and b in result
    return result;
   }
   console.log(sum(5, 10)); // this will log 15 to the console

   function getFirstElement(arr) {
    const firstElement = arr[0]; // this will store the first element of the array in firstElement
    return firstElement;
   }
    console.log(getFirstElement([6,7,8,9])); // this will log 6 to the console
    //even though the array variable firstElement is declared using const, we can still access the elements of the array and return the first element.

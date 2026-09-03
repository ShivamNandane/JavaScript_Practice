/*Destructuring is a JavaScript syntax that lets you take values out of an object or array
 and put them directly into variables. 
 Destructuring is more flexible and is used constantly with objects, arrays, function parameters, 
 React props, API responses, hooks, and module imports.*/

 //Example 1 

 //without destructuring
 const user1 = {
  name: "Rahul",
  age: 28,
  city: "Pune"
};

console.log(user1.name);
console.log(user1.age);
console.log(user1.city);

//with destructuring 
const {name, age, city} = user1;

console.log(name);
console.log(age);
console.log(city);


//similarly we can use destructuring for API response
const response = {
  data: [1,2,3,4],
  status: 200,
  error: null
};

const { data, status, error } = response;
console.log(response);

//similarly we can use destructuring for React props
//Instead of:
function UserCard(props) {
  return `${props.name} - ${props.age}`;
}
console.log(UserCard({ name: "John", age: 25 }));

//we can write
function UserCard2({ name, age }) {
  return `${name} - ${age}`;
}
console.log(UserCard2({ name: "John2", age: 26 }));

//sometime functions can return values in return statement
function getUser() {
  return ["Rahul", 28];
}

//we can destructure in a variable it as 
const [name1, age1] = getUser();
console.log(name1 , age1);


//Suppose the API gives you:

const user2 = {
  name: "John3",
  age: 27
};
//You want your variable to be called userName.
//You cannot do:
const { userName } = user2;
//console.log(userName); //undefined, because JavaScript will look for a property called userName.

//Instead:
const { name: userName1 } = user2; 
console.log(userName1); //prints John3
/*This means:
 property       variable
   ↓              ↓
 name    →    userName
 Equivalent to:
 const userName = user.name;*/


 //-Nested destructuring.

 //Question code.
 
 const apiResponse = {
  data: {
    user: {
      id: 42,
      name: "Ananya",
      email: "ananya@example.com",
      address: {
        city: "Pune",
        country: "India"
      }
    }
  },
  status: 200
};

/*Write destructuring code that gives you these variables:

userId
userName
email
city
status

with these values:

userId   → 42
userName → "Ananya"
email    → "ananya@example.com"
city     → "Pune"
status   → 200*/

//Answer for question code.
{
const {
  data: {
    user: {
      id: userId,
      name: userName,
      email,
      address: {
        // city: city2
        city
      }
    }
  // },status: status2 
  },status
} = apiResponse;


console.log(userId);
console.log(userName);
console.log(email);
console.log(city);
console.log(status);
}

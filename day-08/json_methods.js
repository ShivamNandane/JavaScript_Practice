const response = `
{
  "id": 101,
  "name": "Amit",
  "age": 30,
  "isActive": true,
  "skills": [
    "JavaScript",
    "React"
  ],
  "address": {
    "city": "Pune",
    "pincode": 411001
  }
}
`;

/*Write code that converts response into a JavaScript object called: user

Then print:
Amit
30
Pune
*/

const user = JSON.parse(response);
console.log(user.name,user.age,user.address.city); //Amit 30 Pune

/*Modify it
Change:
age → 31
city → Mumbai

and add:
"React Native"*/

const updatedUser = JSON.parse(response);
updatedUser.age = 31;
updatedUser.address.city = "Mumbai";
updatedUser.skills.push("React Native");
console.log(updatedUser);

/*Serialize it
Convert your updated object back into a JSON string.*/

const convertedUpdatedUser = JSON.stringify(updatedUser);
console.log(convertedUpdatedUser);
console.log(typeof response); //string
console.log(typeof user); //object
console.log(typeof updatedUser); //object
console.log(typeof convertedUpdatedUser);//string


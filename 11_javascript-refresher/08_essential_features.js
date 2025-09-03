let hobbies = ["basketball", "volleyball", "chess"];

hobbies.map(hobby => console.log(hobby));

let student = { name: "nicklee", age: 21 };
let { name, age } = student;

console.log(name);
console.log(age);

let originalArray = [1, 2, 3];
let newArray = [...originalArray, 4, 5];

console.log(newArray);

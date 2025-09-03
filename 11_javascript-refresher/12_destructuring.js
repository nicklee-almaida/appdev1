const person = {
  name: "nicklee",
  age: 21
};

const hobbies = ["basketball", "volleyball", "chess"];

const { name, age } = person;
const [hobby1, hobby2, hobby3] = hobbies;

function printName({ name }) {
  console.log(name);
}

console.log(name);
console.log(age);
console.log(hobby1);
console.log(hobby2);
console.log(hobby3);
printName(person);

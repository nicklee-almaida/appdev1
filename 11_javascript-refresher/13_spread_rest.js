const numbers = [1, 2, 3];
const user = { name: "nicklee", age: 21 };

const extendedNumbers = [...numbers, 4, 5];
const extendedUser = { ...user, hobby: "basketball" };

function sum(...args) {
  return args.reduce((total, num) => total + num, 0);
}

console.log(extendedNumbers);
console.log(extendedUser);
console.log(sum(1, 2));
console.log(sum(1, 2, 3, 4, 5));

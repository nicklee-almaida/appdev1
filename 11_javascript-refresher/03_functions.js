function greet(name) {
  return "Hello, " + name + "!";
}

const square = (num) => num * num;

function calculator(a, b) {
  return {
    sum: a + b,
    product: a * b
  };
}

console.log(greet("nicklee"));
console.log(square(5));
console.log(calculator(3, 4));

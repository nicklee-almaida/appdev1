let favoriteFoods = ["pizza", "sushi", "burger"];

favoriteFoods.push("pasta");
favoriteFoods.shift();

for (let food of favoriteFoods) {
  console.log(food);
}

let likedFoods = favoriteFoods.map(food => "I like " + food);
console.log(likedFoods);

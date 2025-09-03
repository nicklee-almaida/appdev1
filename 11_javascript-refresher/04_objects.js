let aboutMe = {
  name: "Nicklee",
  age: 21,
  course: "BSIS",
  introduce() {
    console.log("Hi, my name is " + this.name + " and I am " + this.age + " years old.");
  }
};

aboutMe.hobby = "Watching anime";

aboutMe.introduce();
console.log(aboutMe);

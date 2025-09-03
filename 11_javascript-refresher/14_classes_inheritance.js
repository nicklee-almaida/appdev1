class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log("Hi, I am " + this.name);
  }
}

class Student extends Person {
  study() {
    console.log(this.name + " is studying");
  }
}

const person = new Person("nicklee");
person.sayHello();

const student = new Student("nicklee");
student.sayHello();
student.study();

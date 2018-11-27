class Person {
  constructor(name, sex, age) {
    this.name = name,
    this.age = age,
    this.sex = sex
  }
  sayHello() {
    return `I am ${this.name}, ${this.age} years old`
  }
}

console.log(Object.keys(Person.prototype));
console.log(Object.getOwnPropertyNames(Person.prototype));
// const ywj = new Person('游文举','','21');

// console.log(ywj.sayHello());

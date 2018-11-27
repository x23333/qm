function Person(name) {
  this.name = name; // 必须传参
  this.colors = ['red', 'blue', 'green']
}

Person.prototype.getName = function () {
  console.log(this.name)
}

function Child(name, age) {
  Person.call(this, name); // == super()  只取属性 不能拿到父类的方法
  this.age = name;
}

Child.prototype = new Person();
Child.prototype.constructor = Child;
Child.prototype.sayHello = function() {
  console.log(`Hi! i am ${this.name}, I am ${this.age} years old`);
}
var c1 = new Child('asd','21');
c1.getName();
c1.sayHello();
c1.colors.push('white');
console.log(c1.colors)

console.log(Child.prototype.constructor)

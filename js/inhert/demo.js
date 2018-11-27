function Person() {
  this.name = 'kevin';
}
// Person 函数  this指针 -> new Object
// js 本没有类 只有对象 Object 

// 原型链对象 {} prototype 任何函数都有的属性
Person.prototype.getName = function() {
  console.log(this.name);
}


// 原型式继承
function Child() {
  this.name = 'aa'
}
Child.prototype = new Person();

var c1 = new Child();
// c1.name.push('aaa');
c1.getName();
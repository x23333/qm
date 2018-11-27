// new ? 实例化过程是怎么底层
// Otaku 抽象类
function Otaku(name, age){
  this.name = name;
  this.age = age;
  this.habit = 'galgames';
}

Otaku.prototype.strenth = 60;
Otaku.prototype.sayYouName = function() {
  console.log('I am '+ this.name);
}
var person = new Otaku('kevin', '21');

// new 
// 1. 返回一个实例{}， 拥有Otaku 函数中加的那些属性
// 2. 实例可以访问到Otaku.prototype 中的属性

// new ? JS 关键字

function objectFactor() {
  var obj = {},
  Constructor = [].shift.call(arguments);
  console.log(arguments);
  // 1. 返回新的空对象
  // 2. this 要指向新的对象
  // fn.apply(obj, ...args);
  // obj 上拥有constructor 上所有属性
  Constructor.apply(obj, arguments);
  obj._proto_ = Constructor.prototype;
  console.log(obj._proto_)
  return obj;
}
// 1 构造函数 2 其余是构造函数需要的参数
const gege = objectFactor(Otaku,'Kevin', 21);
console.log(gege.name);
gege._proto_.sayYouName();
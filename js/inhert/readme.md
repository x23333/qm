1. js 本没有类 除了基础数据类型外， 只有对象， 将对象的prototype指向要继承的对象， 
2. prototype 是函数的属性
3. 继承三步 
  - 父类的构造函数执行一下， 相当于super()
  - prototype 属性指向 父类的实例。
  - 将prototype.constructor 指向构造函数

类 Person 三部分 
1. 构造函数 new Fn() {} <= this 
2. 构造函数 prototype 属性 方法 
  对象沿着原型链取查找方法
3. 构造函数 和原型链是有联系的
  Person.prototype.consrtuctor() 


- typeof 其实复杂数据类型 只有function 和 Object 是js原生支持的 其他的都是变种
Function VS Object 
一等对象， js 才是真正的面向对象
函数可以被执行的对象
可以当做object 的构造函数

- prototype 属性只属于函数
  _porto_  函数和方法都有此 私有属性

一个对象的 _proto_ 属性指向的那个对象B， B就是A的原型对象(父对象)， A就能拿到B中的所有属性和方法， 和B的父亲的属性和方法 
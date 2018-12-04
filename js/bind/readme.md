1. this 由函数调用方式
  普通函数 对象的方法  事件处理函数 闭包中
2. this 作用域手动指定
  call apply 也可以指定作用域， 但区别是参数 call， 序列， apply数组
  bind 可以延后执行 (因为生成了闭包，有个新函数) 返回一个新函数， 并且内部的this 指定为第一个参数
3. 手写一个 bind
  Function.prototype.bind = (直接写改Function原型链的bind)

4. bind 是展示this  闭包  函数式编程  原型链 最直接的例子
  this: 
  - apply 
    手动指定函数的执行中的this为第一个参数
     bind 是基于apply手动指定this 为绑定对象的
  - 闭包区域
    this 由调用方式决定为被绑定的函数就是this  self=this  在闭合空间会一直存在

5. 闭包 
  函数嵌套函数 闭包中的变量可以一直被调用
6. 函数式编程
  bind 返回一个新函数， 解决了事件函数的this丢失问题
  在一般的事件listen 中 this 会指向事件对象 target    在react组件式开发， 或者是面向对象有一个需求将事件的处理函数作为组件类的方法， 即延时调用， 同时又手动指定this
  apply + 函数式
  return function () {
    self.apply(context)
  }
7. 原型链
  Function.prototype.bind 
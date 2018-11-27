new 做了什么？ 
let p = new Person();
p 是 Object类型， Person 函数类型 typeof
1. Parent 被执行， 加了new 后， Person 函数 会在p 的作用域下执行， this指向p 构造函数里的属性被当做p的属性被创建
2. P._proto_ 指向Person.prototype  p 继承了Person.prototype 的属性和方法
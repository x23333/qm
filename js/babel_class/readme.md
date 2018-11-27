1. babel class 编译
.babelrc 不可少， presets 数组 env
- js 面向对象是原型式的 es5
function Preson() {} 构造函数
Preson.prototype = {}
es6 class constructor 只不过是语法糖而已

- es5 可以作为普通函数来执行 
  class es6 babel 编译时杜绝？

-es6 的 prototype 属性不可用枚举enumerable 
Object.keys()
Object.getOwnPropertyNames() 得到一个对象的自有属性
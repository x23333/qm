- this
  指针
  1. 与函数的运行方式有关
  > 作为事件处理函数， this 指向事件发生的对象
  >　是箭头函数　this　指向父级的　this　
  >　普通函数　this　指向全局　window（前）　global（后）
  >　作为对象的方法被执行，　this　指向对象

  - JS 数据类型
  基础类型
    数值型，字符型，布尔型，undefine，null，Symbol
  复杂类型
    Object
      数组  对象字面量  函数  
  typeof  不能区分
  找 call 工具可以通过Object.prototype.toString.call(variable);
  [Object Array]
- transition

- classList
contains 是否有某类名
remove 
add
toggle
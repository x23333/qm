手写promise A+ 规范

js 回调 异步解决 出现了倒三角式的回调地狱
Promise A+ 规范

是一个类， 构造函数 可以resolve reject
返回的就是promise 的实例 then 方法

1. Promise 将 exector 封装在构造函数内部， 并提供reslove reject 两个函数给executor 到时候回调

2. then 是同步的， 跟promise 构造函数一样， 属于语法的一方面， onResolveCallBacks 存储起来 并与this 绑定

3. exector 高阶函数 才是真正的主战场， 负责this.status this.value this.reason 的处理
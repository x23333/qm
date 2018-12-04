var foo = {
  value: 1
}
var obj = {
  value: 2
}
function bar (name, age) {
  console.log(this.value)
}
// 新函数 
var bindFoo = bar.bind(foo);// 新建一个函数
var bindObj = bar.bind(obj);
bindFoo(); // 新生的函数可以异步执行
bindObj();
console.log(typeof bindObj)
bar.call(obj)
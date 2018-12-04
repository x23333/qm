Function.prototype.bind2 = function(context, args) {
  // console.log('bind2');
  // 1. 返回被绑的函数
  // 2. 新函数在运行的时候， this指向context
  var self = this; // bind2 是作为对象上的方法来调用的 所以this 指向这个对象
  var args = Array.prototype.slice.call(arguments, 1);
  return function() {
    // 这里的this指向全局
    var bindArgs = Array.prototype.slice.call(arguments);
    self.apply(context, args.concat(bindArgs))
  }
  // 用 () => {} 可以省下一步 self = this
  // return () => {
  //   this.apply(context)
  // }
  
}
var obj = {
  value: 1
}
const foo = function(name, age) {
  console.log(this.value);
  console.log(name);
  console.log(age);
}
const fooBar = foo.bind2(obj, 'daisy');
fooBar(18);  //函数名 函数体

// foo(obj)
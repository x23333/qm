* 生成器函数 封装着异步顺序执行的代码 
  yield 停下来 右边为promise 左边为待reslove 之后的data
生成器函数调用得到生成器 dataGen = steps() dataGen 就可被迭代 next 一下
{value: 上一次拿到的data , done: false 表示函数中的需要迭代的是否完成 }
Iterator  
- 多个promise 对象如何用一天then 链, 解决异步问题， 让代码同步执行
  new Promise((reslove, reject) => {
    异步执行代码， reslove, reject
    reslove(传出对象)
  })
  每个Promise 对象都是可以thenable 的
  在then的函数里
  then(res => res.json) 这里的res.json 也是一个Promise
  显示的返回一个promise对象， 继续执行下去
  不如await 好用
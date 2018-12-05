Ajax Google Suggestion
猜出用户想搜索的内容
用户变输入(input)边建议(ajax 后端去返回 list dom)
react onChange input
以前用户搜 只要向后端请求一次 
频繁的被触发 减少一些， 不会影响效果
节流 在一段时间只执行一次 (300ms)
限制事件执行的方式 防抖和节流

使用loadsh _.throttle(fn, time)

onmousemove 频繁发生， 
throttle 在一段时间只执行一次

1. 使用时间戳 + 闭包
2. 使用定时器
区别： 实现的方法， 体验的细节， 时间戳用于是先为0  previous now-previous > wait 先执行
  setTimeout timeout null,  是在wait 到点后执行
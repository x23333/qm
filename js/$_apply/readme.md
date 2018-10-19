- 性能优化
  script 阻塞型标签 读到该标签就立即执行 不会先读下面的内容
  页面的显示， painting 绘制 排列 重绘 重排
  生命周期 函数 window.omload document.DOMContentLoadeds

  js 开始 不要阻止dom 的绘制 但是也不要等到window onload 之后
  DOMContentLoadeds dom ready 不用等到资源如img 都下载完

- $(callback)
  jquery $第一种使用用途是dom ready 事件
  $(function(){
    js 在这里写
  })

  $(selector) 用于选择元素
  动态页面
  可以不用等数据取出来， 先显示页面， 再去取数据， 快得多。
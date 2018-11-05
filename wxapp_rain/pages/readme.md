canvas 游戏及特效
小程序里的canvas 大小是px scale 
绘图API 跟web中有区别

ctx + 绘图API 将绘制的细节封装进去
画布 wx.createCanvasContext() 跟web中有区别的地方 他的实现使用了IOS/Android 的一套
封装？ 绘图这块， 封装到 utils 里
canvas-id="effect" 
ctx,
画布的大小 解构 width scale height 
drawEffect(width, height, scale, ...) 函数中要用到这些实参
可以用 this.data.width ... 但是会多次用到this.data 对程序消耗加大

utils 
  在小程序里canvas 特效只是一部分， 将它抽象封装， 有利于将复杂部分隐去， 适合多人合作
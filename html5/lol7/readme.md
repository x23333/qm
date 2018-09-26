- 可以使用html表达的一定不要用图
- inline 元素不能设置宽高（如：<a>）
  使用display：inline-block 来设置为改变该元素的属性
- 节日活动页
- bg.jpg 是雪碧图 sprites
  网页打开速度，（前端制作的一切）
  速度杀手是 http请求数
  img src
  link href
  script src
  都要 http 请求去下载
  html 这外，
  并发http请求数是有限的，（雪碧图是将所有图放在一张图里 就将n次的http请求化为一次）


- html Css类名，积累取名词汇量，（别瞎取了）
- 背景很华丽，页面写法很难
  将背景分离出来盒子， 单独做，
  用bg_$*n 组合将背景铺在下面
  z-index 上下铺（层）的关系（如PS层）
  .bg z-index:1
  .main z-index:2
  .bg position:absolute 定位之后离开正常的文档流，
  .main 将会跟它重合。
  
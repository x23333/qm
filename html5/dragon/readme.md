- 手机的尺寸
  px 在手机端有问题
  css 像素 px retina     750px          818px
  硬件的物理尺寸 iPhone 8 375pt   8 plus 414pt


- 相对单位
  rem 相对于 html 上设置的font-size
  em 单位， 相对于自生的font-size来的
  vh vw 单位 不管任何设备，高为100vh， 宽为100vw
  将设备宽度的十分之一作为html 的font-size， 10 rem就会等于整屏宽度，方便生成栅格系统

- inline-block 
  做布局可以将inline 元素变的inline ，跟兄弟之间良好相处，但是个标签之间的换行符会导致有间隙,
  解决方法
  1. 父元素上设置font-size 为 0
  2. 把各个标签首尾相连 ，去除换行符（ps:不enter）

- 自适应网页 RWD   
  rem 相对单位， 动态的生成html font-size 
  结合10rem 方案 flexible
  1. dom html
  2. 将设备宽度的十分之一给html的font-size 
1. 分析布局+建立html 结构 （6盒套6鼠）
2. box-sizing
   盒子模型
   默认 width height 设置是对盒子模型里的内容的设置，然而元素在页面上的真正占的位置是整个的盒子模型， 内容>panding>border>margin
   元素出现在页面上，其实是一个paiting绘制的原则。

   解决？？？
   box-sizing: border-box   -->   占位大小 = border+padding+content = 设置的width

   width = 100px
   border = 10px
   padding = 10px 

   先分配border -> padding -> content --> content = 80px
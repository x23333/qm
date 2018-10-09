- 浏览器显示html + css
    1. html 文件
    html 标签，dom 树
    解析文档树
    解析css 名为渲染树
    浏览器会 放置元素 并计算出它们的位置等

- BFC 
    1. 给父元素加上overflow: hidden 可以创建一个格式化的上下文环境， 定义它可以得到子元素的高度

- stylus
    css 的预编译系统 有自己的语法规则，
    写的是.styl 文件，通过 stylus .styl -o .css 命令编译为css文件
    1. 省去了很多的约定 

    stylus style.styl -o css.css
    使用stylus编译 .styl文件 输出到css.css 文件
    浏览器要的是css 文件
    stylus -w  .styl -o .css 实时监听并修改
    live-server 监听css文件来刷新页面
  
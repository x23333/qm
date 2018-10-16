如何设计一个跨终端的栅格系统， 4等分(PC), 3等分(IPAD), 2等分(手机)

Twitter Bootstrap 是一个自适应的前端框架， 
在一个col 上定义多个尺寸
media query
.col-lg-n 超大               min-width 1200px
.col-md-n 中等屏幕 多为笔记本 min-width 1000px
.col-sm-n ipad > 768 || < 1024 min-width 768px 
.col-xs-n 手机               max-width 767px

.container
.row
.col
页面布局

float 具有更好的兼容性
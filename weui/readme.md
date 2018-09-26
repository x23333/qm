- css 命名规范 BEM
  Block
    页面是由多个 Block 构成的， 跟其他的 block 区分出来， tabbar 
    Element__
    在区块中担负的职责，取唯一性的名字
      并不是简单的父子关系
      __lable
      __icon
    Modifier 
     状态的修改
     __item_on

- WEUI
  微信UI规范, 内嵌公众号， 小程序，调起webview， 为了让用户体验一致， 让用户有认同感。
  mobile web APP
  前端界面框架 weui.css
- 组件
  大部分的项目，70%都是由通用组件构成的,组件， 拿来就能用。
  1. tabbar 
  .tabbar > a.item > (span > img + span.badge) + p  
    词汇量 组件词汇 tabber badge 一般词汇  item
    良好的 结构 和 语义化标签  
    flex 1:1:1



- http 状态码
  有状态码方便分析
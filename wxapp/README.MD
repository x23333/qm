- 小程序
  内嵌在微信这个超级App里， 是WebView + 微信一些App的混合
  WebView App 内嵌页面技术 让App开发使用上web 技术，比Android/IOS 更快
  缺点是性能慢
  在拍照， tabber，navigationbar 等一些关键的地方又能调用原生微信里的原生组件， 提升性能
  WXML 没有div 叫view
  WXSS 使用弹性布局 替换css
  js MVMM

- 架构
  小程序的架构是极其简单的
  app.js 入口文件
  app.json 项目配置文件 pages 找到所有页面
  1. 注册所有文件
  2. window 的设置 App 名字， navigationbar 背景色 文字色
  3. tabber 如果app 需要底栏
  pages 小程序由页面组成
  主要代码都在这里
  1. wxml 写结构
  2. wxss 样式
  3. js 逻辑
  4. json 文件 页面级别的配置文件

- 组件
  小程序提供了很多内置的功能组件
  swiper 声明式组件 html 标签 功能贫瘠，
  组件集合了很多标签及功能
  swiper>swiper-item  
  indicator-dots="{{true}}"
  {{js 区域}} 模板符号

- 数据驱动的界面
  界面 数据 传统做法是分别由前端后端分开做的。
  大前端 让静态界面活起来，直接绑定数据
  {{}}界面模板
  小程序为数据绑定提供了约定
  Page({
    data:{
      数据区域 -> {{}}
    }
  })

- 指令
  wx:for 循环输出指令 如 wx:for="{{slides}}"  装在block中
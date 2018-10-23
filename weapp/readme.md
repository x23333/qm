1. 组件化
  Component 构成Page的一块基石， 可复用， 可传自定义属性定制
  小程序自身没有提供的， 我们可以在components文件夹里自定义
  可以使用第三方提供的自定义组件

  vant 小程序基于 此组件框架。 70% 的工作不用做了， 经历了有赞电商团队十几万的项目经验， 类电商的项目， 用它没错
2. page.json usingComponent 声明
  wxml 文件由组件组成
3. 有赞怎么写出来vant的
4. van-search 用法聊点
  组件是代表着一堆在其内部的标签或子组件， 进行统一的向外提供组件功能
  - 外部
    wxml 调用组件
  - 内部
    vant 内部， 在使用时， 不用操作的
  - 内外交流 props
    定制性， show-action use-action-slot
5. slot 插槽
  让组件内部， 插上一个位置标记， 调用组件时， 将定制标签传到slot处， 实现了组件的定制
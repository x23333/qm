同军队危急时刻接管城市
应用只是界面？？ 当然要路由， 路由接管一切
按url 分发组件 (Page级别)
根路由App
  -> path '/' 页面A级别组件(Page) -> ( 容器组件Container -> 函数式组件(present))
  -> path '/about' 页面B级别组件(Page) -> ( 容器组件Container -> 函数式组件(present))

- Link 
  a 标签 太弱了， 所以react-router 给我们Link 组件
  to href params ...  满足单页应用需要的一切
- h5 的 history api 更新 url ， 页面不用刷新 
- ref react 中的 id 可以用它来找到JSX的片段 
  React.createRef() 返回一个不重复的id 
  this.searchRef.current

- context 最后一个大佬 component lifecycle state, 
事件 函数式组件
  this.context.router.history.push('/search/:')

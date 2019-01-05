redux 父子组件， 兄弟组件传值很麻烦
context 新的希望 react-redux 基于它来实现
全局状态
打破层次关系， 实现共享
redux ？ context

- context API redux 依靠它
  childComtextTypes = {
    store: PropTypes.object
  }
  getChildContext() - {
    return { store: state}
  }

- context 四步 
  在顶层组件中规定数据类型 ChildContextTypes
  在顶层组件中设置数据 getChildContexy 
  后代组件规定数据类型 contextTypes 
  后代组件获取数据 this.context

太繁琐了， 不是react语法的烦， 是代码的大量重复
api 代码的重复 ， dry don't repeat yourself
重复了 生命周期 _setUp() contextTypes
connect react-redux HOC 封装以上代码
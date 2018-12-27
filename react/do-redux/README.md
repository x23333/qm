- redux 让所有的状态共享， 可读， 写要遵守规则， 这也是redux 的基本规则， 专用action可以修改state(执行相应reducer),组件只能dispatch一个action
- reducer 是闺房 不可用直接调用 action才可以
 要保护好数据 设置了reducer 提供并且精确计算状态的函数， 组件只有dispatch 一个action
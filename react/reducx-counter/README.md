- 代码结构
  store  状态仓库 state多 难管理 共享与管理
- 组件通信
  api 

统一状态树 Store 唯一 
1. store.getState() 读
2. store.dispatch({type: 'INCREMENT'})
  相应reducer 得意计算 返回新的状态
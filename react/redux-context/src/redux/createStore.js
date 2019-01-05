export const createStore = (state, storeChange) => {
  let store = state || {};
  // 订阅发布者 listener
  const listeners = [];
  const subscribe = (listen) => {
    listeners.push(listen);
    // console.log(listeners)
  }
  const dispatch = (action) => {
    const newStore = storeChange(store, action);
    store = newStore;
    listeners.forEach(item => item());
  }
  const getStore = () => {
    return store;
  }
  return {store, dispatch, subscribe,getStore};
}
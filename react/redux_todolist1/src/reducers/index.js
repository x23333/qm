import { ADD, DELETE } from '../contants/todos';
import { combineReducers } from 'redux';

const INITIAL_STATE = {
  todos: [
      { id: 0, text: '第一条todo'}
  ]
}
function todos(state = INITIAL_STATE, action) {
  let todoNum = state.todos.length;
  switch(action.type) {
    case ADD: 
    console.log(action.type)
      return {
        ...state, todos: state.todos.concat({
          id: todoNum,
          text: action.data
        })
      }
    case DELETE: 
      let newTodos = state.todos.filter(item => {
        return item.id !== action.id;
      })
      console.log(newTodos)
      console.log('5');
      return {
        ...state, todos:newTodos
      }
    default:
      return state;
  }
}

export default combineReducers({
  todos
})
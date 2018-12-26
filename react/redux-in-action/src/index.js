import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider, connect} from 'react-redux';

// actionType 常量， 声明动作类型 统一查询及修改

const CHANGE_VISIBILITY = 'CHANGE_VISIBILITY';
const ADD = 'ADD';
const SUBTRACT = 'SUBTRACT';

const visibilityReducer = (state=true, action) => {
  if(action.type === CHANGE_VISIBILITY){
    return action.visible
  }
  return state;
}

const getVisbility = state => state.visible;
const getCounterValue = state => state.counter.value;

const counterReducer = function(state={value: 0},action) {
  if(action.type === ADD){
    return {value: state.value+1}
  }else if(action.type === SUBTRACT) {
    return {value: state.value-1}  
  }
  return state;

}

const rootReducer = combineReducers({
  visible: visibilityReducer,
  counter: counterReducer
});

const initialState = {
  visible: true
}


function Counter({value, add, subtract}){
  return(
    <div>
      <p>Value: {value}</p>
      <button onClick={add}>Add</button>
      <button onClick={subtract}>Substract</button>
    </div>
  )
}

const store = createStore(rootReducer,initialState)

const ConterConnected = connect(state => ({
  value: getCounterValue(state)
}),
dispatch => ({
  add: () => dispatch(add()),
  subtract: () => dispatch(subtract())
}))(Counter);

const add = () => ({type:ADD});
const subtract = () => ({type:SUBTRACT});
const changeVisibility = (visible) => ({type: CHANGE_VISIBILITY, visible})

const Visibility = ({changeVisibility}) => (
  <div>
    <button onClick={() => changeVisibility(false)}>Visible</button>
  </div>
)
const VisibilityConnected = connect(null,dispatch => ({
  changeVisibility: value => dispatch(changeVisibility())
}))(Visibility);


const App = ({visible}) => (
  <div>
    <VisibilityConnected />
    {visible && <ConterConnected />}
  </div>
);
const AppConnected = connect(
  state => ({
    visible: getVisbility(state)
  })
)(App)



ReactDOM.render(<Provider store={store}>
  <AppConnected />
</Provider>,document.getElementById('root'))
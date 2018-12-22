const defaultState = 0;
const reducer = (state = defaultState, action) => {
  switch(action.type){
    case 'ADD':
      return state + action.payload
    default:
      return state;
  }
}

const actions = [
  { type: 'ADD', payload: 0},
  { type: 'ADC', payload: 2},
  { type: 'APC', payload: 3}
]

const state = reducer(1, {
  type: 'ADD',
  payload: 2
}) 
console.log(state)
import React from 'react';
import PropTypes from 'prop-types';



const Counter = ({value, onIncrement, onDecrement, onIncrementAsync}) => (
  <div>
    <button onClick={onIncrementAsync}>Increment after 1 seconds</button>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
    <hr/>
    <div>Clicked: {value} times </div>
  </div>
);

Counter.PropTypes = {
  value: PropTypes.number.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onIncrementAsync: PropTypes.func.isRequired
}
export default Counter;
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'react-logger';
import { users } from '../reducer/reducer'

const store = createStore(
  combineReducers(users),
  applyMiddleware(logger)
)

export default store;

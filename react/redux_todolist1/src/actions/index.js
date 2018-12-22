import { ADD, DELETE } from '../contants/todos';

export const add = (data) => {
  return {
    data,
    type: ADD
  }
}
export const del = (id) => {
  return {
    id,
    type: DELETE
  }
}
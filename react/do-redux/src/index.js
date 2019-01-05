import {state } from './redux/state.js';
import {storeChange} from './redux/storeChange.js'
import {createStore} from  './redux/createStore.js'

const {store , dispatch} = createStore(state, storeChange);

function renderHead(state) {
  const head = document.getElementById('head');
  head.innerText = state.text;
  head.style.color = state.color;

}

function renderBody(state) {
  const body = document.getElementById('body');
  body.innerText = state.text;
  body.style.color = state.color;
}

function renderApp(store) {
  renderHead(store.head);
  renderBody(store.body);
}

renderApp(store);
dispatch({type: 'BODY_TEXT',text: '修改'});
renderApp(store);

import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import getRootReducer from './reducers';

export default function configureStore() {
  let store = createStore(getRootReducer(), applyMiddleware(thunk));
  return store;
}

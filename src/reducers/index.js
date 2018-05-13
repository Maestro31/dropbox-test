import { combineReducers } from 'redux';
import dropboxReducer from './dropboxReducer';

export default function getRootReducer() {
  return combineReducers({
    dropboxReducer: dropboxReducer
  });
}

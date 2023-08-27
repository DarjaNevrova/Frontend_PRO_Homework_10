import { combineReducers, createStore } from 'redux';
import accountReducer from './reducer/accountReducer';

const rootReducer = combineReducers({
  account: accountReducer 
});

export const store = createStore(rootReducer);
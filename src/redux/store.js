import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import productsReducer from './productsRedux';
import cartReducer from './cartRedux';

const subreducers = {
  products: productsReducer,
  cart: cartReducer,
};

const reducer = combineReducers(subreducers);
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

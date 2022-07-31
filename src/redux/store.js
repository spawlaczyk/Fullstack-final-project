import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import productsReducer from './productsRedux';
import cartReducer from './cartRedux';
import ordersReducer from './ordersRedux';

const subreducers = {
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
};

const reducer = combineReducers(subreducers);
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

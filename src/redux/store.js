import { createStore, combineReducers, applyMiddleware } from 'redux';
import productsReducer from './productsRedux';
import cartReducer from './cartRedux';
import ordersReducer from './ordersRedux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const subreducers = {
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
};

const reducer = combineReducers(subreducers);
const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

export default store;

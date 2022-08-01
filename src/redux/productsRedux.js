import axios from 'axios';
import { API_URL } from '../config';

// selectors
export const getAllProducts = ({ products }) => products.data;
export const getProducyById = ({ products }, productId) => products.data.find(product => product._id === productId);
// actions
const createActionName = actionName => `app/products/${actionName}`;

const START_REQUEST = createActionName('START_REQUEST');
const REQUEST_ERROR = createActionName('REQUEST_ERROR');
const END_REQUEST = createActionName('END_REQUEST');
const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');

export const startRequest = payload => ({ payload, type: START_REQUEST });
export const requestError = error => ({ error, type: REQUEST_ERROR });
export const endRequest = payload => ({ payload, type: END_REQUEST });
export const loadProducts = payload => ({ payload, type: LOAD_PRODUCTS });

// THUNKS
export const loadProductsRequests = () => {
  return (dispatch) => {
    dispatch(startRequest({ name: 'LOAD_PRODUCTS' }));

    axios
      .get(`${API_URL}/products`)
      .then(res => {
        dispatch(loadProducts(res.data));
        dispatch(endRequest({ name: 'LOAD_PRODUCTS' }));
      })
      .catch(err => {
        dispatch(requestError({ name: 'LOAD_PRODUCTS', error: err.message }));
      });
  };
};

const initialState = {
  data: [],
  request: {
    pending: false,
    error: null,
    success: null,
  },
};

// action creators
const productsReducer = (statePart = initialState, action = {}) => {
  switch(action.type) {
    case LOAD_PRODUCTS:
      return { ...statePart, data: [...action.payload] };
    case START_REQUEST:
      return { ...statePart, request: { pending: true, error: null, success: false } };
    case END_REQUEST:
      return { ...statePart, request: { pending: false, error: null, success: true } };
    case REQUEST_ERROR:
      return { ...statePart, request: { pending: false, error: action.payload.error, success: false } };
    default:
      return statePart;
  }
};

export default productsReducer;

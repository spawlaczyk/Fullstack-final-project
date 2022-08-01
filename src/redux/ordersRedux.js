import axios from 'axios';
import { API_URL } from '../config';

// selectors
export const getOrders = ({ orders }) => orders;

// actions
const createActionName = actionName => `app/products/${actionName}`;

const START_REQUEST = createActionName('START_REQUEST');
const REQUEST_ERROR = createActionName('REQUEST_ERROR');
const END_REQUEST = createActionName('END_REQUEST');

export const startRequest = payload => ({ payload, type: START_REQUEST });
export const requestError = error => ({ error, type: REQUEST_ERROR });
export const endRequest = payload => ({ payload, type: END_REQUEST });

// THUNK
export const makeOrderRequest = (order) => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      await axios.post(`${API_URL}/order`, order);
    } catch(err) {
      dispatch(requestError());
    }
  };
};

const initialState = {
  request: {
    pending: false,
    error: null,
    success: null,
  },
};

// action creators
const ordersReducer = (statePart = initialState, action = {}) => {
  switch(action.type) {
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

export default ordersReducer;

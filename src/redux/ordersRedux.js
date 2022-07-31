// selectors
export const getOrders = ({ orders }) => orders;

// actions
const createActionName = actionName => `app/products/${actionName}`;

const MAKE_ORDER = createActionName('MAKE_ORDER');

export const makeOrder = payload => ({ payload, type: MAKE_ORDER });

// action creators
const ordersReducer = (statePart = [], action) => {
  switch(action.type) {
    case MAKE_ORDER:
      return [...statePart, {...action.payload}];
    default:
      return statePart;
  }
};

export default ordersReducer;

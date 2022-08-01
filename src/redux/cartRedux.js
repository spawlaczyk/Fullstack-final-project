// selectors
export const getCart = ({ cart }) => cart;
export const getSubtotalPrice = ({ cart }) => cart.reduce((acc, item) => acc + item.qty * item.minPrice, 0);

// actions
const createActionName = actionName => `app/products/${actionName}`;

const ADD_TO_CART = createActionName('ADD_TO_CART');
const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');
const CLEAR_CART = createActionName('CLEAR_CART');

export const addToCart = payload => ({ payload, type: ADD_TO_CART });
export const removeFromCart = payload => ({ payload, type: REMOVE_FROM_CART });
export const clearCart = () => ({ type: CLEAR_CART });
// action creators
const cartReducer = (statePart = [], action) => {
  switch(action.type) {
    case ADD_TO_CART:
      // eslint-disable-next-line
      const itemInCart = statePart.find(item => item.id === action.payload.id);
      if(itemInCart) {
        itemInCart.qty = itemInCart.qty += action.payload.qty;
        itemInCart.price += action.payload.price;
        return statePart;
      } else {
        return [...statePart, {...action.payload}];
      }
    case REMOVE_FROM_CART:
      return statePart.filter(item => item.id !== action.payload);
    case CLEAR_CART:
      return statePart = [];
    default:
      return statePart;
  }
};

export default cartReducer;

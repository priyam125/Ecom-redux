import { TOGGLE_CART, ADD_TO_CART, REMOVE_FROM_CART } from "./cartActions";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

 const INITIAL_STATE = {
    showCart: false,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    // console.log(action);
    switch (action.type) {
        case TOGGLE_CART: {
            const { showCart } = action.payload
            return {
                ...state,
                showCart: showCart
            }
        }
        case ADD_TO_CART: {
            const { cartItem } = action.payload
            console.log(action.payload);
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, cartItem)
            }
        }
        case REMOVE_FROM_CART: {
            const { removedItem } = action.payload
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, removedItem)
            }
        }
        default:
            return state;
    }
}

export default cartReducer
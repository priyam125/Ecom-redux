import { TOGGLE_CART } from "./cartActions";

 const INITIAL_STATE = {
    showCart: false
}

const cartReducer = (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case TOGGLE_CART: {
            const { showCart } = action.payload
            return {
                ...state,
                showCart: showCart
            }
        }
        default:
            return state;
    }
}

export default cartReducer
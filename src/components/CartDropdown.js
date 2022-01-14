import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_CART } from "../redux/cart/cartActions";

const CartDropdown = () => {

  return (
    <div className="absolute w-60 h-80 flex flex-col p-5 border-2 border-black bg-white top-24 right-10 z-10">
      <div className="h-60 flex flex-col overflow-scroll">
      </div>
      <button className="custom-button hover:bg-white hover:text-black hover:border-2 hover:border-black">
        GO TO CHECKOUT
      </button>
    </div>
  );
};

export default CartDropdown;

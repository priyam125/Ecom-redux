import React from "react";
import { useDispatch } from "react-redux";
import { REMOVE_FROM_CART } from "../redux/cart/cartActions";

const CheckoutItem = ({ cartItem }) => {
    // console.log(props);

    const {name, imageUrl, quantity, price} = cartItem

    const dispatcher = useDispatch();


  const handleClick = () => {
    dispatcher({
      type: REMOVE_FROM_CART,
      payload: { removedItem: cartItem },
    });

    console.log();
  };
  return (
    <div className="w-full flex items-center checkoutItem-container border-b-2 border-gray-600 py-4 text-sm">
      <div className="checkout-item pr-4">
        <img className="w-full h-full" src={imageUrl}  alt="item" />
      </div>
      <span className="checkout-item">{name}</span>
      <span className="checkout-item">{quantity}</span>
      <span className="checkout-item">{price}</span>
      <div onClick={handleClick} className="pl-3 cursor-pointer">&#10005;</div>
    </div>
  );
};

export default CheckoutItem;

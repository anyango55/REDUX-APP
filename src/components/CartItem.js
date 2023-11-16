import React from "react";
import { useDispatch } from "react-redux";
import "./Cart.css";
import { cartActions } from "../store/cart-slice";
// import { cartActions } from "./../store/cartSlice";

const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();
 const increaseCartItem = () => {
  dispatch(cartActions.addToCart({
    name,
    id,
    price,
  }))
 };

  const decreaseCartItem = () => {
    dispatch(cartActions.removeFromCart(id));
  };
  // const dispatch = useDispatch();
  // const removeHandler = () => {
  //   dispatch(cartActions.removeFromCart(id));
  // };
  // const addHandler = () => {
  //   dispatch(
  //     cartActions.addToCart({
  //       id,
  //       name,
  //       price,
  //     })
  //   );
  // };
  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions" onClick={decreaseCartItem}>
        -
      </button>
      <button className="cart-actions" onClick={increaseCartItem}>
        +
      </button>
    </div>
  );
};


export default CartItem;

import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";

function App() {
  const cart = useSelector(state => state.cart);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  console.log(isLoggedIn);
  useEffect(() => {
    fetch('https://redux-cart-90b2f-default-rtdb.firebaseio.com/cartitems.json',{
      method: 'PUT',
      body: JSON.stringify(cart)
    })
  },[cart]);
  // const cartItems = useSelector((state) => state.cart.itemsList);
  // console.log(cartItems);
  return (
    <div className="App">
      {!isLoggedIn && <Auth />}

      {isLoggedIn &&  <Layout />}

      
      {/* <Layout /> */}
    </div>
  );
}

export default App;

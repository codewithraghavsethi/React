import React from "react";
import { useCart } from "../context/Cart";

const Cart = () => {
  const cart = useCart();


  // This line have a Bug Please Corect this line 

  const total = cart.items.reduce((a, b) => a + b.price, 0); 

  return (
    <div className="cart">
      <h1>Cart</h1>
      {cart &&
        cart.items.map((item) => (
          <li>
            {item.name} - ${item.price}
          </li>
        ))}

      <h5>Total Bill: ${total}</h5>
    </div>
  );
};

export default Cart;

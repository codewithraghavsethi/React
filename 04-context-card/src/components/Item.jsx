import React from "react";
import { useCart } from "../context/Cart";

const Item = (props) => {
  const cart = useCart();
  console.log("cart", cart);

  return (
    <div className="item-card">
      <h4>{props.name}</h4>
      <p>Price: ${props.price}</p>
      <button
        onClick={() =>
          cart.setItems([
            ...cart.item,
            { name: props.name, price: props.price },
          ])
        }
      >
        Add to cart
      </button>
    </div>
  );
};

export default Item;

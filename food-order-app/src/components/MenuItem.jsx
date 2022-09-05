import React, { useContext, useRef } from "react";
import CartContext from "../context/cart-context";

const MenuItem = ({ id, name, description, price }) => {
  const quantityRef = useRef();
  const ctx = useContext(CartContext);
  const addToCart = () => {
    ctx.cart.push({
      id: id,
      name: name,
      price: price,
      quantity: quantityRef.current.value
    })
    ctx.setCount(ctx.count + parseInt(quantityRef.current.value));
    // console.log('cart: ', ctx.cart)
    // console.log('itemCount: ', ctx.count)
  }
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <div>
          {name}
        </div>
        <div>
          {description}
        </div>
        <div>
          {price}
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="amountInput"></label>
          <input
            id="amountInput"
            ref={quantityRef}
            type={"number"}
            defaultValue={1}></input>
        </div>
        <button onClick={addToCart}>Add</button>
      </div>
    </div >
  );
}

export default MenuItem;
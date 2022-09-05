import React, { useContext } from "react";
import CartContext from "../context/cart-context";
const CartPopper = () => {
  const ctx = useContext(CartContext);
  const updateCart = (cartItem) => {
    let tmpCart = [...ctx.cart]
    let index = tmpCart.indexOf(cartItem)
    tmpCart[index] =
      ctx.setCart()
  }
  return (
    <div style={{ background: "#E5D3B3", padding: "5vh 5vw" }}>
      {ctx.cart.map((cartItem) => {
        return (<div key={cartItem.id}>
          <div>{cartItem.name}</div>
          <div>{cartItem.price}</div>
          <input value={cartItem.quantity} type={"number"} onChange={(event) => {
            let tmpCart = [...ctx.cart]
            let index = tmpCart.indexOf(cartItem)
            if (event.target.value <= 0) {
              tmpCart.splice(index, 1);
            }
            else {
              tmpCart[index].quantity = parseInt(event.target.value);
            }
            ctx.setCart(tmpCart)
            const tmpCount = tmpCart.reduce((prev, current) => {
              return parseInt(prev) + parseInt(current.quantity)
            }, 0)
            ctx.setCount(tmpCount)
            console.log('after ', ctx.cart, ctx.count)
          }}></input>

        </div>)
      })}
    </div>
  );
}

export default CartPopper;
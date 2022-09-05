import React, { useContext } from "react";
import CartContext from "../context/cart-context";

const Header = () => {
  const ctx = useContext(CartContext);
  return (
    <button>My Cart {ctx.count}</button>
  );
}

export default Header;
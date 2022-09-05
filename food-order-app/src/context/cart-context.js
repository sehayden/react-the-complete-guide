import React from "react";

const CartContext = React.createContext({
    cart: [],
    count: 0
})

export default CartContext;
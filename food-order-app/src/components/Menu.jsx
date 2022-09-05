import React, { useContext, useEffect } from "react";
import MenuItem from "./MenuItem";
import CartContext from "../context/cart-context";
const LIST_DUMMY = [
  {
    id: 1,
    name: 'sushi',
    description: 'finest japanese cuisine',
    price: 22.99
  },
  {
    id: 2,
    name: 'milk',
    description: 'simply refreshing milk',
    price: 5.99
  },
  {
    id: 3,
    name: 'rice',
    description: 'carb thing i don\'t really eat',
    price: 7.33
  },
  {
    id: 4,
    name: 'water',
    description: 'the ultimate resource of life',
    price: 1.88
  }
]

const Menu = () => {
  const ctx = useContext(CartContext)
  useEffect(() => {
  }, [])
  return (
    LIST_DUMMY.map((dummy) => {
      return (
        <MenuItem id={dummy.id} name={dummy.name} description={dummy.description} price={dummy.price} key={dummy.id} ></MenuItem>
      )
    })
  );
}

export default Menu;
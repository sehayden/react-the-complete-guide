import Menu from "./components/Menu";
import Header from "./components/Header";
import CartContext from "./context/cart-context";
import CartPopper from "./components/CartPopper";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={{
      cart, setCart,
      count, setCount
    }}>
      <div className="App">
        <Header></Header>
        <Menu></Menu>
        <CartPopper></CartPopper>
      </div>
    </CartContext.Provider>
  );
}

export default App;

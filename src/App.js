import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Cart from "./pages/Cart.jsx";
import { cartContext } from "./CONTEXTAPIs/index.js";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleInc = (product) => {
    const prod = cartItems.find((item) => item._id === product._id);
    if (!prod) {
      return setCartItems((prev) => [...prev, { ...product, qty: 1 }]);
    }
    const _items = cartItems.map((item) => ({
      ...item,
      qty: product._id === item._id ? item.qty + 1 : item.qty,
    }));
    setCartItems(_items);
  };

  const handleDec = (product) => {
    if (product.qty > 1) {
      const _items = cartItems.map((item) => ({
        ...item,
        qty: product._id === item._id ? item.qty - 1 : item.qty,
      }));
      return setCartItems(_items);
    }
    const idx = cartItems.findIndex((item) => item._id === product._id);
    const _cartItms = [...cartItems];
    _cartItms.splice(idx, 1);
    setCartItems(_cartItms);
  };
  return (
    <cartContext.Provider value={{ cartItems, handleInc, handleDec }}>
      <Router>
        {/* <Route path="/">
        <Home />
      </Route> */}
        <Route path="/" component={Home} exact />
        <Route path="/Product/:id" component={ProductDetail} exact />
        <Route path="/Cart" component={Cart} exact />
      </Router>
    </cartContext.Provider>
  );
}

export default App;

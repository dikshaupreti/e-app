// src/App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Header from './components/Header';
import CartService from './services/CartService';
import Product from './models/Product';
import './styles.css';

const App: React.FC = () => {
  const [cart, setCart] = useState(CartService.getCartItems());

  const updateCart = () => {
    setCart([...CartService.getCartItems()]);
  };
  
  const addToCart = (product: Product) => {
    CartService.addToCart(product);
    updateCart();
  };

  const removeFromCart = (productId: number) => {
    CartService.removeFromCart(productId);
    updateCart();
  };

  const incrementQuantity = (productId: number) => {
    CartService.incrementQuantity(productId);
    updateCart();
  };

  const decrementQuantity = (productId: number) => {
    CartService.decrementQuantity(productId);
    updateCart();
  };

  return (
    <Router>
      <div className="App">
        <Header cartItemCount={cart.length} />
        <Routes>
          <Route path="/" element={<ProductList addToCart={addToCart} />} />
          <Route path="/cart" element={
            <Cart
              cartItems={cart}
              removeFromCart={removeFromCart}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
              totalCartValue={CartService.getTotalCartValue()}
            />
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

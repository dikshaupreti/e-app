// src/components/Cart.tsx
import React from 'react';
//import Product from '../models/Product';

interface CartProps {
  cartItems: any;
  removeFromCart: (productId: number) => void;
  incrementQuantity: (productId: number) => void;
  decrementQuantity: (productId: number) => void;
  totalCartValue: number;
}

const Cart: React.FC<CartProps> = ({
  cartItems,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  totalCartValue,
}) => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item: any) => (
          <li key={item?.product?.id}>
            <img src={item?.product?.image} alt={item?.title} />
            <h3>{item?.product?.title}</h3>
            <p>${item?.product?.price}</p>
            <p>{`Quantity: ${item?.quantity}`}</p>
            <button onClick={() => incrementQuantity(item?.product?.id)}>+</button>
            <button onClick={() => decrementQuantity(item?.product?.id)}>-</button>
            <button onClick={() => removeFromCart(item?.product?.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total Cart Value: ${totalCartValue}</h3>
    </div>
  );
};

export default Cart;

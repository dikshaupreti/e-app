// src/__tests__/App.test.tsx
import React from 'react';
import { render, screen, fireEvent  } from '@testing-library/react';
import App from '../App';

test('renders home and cart links', () => {
  render(<App />);
  const homeLink = screen.getByText(/Home/i);
  const cartLink = screen.getByText(/Go to Cart/i);
  expect(homeLink).toBeInTheDocument();
  expect(cartLink).toBeInTheDocument();
});

test('adds product to cart', async () => {
  render(<App />);
  const addToCartButtons = await screen.findAllByText(/add to cart/i);
  fireEvent.click(addToCartButtons[0]);
  const cartLink = screen.getByText(/go to cart \(1\)/i);
  expect(cartLink).toBeInTheDocument();
});

test('increments and decrements product quantity in cart', async () => {
  render(<App />
  );
  const cartLink = screen.getByText(/go to cart \(1\)/i);
  expect(cartLink).toBeInTheDocument();
  fireEvent.click(cartLink);
  
  //Check if the product is added to the cart
  const productInCart = screen.getByText(/quantity: 1/i); 
  expect(productInCart).toBeInTheDocument();

  //Increment the quantity of the product in the cart
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);
  
 expect(screen.getByText(/quantity: 2/i)).toBeInTheDocument();

  //Decrement the quantity of the product in the cart
  const decrementButton = screen.getByText('-');
  fireEvent.click(decrementButton);
  expect(screen.getByText(/quantity: 1/i)).toBeInTheDocument();
});



// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  cartItemCount: number;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount }) => {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/cart">Go to Cart ({cartItemCount})</Link>
    </header>
  );
};

export default Header;

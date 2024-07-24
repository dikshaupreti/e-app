// src/components/ProductList.tsx
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import ProductService from '../services/ProductService';
import Product from '../models/Product';

interface ProductListProps {
  addToCart: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ addToCart }) => {
  
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    ProductService.fetchProducts().then(setProducts);
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;

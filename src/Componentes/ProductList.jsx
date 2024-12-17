// src/components/ProductList.js
import React from 'react';
import ProductCard from './ ProductCard';

const ProductList = () => {
  const products = [
    { id: 1, name: 'Auto Rojo', price: '$10', image: 'https://cdn.pixabay.com/photo/2017/06/01/08/29/acura-2362817_640.jpg' },
    { id: 2, name: 'Auto Blanco', price: '$20', image: 'https://cdn.pixabay.com/photo/2017/06/01/08/30/rolls-royce-2362821_640.jpg' },
    { id: 3, name: 'Auto Gris', price: '$30', image: 'https://cdn.pixabay.com/photo/2016/05/06/16/32/car-1376190_640.jpg' },
    { id: 4, name: 'Auto Negro', price: '$40', image: 'https://cdn.pixabay.com/photo/2016/09/06/13/37/maserati-gran-turismo-1649119_640.jpg' },
  ];

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;

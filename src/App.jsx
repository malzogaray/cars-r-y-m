// src/App.js
import React from 'react';
import './App.css';
import Navbar from './Componentes/ Navbar';
import ProductList from './Componentes/ProductList';
import Footer from './Componentes/Footer';




function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;


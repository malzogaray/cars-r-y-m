// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Cars R y M</h1>
      </div>
      <ul className="nav-links">
        <li>Inicio</li>
        <li>Productos</li>
        <li>Marcas</li>
        <li>Contacto</li>
        <li>Salir</li>
       <li>  <button> carrito</button> </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import React, { useState } from 'react';
import './NavBar.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

// Colores de la marca
const brandColors = {
  primary: "#EC6500",     // Naranja principal
  primaryDark: "#C45200", // Naranja oscuro
  primaryLight: "#FF8A30", // Naranja medio
  primaryLighter: "#FFB273", // Naranja claro
  cream: "#FFFCF5",       // Crema
  black: "#1A1A1A",       // Negro
  darkGray: "#333333",    // Gris oscuro
  mediumGray: "#666666",  // Gris medio
  lightGray: "#CCCCCC",   // Gris claro
  veryLightGray: "#F5F5F5", // Gris muy claro
};

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header onMouseLeave={() => setShowDropdown(false)} className="brand-header">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo"><img src="../../../public/logo_fake.png" alt="" /></div>
          <div className="navbar-search">
            <input type="text" placeholder="Buscar productos..." />
            <button><SearchIcon /></button>
          </div>
          <div className="navbar-cart">
            <a href="#cart"><ShoppingCartIcon /></a>
          </div>
        </div>

        <div className="navbar-links-container">
          <ul className="navbar-links">
            <li><a href="#home">Inicio</a></li>
            <li
              onMouseEnter={() => setShowDropdown(true)}
              className="productos-hover"
            >
              <a href="#about">Productos</a>
            </li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </div>
      </nav>

      {showDropdown && (
        <div
          className="droplist_productos"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <div className="seccion_1_drop">
            <h3>Herramientas</h3>
            <ul>
              <li>Construcción</li>
              <li>Manuales</li>
              <li>Hobbista</li>
              <li>Industrial</li>
            </ul>
          </div>
          <div className="seccion_2_drop">
            <h3>Ferretería</h3>
            <ul>
              <li>Descuentos</li>
              <li>Herramientas</li>
              <li>Tuercas</li>
              <li>Tornillos</li>
            </ul>
          </div>
          <div className="seccion_3_drop">
            <h3>Equipación</h3>
            <ul>
              <li>Hornallas</li>
              <li>Cuchillos</li>
              <li>Linternas</li>
              <li>Otros</li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
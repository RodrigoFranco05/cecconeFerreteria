import React, { useState } from 'react';
import { Link , NavLink} from 'react-router-dom';
import './NavBar.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header onMouseLeave={() => setShowDropdown(false)} className="brand-header">
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/">
          <div className="navbar-logo"><img src="../../../public/logo_fake.png" alt="" /></div>
          </Link>
          <div className="navbar-search">
            <input type="text" placeholder="Buscar productos..." />
            <button><SearchIcon /></button>
          </div>
          <div className="navbar-cart">
            <Link to='/carrito'><ShoppingCartIcon /></Link>
          </div>
        </div>

        <div className="navbar-links-container">
          <ul className="navbar-links">
            <li>
              <Link to="/">  
              Inicio
              </Link></li>
            <li
              onMouseEnter={() => setShowDropdown(true)}
              className="productos-hover"
            >
              <Link to='/productos' >
              Productos
              </Link>
            </li>
            <li>
            <Link to='/contacto' >
              Contacto
              </Link>
              </li>
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
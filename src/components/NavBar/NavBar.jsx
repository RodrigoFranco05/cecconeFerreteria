import React from 'react'
import './NavBar.css'

const NavBar = () => {
   
console.log("Navbar renderizado");
  return (
    <header>
    <nav className="navbar">
        <div className="navbar-container">
        <div className="navbar-logo">Logo</div>
        <div className="navbar-search">
            <input type="text" placeholder="Search..." />
            <button>🔎</button>
        </div>
        <div className="navbar-cart">
            <a href="#cart">Cart</a>
        </div>
        </div>

        <div className='navbar-links-container'>
            <ul className="navbar-links">
            <li><a href="#home">Inicio</a></li>
            <li><a href="#about">Productos</a></li>
            <li><a href="#contact">Contacto</a></li>
        </ul>
        </div>
    </nav>
    <div className='droplist_productos'>
        <div className='seccion_1_drop'>
          <h3>Herramientas</h3>
          <ul>
            <li>contruccion</li>
            <li>Manuales</li>
            <li>Hobbista</li>
            <li>Industrial</li>
          </ul>
        </div>
        <div className='seccion_2_drop'>
        <h3>Ferreteria</h3>
          <ul>
            <li>descuentos</li>
            <li>herramientas</li>
            <li>tuercas</li>
            <li>tornillos</li>
          </ul>
        </div>
        <div className='seccion_3_drop'>
        <h3>Equipacion</h3>
          <ul>
            <li>hornallas</li>
            <li>cuchillos</li>
            <li>linternas</li>
            <li>otros</li>
          </ul>
        </div>
    </div>
    </header>
  )
}

export default NavBar
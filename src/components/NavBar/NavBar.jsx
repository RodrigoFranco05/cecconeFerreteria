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
    </header>
  )
}

export default NavBar
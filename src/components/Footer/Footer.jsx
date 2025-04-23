import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
       <div className='navegabilidad'>
          <div className='seccion_1'>
            <ul>
              <li></li>
              <li>Inicio</li>
              <li>Productos</li>
              <li>Contacto</li>
            </ul>
          </div>

          <div className='seccion_2'>
            <ul>
              <li className='titulo'>Contactanos</li>
              <li>tel: +5434255387</li>
              <li>mail: nuestroemail@gmail.com</li>
              <li>sucursal: calle falsa 123</li>
            </ul>
          </div>

       </div>
       <div className='informacion'>
          <div className='logoImagen'>
            imagen
          </div>

          <div className='derechos'>
            <p>Todos los derechos reservados </p>
            <p> © Copyright Ferreteria Ceccone - 2025</p>
            <p>Defensa de las y los consumidores. Para reclamos ingresá acá. / Botón de arrepentimiento</p>
          </div>
       </div>
    </footer>   
  )
}

export default Footer;
import React from 'react'
import './CategoriasMain.css'

const lineas = [
  { nombre: 'Línea Einhell', imagen: './../../public/imagen1carrusel.png' },
  { nombre: 'Línea DeWalt', imagen: './../../public/imagen1carrusel.png' },
  { nombre: 'Línea Lusqtoff', imagen: 'u../../../public/imagen1carrusel.png' },
  { nombre: 'Línea Konan', imagen: './../../public/imagen1carrusel.png' },
  { nombre: 'Línea Versa', imagen: './../../public/imagen1carrusel.png' },
  { nombre: 'Línea Black Jack', imagen: './../../public/imagen1carrusel.png' },
  { nombre: 'Línea Andina', imagen: './../../public/imagen1carrusel.png' },
  { nombre: 'Línea Power', imagen: '../../../public/imagen1carrusel.png' },
];

const CategoriasMain = () => {
  return (
   <div className="categorias-main">
   
   <div className='titulos'>
   <h2 className="titulo-categorias">Categorías</h2>
   <p className="subtitulo-categorias">Nuestras líneas de productos</p>
   </div>
    

   <div className="grid-lineas">
      {lineas.map((linea, index) => (
        <div
          className="card-linea"
          key={index}
          style={{ backgroundImage: `url(${linea.imagen})` }}
        >
          <div className="nombre-linea">{linea.nombre}</div>
        </div>
      ))}
    </div>

    </div>
  )
}

export default CategoriasMain
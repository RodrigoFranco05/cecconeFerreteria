import React from 'react'
import './Inicio.css'
import Carrousel from '../Carrousel/Carrousel';
import ProductGrid from '../ProductGrid/ProductGrid';
import CategoriasMain from '../CategoriasMain/CategoriasMain';
import ItemMasVendidos from '../ItemMasVendidos/ItemMasVendidos';

const Inicio = () => {
  return (
    <div>

        <Carrousel/>
        <ItemMasVendidos title='Productos Destacados'/>
        <ItemMasVendidos title='Nuevos Productos'/>
        <CategoriasMain/>

    </div>
  )
}

export default Inicio
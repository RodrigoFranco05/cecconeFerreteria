import React from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Carrousel from './components/Carrousel/Carrousel';
import ItemMasVendidos from './components/ItemMasVendidos/ItemMasVendidos';
import CategoriasMain from './components/CategoriasMain/CategoriasMain';


const App = () => {
  return (
    <div className='App'>
    
      <NavBar/>
      <Carrousel/>
      <ItemMasVendidos/>
      <CategoriasMain/>
      <Footer/>

    </div>
  )
}

export default App;
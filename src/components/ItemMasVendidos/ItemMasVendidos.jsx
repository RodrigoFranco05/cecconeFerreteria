import React,{useState, useEffect} from 'react'
import './ItemMasVendidos.css'
import ProductGrid from '../ProductGrid/ProductGrid';


const ItemMasVendidos = (props) => {
  const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch("/items_prueba.json")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error al cargar el archivo JSON");
          }
          return response.json();
        })
        .then((data) => {
          setItems(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error al obtener los datos:", error);
          setLoading(false);
        });
    }, []);
  
    if (loading) return <p>Cargando datos...</p>;

  return (
    <div className='ItemsMasVendidos'>
        <ProductGrid title={props.title} productos={items.slice(0, 5)}/>
    </div>
  );
};

export default ItemMasVendidos;
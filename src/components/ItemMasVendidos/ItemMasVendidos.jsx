import React from 'react'
import './ItemMasVendidos.css'
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@mui/material';

import ProductGrid from '../ProductGrid/ProductGrid';

const ItemMasVendidos = () => {
  

  return (
    <div className='ItemMasVendidos'>
      
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
        Items mas VENDIDOS!
      </Typography>
   
    <div className='ItemsVendidos'>
      
        <ProductGrid />
   
    </div>
    </div>
  );
};

export default ItemMasVendidos;
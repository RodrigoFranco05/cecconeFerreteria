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

const ItemMasVendidos = () => {
  // Definimos variables de ejemplo
  const name = 'Taladro Inalámbrico';
  const price = 15999;
  const image = '../../../public/diseno-sin-titulo.png';

  return (
    <div className='ItemMasVendidos'>
      
          <h2 className="titulo-categorias">Los mas vendidos!</h2>
   
    <div className='ItemsVendidos'>
      <div className='item'>
        <Card sx={{ maxWidth: 300, borderRadius: 3, boxShadow: 3 }}>
        <CardMedia
          component="img"
          height="180"
          image={image}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            ${price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained" fullWidth>
            Agregar al carrito
          </Button>
        </CardActions>
      </Card></div>
      <div className='item'>
        <Card sx={{ maxWidth: 300, borderRadius: 3, boxShadow: 3 }}>
        <CardMedia
          component="img"
          height="180"
          image={image}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            ${price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained" fullWidth>
            Agregar al carrito
          </Button>
        </CardActions>
      </Card></div>
      <div className='item'>
        <Card sx={{ maxWidth: 300, borderRadius: 3, boxShadow: 3 }}>
        <CardMedia
          component="img"
          height="180"
          image={image}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            ${price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained" fullWidth>
            Agregar al carrito
          </Button>
        </CardActions>
      </Card></div>
      <div className='item'>
        <Card sx={{ maxWidth: 300, borderRadius: 3, boxShadow: 3 }}>
        <CardMedia
          component="img"
          height="180"
          image={image}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            ${price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained" fullWidth>
            Agregar al carrito
          </Button>
        </CardActions>
      </Card></div>
      <div className='item'>
        <Card sx={{ maxWidth: 300, borderRadius: 3, boxShadow: 3 }}>
        <CardMedia
          component="img"
          height="180"
          image={image}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            ${price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained" fullWidth>
            Agregar al carrito
          </Button>
        </CardActions>
      </Card></div>
      
    </div>
    </div>
  );
};

export default ItemMasVendidos;
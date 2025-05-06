import React,{useState, useEffect} from 'react'
import { Typography, Box, Container ,Grid} from "@mui/material"
import ProductoCard from "../ProductoCard/ProductoCard"

const brandColors = {
    primary: "#EC6500",     // Naranja principal
    primaryDark: "#C45200", // Naranja oscuro
    primaryLight: "#FF8A30", // Naranja medio
    primaryLighter: "#FFB273", // Naranja claro
    cream: "#FFFCF5",       // Crema
    black: "#1A1A1A",       // Negro
    darkGray: "#333333",    // Gris oscuro
    mediumGray: "#666666",  // Gris medio
    lightGray: "#CCCCCC",   // Gris claro
    veryLightGray: "#F5F5F5", // Gris muy claro
  }
  

const ItemsGrid = () => {

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
    <Box sx={{ backgroundColor: brandColors.cream, py: 4 }}>
    <Container 
      maxWidth="xl" 
      sx={{ 
        backgroundColor: brandColors.cream,
        borderRadius: "16px",
        py: 4,
      }}
    >
      <Typography 
        variant="h4" 
        component="h2" 
        gutterBottom 
        sx={{ 
          mb: 4, 
          color: brandColors.black,
          fontWeight: 700,
          position: "relative",
          "&:after": {
            content: '""',
            position: "absolute",
            bottom: -8,
            left: 0,
            width: 60,
            height: 3,
            backgroundColor: brandColors.primary,
            borderRadius: 4,
          }
        }}
      >
        Lista de Productos
      </Typography>
  
      {/* Grid de productos en múltiples filas y 4 columnas */}
      <Grid container spacing={3}>
        {items.map((item) => (
          <Grid 
            item 
            xs={12}      // En móviles: 1 columna (ancho completo)
            sm={6}       // En tablets pequeñas: 2 columnas
            md={4}       // En tablets: 3 columnas
            lg={3}       // En desktop: 4 columnas (exactamente lo que pides)
            key={item.id}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: "300px", // Mantiene el tamaño máximo de la tarjeta
              }}
            >
              <ProductoCard {...item} />
            </Box>
          </Grid>
        ))}
      </Grid>
  
      {/* Si no hay productos, muestra un mensaje */}
      {items.length === 0 && (
        <Box sx={{ textAlign: "center", py: 5 }}>
          <Typography variant="body1" color="text.secondary">
            No se encontraron productos.
          </Typography>
        </Box>
      )}
    </Container>
  </Box>
  );
}

export default ItemsGrid
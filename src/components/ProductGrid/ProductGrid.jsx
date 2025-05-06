
import { Typography, Box, Container } from "@mui/material"
import ProductoCard from "../ProductoCard/ProductoCard"

// Colores de la marca
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

const ProductGrid = (props) => {
  console.log(props.productos)
  const productos = props.productos;

  if(productos==undefined || productos.length===0){
    return <p>No hay productos disponibles</p>;
  }

  console.log(props.productos)
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
          {props.title}
        </Typography>

        {/* Contenedor con scroll horizontal en pantallas pequeñas */}
        <Box
          sx={{
            width: "100%",
            overflowX: "auto",
            // Oculta la barra de scroll pero mantiene la funcionalidad
            "&::-webkit-scrollbar": {
              height: "6px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: brandColors.veryLightGray,
              borderRadius: "10px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: brandColors.lightGray,
              borderRadius: "10px",
              "&:hover": {
                backgroundColor: brandColors.mediumGray,
              },
            },
            // Añade padding para que la barra de scroll no tape el contenido
            pb: 1,
          }}
        >
          {/* Fila de productos */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              // Ancho mínimo para asegurar que todos los productos estén en una fila
              minWidth: {
                xs: "1200px", // En móviles, fuerza scroll horizontal
                lg: "100%",   // En pantallas grandes, se adapta al contenedor
              },
              gap: 3,
            }}
          >
            {productos.map((product) => (
              <Box
                key={product.id}
                sx={{
                  flex: 1,
                  minWidth: "220px", // Ancho mínimo para cada tarjeta
                  maxWidth: "300px", // Ancho máximo para cada tarjeta
                }}
              >
                <ProductoCard {...product} />
              </Box>
            ))}
          </Box>
        </Box>

        {/* Indicador de scroll en pantallas pequeñas */}
        <Box
          sx={{
            display: { xs: "flex", lg: "none" },
            justifyContent: "center",
            mt: 2,
            color: brandColors.mediumGray,
          }}
        >
          <Typography variant="caption" sx={{ display: "flex", alignItems: "center" }}>
            Desliza para ver más productos
            <Box
              component="span"
              sx={{
                display: "inline-block",
                ml: 1,
                fontSize: "1.2em",
                animation: "bounce 1s infinite alternate",
                "@keyframes bounce": {
                  from: { transform: "translateX(0)" },
                  to: { transform: "translateX(5px)" },
                },
              }}
            >
              →
            </Box>
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default ProductGrid
import { Typography, Box, Grid, styled } from "@mui/material"
import ProductoCard from "../ProductoCard/ProductoCard"

// Paleta de colores de la marca
const brandColors = {
  primary: "#EC6500", // Naranja principal
  primaryDark: "#C45200", // Naranja oscuro
  primaryLight: "#FF8A30", // Naranja medio
  primaryLighter: "#FFB273", // Naranja claro
  cream: "#FFFCF5", // Crema
  black: "#1A1A1A", // Negro
  darkGray: "#333333", // Gris oscuro
  mediumGray: "#666666", // Gris medio
  lightGray: "#CCCCCC", // Gris claro
  veryLightGray: "#F5F5F5", // Gris muy claro
}

const EmptyStateContainer = styled(Box)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(6),
  backgroundColor: "#FFFFFF",
  borderRadius: 12,
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
  margin: theme.spacing(2, 0),
}))

const EmptyStateText = styled(Typography)(({ theme }) => ({
  color: brandColors.mediumGray,
  marginBottom: theme.spacing(2),
}))

const ItemsGrid = ({ productos }) => {
  if (!productos || productos.length === 0) {
    return (
      <EmptyStateContainer>
        <EmptyStateText variant="h6">No se encontraron productos</EmptyStateText>
        <EmptyStateText variant="body2">Intenta modificar los filtros para ver más resultados</EmptyStateText>
      </EmptyStateContainer>
    )
  }

  return (
    <Grid container spacing={3}>
      {productos.map((item) => (
        <Grid
          item
          xs={12} // En móviles: 1 columna (ancho completo)
          sm={6} // En tablets pequeñas: 2 columnas
          md={6} // En tablets: 2 columnas
          lg={3} // En desktop: 4 columnas
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
  )
}

export default ItemsGrid

// const ItemsGrid = () => {

// //   const [items, setItems] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     fetch("/items_prueba.json")
// //       .then((response) => {
// //         if (!response.ok) {
// //           throw new Error("Error al cargar el archivo JSON");
// //         }
// //         return response.json();
// //       })
// //       .then((data) => {
// //         setItems(data);
// //         setLoading(false);
// //       })
// //       .catch((error) => {
// //         console.error("Error al obtener los datos:", error);
// //         setLoading(false);
// //       });
// //   }, []);

// //   if (loading) return <p>Cargando datos...</p>;

// const [allItems, setAllItems] = useState([]);
//   const [filteredItems, setFilteredItems] = useState([]);
//   const [filters, setFilters] = useState({ marca: '', tipo: '', color: '' });
//   const [loading, setLoading] = useState(true);
//   const [filterOptions, setFilterOptions] = useState({ marcas: [], tipos: [], colores: [] }); // <- nuevo

//   useEffect(() => {
//     fetchProducts()
//       .then((data) => {
//         setAllItems(data);
//         setFilteredItems(data); // mostrar todo inicialmente
//         setFilterOptions(getFilterOptions(data)); // <- nuevo
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//         setLoading(false);
//       });
//   }, []);

//   useEffect(() => {
//     const resultado = filterProducts(allItems, filters);
//     setFilteredItems(resultado);
//   }, [filters, allItems]);

//   if (loading) return <p>Cargando...</p>;


//   return (
//     <Box sx={{ backgroundColor: brandColors.cream, py: 4 }}>
//     <Container 
//       maxWidth="xl" 
//       sx={{ 
//         backgroundColor: brandColors.cream,
//         borderRadius: "16px",
//         py: 4,
//       }}
//     >
//       <Typography 
//         variant="h4" 
//         component="h2" 
//         gutterBottom 
//         sx={{ 
//           mb: 4, 
//           color: brandColors.black,
//           fontWeight: 700,
//           position: "relative",
//           "&:after": {
//             content: '""',
//             position: "absolute",
//             bottom: -8,
//             left: 0,
//             width: 60,
//             height: 3,
//             backgroundColor: brandColors.primary,
//             borderRadius: 4,
//           }
//         }}
//       >
//         Lista de Productos
//       </Typography>

//       <FilterPanel setFilters={setFilters}  options={filterOptions}/>
  
//       {/* Grid de productos en múltiples filas y 4 columnas */}
//       <Grid container spacing={3}>
//         {filteredItems.map((item) => (
//           <Grid 
//             item 
//             xs={12}      // En móviles: 1 columna (ancho completo)
//             sm={6}       // En tablets pequeñas: 2 columnas
//             md={4}       // En tablets: 3 columnas
//             lg={3}       // En desktop: 4 columnas (exactamente lo que pides)
//             key={item.id}
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//             }}
//           >
//             <Box
//               sx={{
//                 width: "100%",
//                 maxWidth: "300px", // Mantiene el tamaño máximo de la tarjeta
//               }}
//             >
//               <ProductoCard {...item} />
//             </Box>
//           </Grid>
//         ))}
//       </Grid>
  
//       {/* Si no hay productos, muestra un mensaje */}
//       {filteredItems.length  === 0 && (
//         <Box sx={{ textAlign: "center", py: 5 }}>
//           <Typography variant="body1" color="text.secondary">
//             No se encontraron productos.
//           </Typography>
//         </Box>
//       )}
//     </Container>
//   </Box>
//   );
// }


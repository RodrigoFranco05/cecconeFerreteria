"use client"
import { Box, Typography, Card, CardMedia, styled, Container, useMediaQuery, useTheme } from "@mui/material"
import { ArrowForward } from "@mui/icons-material"

// Componentes estilizados
const SectionTitle = styled(Typography)(({ theme }) => ({
  position: "relative",
  fontWeight: 700,
  marginBottom: "0.5rem",
  display: "inline-block",
  "&:after": {
    content: '""',
    position: "absolute",
    width: "60%",
    height: "3px",
    bottom: "-8px",
    left: "0",
    backgroundColor: theme.palette.primary.main,
    borderRadius: "2px",
  },
}))

const SectionSubtitle = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  marginBottom: "2rem",
  color: theme.palette.text.secondary,
}))

const CategoryCard = styled(Card)(({ theme }) => ({
  position: "relative",
  height: 200,
  overflow: "hidden",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  transition: "all 0.3s ease",
  cursor: "pointer",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 12px 20px rgba(0,0,0,0.15)",
    "& .MuiCardMedia-root": {
      transform: "scale(1.05)",
    },
    "& .overlay": {
      backgroundColor: "rgba(0,0,0,0.4)",
    },
    "& .arrow-icon": {
      opacity: 1,
      transform: "translateX(0)",
    },
    "& .category-name": {
      color: theme.palette.primary.main,
    },
  },
}))

const CategoryMedia = styled(CardMedia)({
  height: "100%",
  transition: "transform 0.5s ease",
})

const Overlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",
  transition: "background-color 0.3s ease",
})

const CategoryName = styled(Typography)({
  position: "absolute",
  bottom: "20px",
  left: "20px",
  color: "#fff",
  fontWeight: 600,
  fontSize: "1.2rem",
  textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
  transition: "color 0.3s ease",
  zIndex: 2,
})

const ArrowIcon = styled(ArrowForward)(({ theme }) => ({
  position: "absolute",
  bottom: "20px",
  right: "20px",
  color: theme.palette.primary.main,
  opacity: 0,
  transform: "translateX(-10px)",
  transition: "all 0.3s ease",
}))

const TitleContainer = styled(Box)({
  textAlign: "center",
  marginBottom: "2rem",
  position: "relative",
})

const CategoriasMain = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const isTablet = useMediaQuery(theme.breakpoints.down("md"))

  const lineas = [
    { nombre: "Línea Bosch", imagen: "../../../public/01db144526716df630e705de85c35be7_XL.jpg" },
    { nombre: "Línea Einhell", imagen: "../../../public/einhell-germany-ag-logo-vector.png" },
    { nombre: "Línea Lusqtoff", imagen: "../../../public/logos-lusqtoff-1200x1200-de2a627377a8d8a75517173633811055-1024-1024.jpg" },
    { nombre: "Línea Daewoo", imagen: "../../../public/images.png" },
    { nombre: "Línea Plumita", imagen: "../../../public/images_2.jpg" },
    { nombre: "Otras Marcas", imagen: "../../../public/PROMOCIONES_1.png" },
  ]

  return (
    <Box
      sx={{
        py: 6,
        px: 2,
        backgroundColor: theme.palette.background.default,
        borderRadius: { xs: 0, md: "12px" },
        my: { xs: 2, md: 4 },
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
      }}
    >
      <Container maxWidth="lg">
        <TitleContainer>
          <SectionTitle variant="h4" component="h2">
            Categorías
          </SectionTitle>
          <SectionSubtitle variant="h6" component="p">
            Nuestras líneas de productos
          </SectionSubtitle>
        </TitleContainer>

        {/* Usando CSS Grid nativo a través de Box en lugar del componente Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr", // 1 columna en móviles
              sm: "repeat(2, 1fr)", // 2 columnas en tablets
              md: "repeat(3, 1fr)", // 4 columnas en desktop
            },
            gap: 3,
          }}
        >
          {lineas.map((linea, index) => (
            <CategoryCard key={index}>
              <CategoryMedia image={linea.imagen} title={linea.nombre} />
              <Overlay className="overlay" />
              <CategoryName className="category-name" variant="h6">
                {linea.nombre}
              </CategoryName>
              <ArrowIcon className="arrow-icon" />
            </CategoryCard>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default CategoriasMain

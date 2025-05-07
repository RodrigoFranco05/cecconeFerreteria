
import { useState, useEffect } from "react"
import { obtenerProductosFiltrados, obtenerOpcionesFiltros } from "../../api/productosApi"
import FilterPanel from "../FilterPanel/FilterPanel"
import ItemsGrid from "../ItemsGrid/ItemsGrid"
import {
  Container,
  Typography,
  CircularProgress,
  Box,
  Grid,
  Divider,
  useMediaQuery,
  IconButton,
  Drawer,
  styled,
  useTheme,
  Button,
} from "@mui/material"
import FilterListIcon from "@mui/icons-material/FilterList"
import CloseIcon from "@mui/icons-material/Close"

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

const PageTitle = styled(Typography)(({ theme }) => ({
  color: brandColors.black,
  fontWeight: 700,
  marginBottom: theme.spacing(1),
  position: "relative",
  paddingBottom: theme.spacing(2),
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 60,
    height: 3,
    backgroundColor: brandColors.primary,
    borderRadius: 4,
  },
}))

const FilterButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: brandColors.primary,
  color: "#FFFFFF",
  position: "fixed",
  bottom: 20,
  right: 20,
  zIndex: 1000,
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  "&:hover": {
    backgroundColor: brandColors.primaryDark,
  },
}))

const ProductosPage = () => {
  const [productos, setProductos] = useState([])
  const [opcionesFiltros, setOpcionesFiltros] = useState({
    categorias: [],
    subcategorias: [],
    marcas: [],
    colores: [],
    tamanios: [],
    pesos: [],
    materiales: [],
    acabados: [],
    ubicaciones: [],
  })

  // Estado para guardar los filtros activos
  const [filtros, setFiltros] = useState({
    categoria: [],
    subcategoria: [],
    marca: [],
    color: [],
    tamanio: [],
    peso: [],
    material: [],
    acabado: [],
    ubicacion: [],
    nuevo: false,
    envioGratis: false,
    descuento: false,
    precioMin: "",
    precioMax: "",
  })

  const [cargando, setCargando] = useState(true)
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  // Cargar las opciones de filtros al inicio
  useEffect(() => {
    const cargarOpcionesFiltros = async () => {
      try {
        const opciones = await obtenerOpcionesFiltros()
        setOpcionesFiltros(opciones)
      } catch (error) {
        console.error("Error al cargar opciones de filtros:", error)
      }
    }

    cargarOpcionesFiltros()
  }, [])

  // Esta función actualiza los filtros cuando el usuario cambia algo
  const handleFiltroChange = (e) => {
    const { name, value, type, checked } = e.target

    // Si el input es un checkbox (nuevo, envioGratis, descuento)
    if (type === "checkbox") {
      if (name === "nuevo" || name === "envioGratis" || name === "descuento") {
        setFiltros((prev) => ({
          ...prev,
          [name]: checked,
        }))
      } else {
        // Para los filtros de categoría, marca, etc. que ahora son múltiples
        setFiltros((prev) => {
          const currentValues = Array.isArray(prev[name]) ? [...prev[name]] : []

          if (checked) {
            // Añadir valor si no existe
            if (!currentValues.includes(value)) {
              return {
                ...prev,
                [name]: [...currentValues, value],
              }
            }
          } else {
            // Eliminar valor si existe
            return {
              ...prev,
              [name]: currentValues.filter((item) => item !== value),
            }
          }

          return prev
        })
      }
    } else if (type === "number" || name === "precioMin" || name === "precioMax") {
      // Para los inputs de precio
      setFiltros((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  // Cada vez que cambia algún filtro, se vuelve a pedir a la API los productos filtrados
  useEffect(() => {
    const obtenerDatos = async () => {
      setCargando(true)
      try {
        const resultado = await obtenerProductosFiltrados(filtros)
        setProductos(resultado)
      } catch (error) {
        console.error("Error al obtener productos filtrados:", error)
        setProductos([])
      } finally {
        setCargando(false)
      }
    }

    obtenerDatos()
  }, [filtros]) // Se ejecuta cada vez que cambian los filtros

  const toggleMobileFilter = () => {
    setMobileFilterOpen(!mobileFilterOpen)
  }

  return (
    <Box sx={{ backgroundColor: brandColors.cream, minHeight: "100vh", py: 4 }}>
      <Container maxWidth="xl">
        <PageTitle variant="h4" component="h1" gutterBottom>
          Productos
        </PageTitle>

        <Typography variant="body1" color={brandColors.mediumGray} sx={{ mb: 4 }}>
          Explora nuestra amplia selección de productos de ferretería y herramientas.
        </Typography>

        <Grid container spacing={3}>
          {/* Panel de filtros para desktop */}
          {!isMobile && (
            <Grid item xs={12} md={3} lg={3}>
              <Box sx={{ position: "sticky", top: 20 }}>
                <FilterPanel filtros={filtros} onFiltroChange={handleFiltroChange} opcionesFiltros={opcionesFiltros} />
              </Box>
            </Grid>
          )}

          {/* Grilla de productos */}
          <Grid item xs={12} md={9} lg={9}>
            {/* Contador de resultados y ordenamiento */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 3,
                backgroundColor: "#FFFFFF",
                p: 2,
                borderRadius: 2,
                boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)",
              }}
            >
              <Typography variant="body2" color={brandColors.mediumGray}>
                {productos.length} productos encontrados
              </Typography>

              {isMobile && (
                <Button
                  variant="outlined"
                  startIcon={<FilterListIcon />}
                  onClick={toggleMobileFilter}
                  sx={{
                    borderColor: brandColors.primary,
                    color: brandColors.primary,
                    "&:hover": {
                      borderColor: brandColors.primaryDark,
                      backgroundColor: `${brandColors.primary}10`,
                    },
                  }}
                >
                  Filtros
                </Button>
              )}
            </Box>

            {/* Mensaje de carga */}
            {cargando ? (
              <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
                <CircularProgress sx={{ color: brandColors.primary }} />
              </Box>
            ) : (
              /* Grilla de productos filtrados */
              <ItemsGrid productos={productos} />
            )}
          </Grid>
        </Grid>
      </Container>

      {/* Botón flotante de filtros para móvil */}
      {isMobile && (
        <FilterButton aria-label="filtros" size="large" onClick={toggleMobileFilter}>
          <FilterListIcon />
        </FilterButton>
      )}

      {/* Drawer de filtros para móvil */}
      <Drawer
        anchor="left"
        open={isMobile && mobileFilterOpen}
        onClose={toggleMobileFilter}
        sx={{
          "& .MuiDrawer-paper": {
            width: "85%",
            maxWidth: 350,
            boxSizing: "border-box",
            backgroundColor: brandColors.cream,
          },
        }}
      >
        <Box sx={{ p: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h6" sx={{ fontWeight: 600, color: brandColors.black }}>
            Filtros
          </Typography>
          <IconButton onClick={toggleMobileFilter} sx={{ color: brandColors.black }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ backgroundColor: brandColors.lightGray }} />
        <Box sx={{ p: 2, overflowY: "auto" }}>
          <FilterPanel filtros={filtros} onFiltroChange={handleFiltroChange} opcionesFiltros={opcionesFiltros} />
        </Box>
      </Drawer>
    </Box>
  )
}

export default ProductosPage
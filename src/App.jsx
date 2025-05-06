import React from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Inicio from './components/Inicio/Inicio';
import Productos from './components/Productos/Productos';
import Contacto from './components/Contacto/Contacto';
import Carrito from './components/Carrito/Carrito';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import { ThemeProvider, createTheme, CssBaseline, Box } from "@mui/material"


// Paleta de colores de la marca
const brandColors = {
  // Colores principales
  primary: {
    main: "#EC6500", // Naranja principal
    dark: "#C45200", // Naranja oscuro
    light: "#FF8A30", // Naranja medio
    lighter: "#FFB273", // Naranja claro
    contrastText: "#FFFFFF", // Texto sobre naranja
  },
  secondary: {
    main: "#1A1A1A", // Negro principal
    dark: "#000000", // Negro absoluto
    light: "#333333", // Gris oscuro
    lighter: "#666666", // Gris medio
    contrastText: "#FFFFFF", // Texto sobre negro
  },
  background: {
    default: "#FFFCF5", // Color crema de la marca
    paper: "#FFFFFF", // Blanco para tarjetas
    alt: "#F5F5F5", // Gris muy claro para fondos alternativos
  },
  text: {
    primary: "#1A1A1A", // Negro para texto principal
    secondary: "#FFFFFF", // Gris medio para texto secundario
    disabled: "#CCCCCC", // Gris claro para texto deshabilitado
    hint: "#999999", // Gris para pistas/placeholders
  },
  divider: "#EEEEEE", // Color para divisores
  // Colores de estado
  error: {
    main: "#F44336", // Rojo para errores
    light: "#FFEBEE", // Fondo rojo claro
  },
  warning: {
    main: "#FF9800", // Ámbar para advertencias
    light: "#FFF8E1", // Fondo ámbar claro
  },
  info: {
    main: "#2196F3", // Azul para información
    light: "#E3F2FD", // Fondo azul claro
  },
  success: {
    main: "#4CAF50", // Verde para éxito
    light: "#E8F5E9", // Fondo verde claro
  },
}

// Crear el tema personalizado
const theme = createTheme({
  palette: {
    primary: {
      main: brandColors.primary.main,
      dark: brandColors.primary.dark,
      light: brandColors.primary.light,
      contrastText: brandColors.primary.contrastText,
    },
    secondary: {
      main: brandColors.secondary.main,
      dark: brandColors.secondary.dark,
      light: brandColors.secondary.light,
      contrastText: brandColors.secondary.contrastText,
    },
    error: {
      main: brandColors.error.main,
      light: brandColors.error.light,
    },
    warning: {
      main: brandColors.warning.main,
      light: brandColors.warning.light,
    },
    info: {
      main: brandColors.info.main,
      light: brandColors.info.light,
    },
    success: {
      main: brandColors.success.main,
      light: brandColors.success.light,
    },
    text: {
      primary: brandColors.text.primary,
      secondary: brandColors.text.secondary,
      disabled: brandColors.text.disabled,
    },
    background: {
      default: brandColors.background.default,
      paper: brandColors.background.paper,
    },
    divider: brandColors.divider,
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      color: brandColors.text.primary,
    },
    h2: {
      fontWeight: 700,
      color: brandColors.text.primary,
    },
    h3: {
      fontWeight: 600,
      color: brandColors.text.primary,
    },
    h4: {
      fontWeight: 600,
      color: brandColors.text.primary,
    },
    h5: {
      fontWeight: 500,
      color: brandColors.text.primary,
    },
    h6: {
      fontWeight: 500,
      color: brandColors.text.primary,
    },
    subtitle1: {
      color: brandColors.text.secondary,
    },
    subtitle2: {
      color: brandColors.text.secondary,
    },
    body1: {
      color: brandColors.text.primary,
    },
    body2: {
      color: brandColors.text.secondary,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
          fontWeight: 600,
        },
        containedPrimary: {
          "&:hover": {
            backgroundColor: brandColors.primary.dark,
          },
        },
        outlinedPrimary: {
          borderColor: brandColors.primary.main,
          "&:hover": {
            backgroundColor: `${brandColors.primary.main}10`,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          overflow: "visible",
          borderRadius: 12,
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
          transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
          "&:hover": {
            boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.1)",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
        colorSuccess: {
          backgroundColor: brandColors.success.light,
          color: brandColors.success.main,
          "& .MuiChip-icon": {
            color: brandColors.success.main,
          },
        },
        colorError: {
          backgroundColor: `${brandColors.error.main}15`,
          color: brandColors.error.main,
          "& .MuiChip-icon": {
            color: brandColors.error.main,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: brandColors.background.default,
          color: brandColors.text.primary,
          boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.05)",
        },
      },
    },
  },
})

const App = () => {

  // Definimos variables de ejemplo

  return (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <div className='App'>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/productos" element={<Productos/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
        <Route path="/carrito" element={<Carrito/>}/>
      </Routes>
    <Footer/>

    </div>
  </ThemeProvider>
  </BrowserRouter>
  )
}

export default App;
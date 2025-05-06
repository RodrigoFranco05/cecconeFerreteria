import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Divider,
  Stack,
  styled,
  useMediaQuery,
  useTheme,
  IconButton
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import './Footer.css';

// Paleta de colores de la marca
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
};

// Componentes estilizados
const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: brandColors.black,
  color: brandColors.cream,
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(3),
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 3,
    background: `linear-gradient(90deg, ${brandColors.primary} 0%, ${brandColors.primaryLight} 100%)`,
  }
}));

const FooterTitle = styled(Typography)(({ theme }) => ({
  color: brandColors.primary,
  fontWeight: 700,
  fontSize: '1.2rem',
  marginBottom: theme.spacing(3),
  position: 'relative',
  paddingBottom: theme.spacing(1),
  display: 'inline-block',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 30,
    height: 2,
    backgroundColor: brandColors.primary,
  }
}));

// Estilo para Link de MUI (para los enlaces que no son de navegación)
const FooterLink = styled(Link)(({ theme }) => ({
  color: brandColors.cream,
  textDecoration: 'none',
  fontSize: '0.95rem',
  marginBottom: theme.spacing(1.5),
  display: 'block',
  transition: 'color 0.2s, transform 0.2s',
  '&:hover': {
    color: brandColors.primaryLight,
    transform: 'translateX(5px)',
    textDecoration: 'none',
  }
}));

// Nuevo componente estilizado para NavLink de react-router-dom
const LinkNav = styled(NavLink)(({ theme }) => ({
  color: brandColors.cream,
  textDecoration: 'none',
  fontSize: '0.95rem',
  marginBottom: theme.spacing(1.5),
  display: 'block',
  transition: 'color 0.2s, transform 0.2s',
  '&:hover': {
    color: brandColors.primaryLight,
    transform: 'translateX(5px)',
    textDecoration: 'none',
  },
  '&.active': {
    color: brandColors.primary,
    fontWeight: 500,
  }
}));

const ContactItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(1.5),
  '& svg': {
    color: brandColors.primary,
    marginRight: theme.spacing(1.5),
    fontSize: '1.2rem',
  }
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  color: brandColors.cream,
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  marginRight: theme.spacing(1),
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: brandColors.primary,
    transform: 'translateY(-3px)',
  }
}));

const CopyrightText = styled(Typography)(({ theme }) => ({
  color: brandColors.lightGray,
  fontSize: '0.75rem',
  textAlign: 'center',
  marginTop: theme.spacing(1),
}));

const LogoImage = styled('img')(({ theme }) => ({
  height: 50,
  marginBottom: theme.spacing(2),
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <FooterContainer>
      <Container maxWidth="xl">
        <Grid container spacing={4} justifyContent="space-evenly">
          {/* Sección de navegación */}
          <Grid item xs={12} sm={6} md={3}>
            <FooterTitle variant="h6">Navegación</FooterTitle>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              <Box component="li">
                <LinkNav to="/">Inicio</LinkNav>
              </Box>
              <Box component="li">
                <LinkNav to="/productos">Productos</LinkNav>
              </Box>
              <Box component="li">
                <LinkNav to="/contacto">Contacto</LinkNav>
              </Box>
              {/* <Box component="li">
                <LinkNav to="/nosotros">Nosotros</LinkNav>
              </Box> */}
            </Box>
          </Grid>

          {/* Sección de contacto */}
          <Grid item xs={12} sm={6} md={3}>
            <FooterTitle variant="h6">Contáctanos</FooterTitle>
            <Box>
              <ContactItem>
                <PhoneIcon />
                <Typography variant="body2">0342 401-5321</Typography>
              </ContactItem>
              <ContactItem>
                <EmailIcon />
                <Typography variant="body2">ferreteriacecconce@gmail.com</Typography>
              </ContactItem>
              <ContactItem>
                <LocationOnIcon />
                <Typography variant="body2">Av. Aristóbulo del Valle 9596, Santa Fe.</Typography>
              </ContactItem>
            </Box>
          </Grid>

          {/* Sección de categorías */}
          <Grid item xs={12} sm={6} md={3}>
            <FooterTitle variant="h6">Categorías</FooterTitle>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              <Box component="li">
                <LinkNav to="/herramientas">Herramientas</LinkNav>
              </Box>
              <Box component="li">
                <LinkNav to="/ferreteria">Ferretería</LinkNav>
              </Box>
              <Box component="li">
                <LinkNav to="/equipacion">Equipación</LinkNav>
              </Box>
              <Box component="li">
                <LinkNav to="/ofertas">Ofertas</LinkNav>
              </Box>
            </Box>
          </Grid>

          {/* Sección de logo y redes sociales */}
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: isMobile ? 'center' : 'flex-start' }}>
              <LogoImage src="../../../public/logo_2.png" alt="Logo de la marca" />
              
              <Stack direction="row" spacing={1}>
                <SocialIconButton aria-label="facebook">
                  <FacebookIcon />
                </SocialIconButton>
                <SocialIconButton aria-label="instagram" component="a" href="https://www.instagram.com/cecconeferreteria/" target="_blank" rel="noopener noreferrer" sx={{ color: 'inherit', '&:hover': { color: 'inherit' } }}>
                  <InstagramIcon />
                </SocialIconButton>
                <SocialIconButton aria-label="twitter">
                  <TwitterIcon />
                </SocialIconButton>
              </Stack>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, backgroundColor: brandColors.darkGray }} />

        {/* Sección de derechos */}
        <Box sx={{ textAlign: 'center' }}>
          <CopyrightText>
            © Copyright Ferreteria Ceccone - {new Date().getFullYear()}. Todos los derechos reservados.
          </CopyrightText>
          <CopyrightText sx={{ mt: 1 }}>
            Defensa de las y los consumidores. Para reclamos ingresá <Link href="#reclamos" sx={{ color: brandColors.primaryLight }}>acá</Link> / 
            <Link href="#arrepentimiento" sx={{ color: brandColors.primaryLight, ml: 1 }}>Botón de arrepentimiento</Link>
          </CopyrightText>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
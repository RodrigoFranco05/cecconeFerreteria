import { Card, CardMedia, CardContent, Typography, Button, Box, Chip, Stack, styled } from "@mui/material"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import LocalShippingIcon from "@mui/icons-material/LocalShipping"

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
  success: "#4CAF50",     // Verde éxito
  error: "#F44336",       // Rojo error
}

// Styled components
const DiscountBadge = styled(Box)(() => ({
  position: "absolute",
  top: 10,
  right: 10,
  width: 45,
  height: 45,
  borderRadius: "50%",
  backgroundColor: brandColors.primary, // Naranja principal para el badge de descuento
  color: "#FFFFFF",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  zIndex: 1,
  boxShadow: "0 2px 8px rgba(236, 101, 0, 0.3)", // Sombra sutil para el badge
}))

const StockLabel = styled(Typography)(() => ({
  fontSize: "0.75rem",
  color: brandColors.success, // Verde para indicar disponibilidad
  marginLeft: 8,
  fontWeight: 500,
}))

const PreviousPrice = styled(Typography)(() => ({
  textDecoration: "line-through",
  color: brandColors.mediumGray, // Gris medio para precio anterior
  fontSize: "0.875rem",
}))

const InstallmentText = styled(Typography)(() => ({
  fontSize: "0.75rem",
  color: brandColors.darkGray, // Gris oscuro para texto de cuotas
  marginTop: 4,
}))

const ProductoCard = ({
  image,
  name,
  precio,
  currency = "$",
  previousPrice,
  discount,
  isNew = false,
  freeShipping = false,
  itemDatoAtributo3,
  inStock = true,
  soldOut = false,
  installments,
  variant = "standard",
}) => {
  // Format price with commas
  const formatPrice = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

  // Determine button text and color
  const buttonText = soldOut ? "AGOTADO" : "AGREGAR AL CARRITO"
  const buttonDisabled = soldOut

  return (
    <Card
      sx={{
        maxWidth: variant === "compact" ? 250 : 300,
        position: "relative",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#FFFFFF", // Fondo blanco como solicitado
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.08)", // Sombra sutil
        borderRadius: "12px", // Bordes más redondeados
        overflow: "visible", // Para que el badge no se corte
        border: `1px solid ${brandColors.veryLightGray}`, // Borde sutil
        "&:hover": {
          boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.12)", // Sombra más pronunciada en hover
          transform: "translateY(-4px)",
          transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
          borderColor: brandColors.lightGray, // Borde más visible en hover
        },
      }}
    >
      {/* Discount badge */}
      {discount && (
        <DiscountBadge>
          <Typography variant="body2" fontWeight="bold">
            -{discount}%
          </Typography>
        </DiscountBadge>
      )}

      {/* Tags */}
      <Box sx={{ position: "absolute", top: 10, left: 10, zIndex: 1 }}>
        <Stack direction="row" spacing={1}>
          {isNew && (
            <Chip 
              label="NUEVO" 
              size="small" 
              sx={{ 
                fontWeight: "bold",
                backgroundColor: brandColors.primaryLight, // Naranja medio
                color: "#FFFFFF",
              }} 
            />
          )}
          {freeShipping && (
            <Chip
              icon={<LocalShippingIcon fontSize="small" />}
              label="ENVÍO GRATIS"
              size="small"
              sx={{ 
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                color: brandColors.success,
                borderColor: brandColors.success,
                fontWeight: 500,
              }}
              variant="outlined"
            />
          )}
        </Stack>
      </Box>

      {/* Product image */}
      <CardMedia
        component="img"
        height={variant === "compact" ? 150 : 200}
        image={image}
        alt={name}
        sx={{ 
          objectFit: "contain", 
          p: 2,
          backgroundColor: "#FFFFFF", // Asegura fondo blanco para las imágenes
        }}
      />

      {/* Product info */}
      <CardContent sx={{ 
        flexGrow: 1, 
        display: "flex", 
        flexDirection: "column",
        backgroundColor: "#FFFFFF", // Asegura fondo blanco para el contenido
      }}>
        {/* Brand or category */}
        {variant === "detailed" && itemDatoAtributo3 && (
          <Typography 
            variant="caption" 
            sx={{ color: brandColors.mediumGray }} 
            gutterBottom
          >
            {itemDatoAtributo3.split(" ")[0]}
          </Typography>
        )}

        {/* Product name */}
        <Typography
          gutterBottom
          variant={variant === "compact" ? "body2" : "body1"}
          component="div"
          fontWeight={variant === "detailed" ? "bold" : "medium"}
          sx={{
            height: variant === "compact" ? 40 : "auto",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            color: brandColors.black, // Color negro de la marca
          }}
        >
          {name}
        </Typography>

        {/* Price section */}
        <Box sx={{ mt: "auto" }}>
          {/* Previous price */}
          {previousPrice && (
            <PreviousPrice variant="body2">
              {currency} {formatPrice(previousPrice)}
            </PreviousPrice>
          )}

          {/* Current price */}
          <Box sx={{ display: "flex", alignItems: "baseline" }}>
            <Typography
              variant={variant === "compact" ? "h6" : "h5"}
              component="div"
              sx={{
                color: brandColors.primary, // Naranja principal para el precio
                fontWeight: "bold",
              }}
            >
              {currency} {formatPrice(precio)}
              {precio.toString().includes(".") ? "" : variant === "detailed" ? <sup>00</sup> : ""}
            </Typography>

            {inStock && !soldOut && <StockLabel variant="caption">en stock</StockLabel>}
          </Box>

          {/* Installments */}
          {installments && (
            <InstallmentText variant="caption">
              {installments.count} cuotas sin interés de {currency} {formatPrice(installments.amount)}
            </InstallmentText>
          )}
        </Box>
      </CardContent>

      {/* Buy button */}
      <Box sx={{ p: 2, pt: 0, backgroundColor: "#FFFFFF" }}>
        <Button
          variant="contained"
          fullWidth
          disabled={buttonDisabled}
          startIcon={!soldOut ? <ShoppingCartIcon /> : undefined}
          sx={{
            backgroundColor: soldOut ? brandColors.lightGray : brandColors.primary,
            color: "#FFFFFF",
            borderRadius: soldOut ? 20 : 8,
            textTransform: "none",
            fontWeight: "bold",
            padding: "8px 16px",
            "&:hover": {
              backgroundColor: soldOut ? brandColors.mediumGray : brandColors.primaryDark,
            },
          }}
        >
          {buttonText}
        </Button>
      </Box>
    </Card>
  )
}

export default ProductoCard
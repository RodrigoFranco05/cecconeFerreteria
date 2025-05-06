import { useState } from "react"
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  Card,
  CardContent,
  Modal,
  Fade,
  Backdrop,
  styled,
  useTheme,
  useMediaQuery,
  IconButton,
  Divider,
} from "@mui/material"
import PhoneIcon from "@mui/icons-material/Phone"
import EmailIcon from "@mui/icons-material/Email"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import SendIcon from "@mui/icons-material/Send"
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"
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

// Componentes estilizados
const SectionTitle = styled(Typography)(({ theme }) => ({
  color: brandColors.black,
  fontWeight: 700,
  fontSize: "2rem",
  marginBottom: theme.spacing(1),
  position: "relative",
  paddingBottom: theme.spacing(2),
  display: "inline-block",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 60,
    height: 3,
    backgroundColor: brandColors.primary,
  },
}))

const SectionSubtitle = styled(Typography)(({ theme }) => ({
  color: brandColors.mediumGray,
  fontSize: "1.1rem",
  marginBottom: theme.spacing(5),
  maxWidth: 700,
  margin: "0 auto",
}))

const ContactCard = styled(Card)(({ theme }) => ({
  backgroundColor: brandColors.cream,
  borderRadius: 12,
  boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.08)",
  height: "100%",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.12)",
  },
}))

const ContactItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  marginBottom: theme.spacing(3),
  "& svg": {
    color: brandColors.primary,
    marginRight: theme.spacing(2),
    fontSize: "1.5rem",
  },
}))

const ContactItemTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: brandColors.black,
  marginBottom: theme.spacing(0.5),
}))

const ContactItemText = styled(Typography)(({ theme }) => ({
  color: brandColors.mediumGray,
}))

const FormContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: 12,
  boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.08)",
  backgroundColor: "#FFFFFF",
}))

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: brandColors.lightGray,
      borderRadius: 8,
    },
    "&:hover fieldset": {
      borderColor: brandColors.primary,
    },
    "&.Mui-focused fieldset": {
      borderColor: brandColors.primary,
    },
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: brandColors.primary,
  },
}))

const SubmitButton = styled(Button)(({ theme }) => ({
  backgroundColor: brandColors.primary,
  color: "#FFFFFF",
  padding: theme.spacing(1.5, 3),
  borderRadius: 8,
  fontWeight: 600,
  textTransform: "none",
  fontSize: "1rem",
  boxShadow: "0px 4px 10px rgba(236, 101, 0, 0.3)",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: brandColors.primaryDark,
    boxShadow: "0px 6px 15px rgba(236, 101, 0, 0.4)",
    transform: "translateY(-2px)",
  },
}))

const MapContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: 250,
  borderRadius: 12,
  overflow: "hidden",
  border: `1px solid ${brandColors.lightGray}`,
  marginTop: theme.spacing(3),
}))

const ModalContent = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  maxWidth: "90%",
  backgroundColor: "#FFFFFF",
  borderRadius: 12,
  boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.15)",
  padding: theme.spacing(4),
  textAlign: "center",
}))

const ModalIcon = styled(CheckCircleOutlineIcon)(({ theme }) => ({
  fontSize: 70,
  color: brandColors.primary,
  marginBottom: theme.spacing(2),
}))

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: 8,
  right: 8,
  color: brandColors.mediumGray,
  "&:hover": {
    backgroundColor: brandColors.veryLightGray,
  },
}))

const Contacto = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const [openModal, setOpenModal] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    number: "",
    comments: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí se implementaría la lógica de envío real
    console.log("Formulario enviado:", formData)
    setOpenModal(true)

    // Resetear el formulario
    setFormData({
      name: "",
      email: "",
      company: "",
      number: "",
      comments: "",
    })
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  return (
    <Box sx={{ py: 8, backgroundColor: brandColors.cream }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <SectionTitle variant="h2">Contáctanos</SectionTitle>
          <SectionSubtitle variant="subtitle1">
            Estamos aquí para ayudarte. Ponte en contacto con nosotros para cualquier consulta o solicitud.
          </SectionSubtitle>
        </Box>

        <Grid container justifyContent="center" alignItems="center" spacing={4}>
          {/* Información de contacto */}
          <Grid item xs={12} md={5}>
            <ContactCard>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: brandColors.black }}>
                  Información de Contacto
                </Typography>

                <ContactItem>
                  <PhoneIcon />
                  <Box>
                    <ContactItemTitle variant="subtitle1">Teléfono</ContactItemTitle>
                    <ContactItemText variant="body1">0342 401-5321</ContactItemText>
                  </Box>
                </ContactItem>

                <ContactItem>
                  <EmailIcon />
                  <Box>
                    <ContactItemTitle variant="subtitle1">Email</ContactItemTitle>
                    <ContactItemText variant="body1">ferreteriacecconce@gmail.com</ContactItemText>
                  </Box>
                </ContactItem>

                <ContactItem>
                  <LocationOnIcon />
                  <Box>
                    <ContactItemTitle variant="subtitle1">Dirección</ContactItemTitle>
                    <ContactItemText variant="body1">Av. Aristóbulo del Valle 9596, Santa Fe.</ContactItemText>
                  </Box>
                </ContactItem>

                <ContactItem>
                  <AccessTimeIcon />
                  <Box>
                    <ContactItemTitle variant="subtitle1">Horarios de Atención</ContactItemTitle>
                    <ContactItemText variant="body1">
                      Lunes a Viernes: 8:00 - 19:00
                      <br />
                      Sábados: 8:30 - 19:00
                    </ContactItemText>
                  </Box>
                </ContactItem>

                <Divider sx={{ my: 3, backgroundColor: brandColors.lightGray }} />

                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: brandColors.black }}>
                  Nuestra Ubicación
                </Typography>

                <MapContainer>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.8982320223!2d-60.70408492428967!3d-31.63999997278779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b5a9adc81811e1%3A0xb89c31fabf8b5a4e!2sAv.%20Arist%C3%B3bulo%20del%20Valle%209596%2C%20S3004%20Santa%20Fe!5e0!3m2!1ses!2sar!4v1714500000000!5m2!1ses!2sar"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </MapContainer>
              </CardContent>
            </ContactCard>
          </Grid>

          {/* Formulario de contacto */}
          <Grid item xs={12} md={7}>
            <FormContainer>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: brandColors.black }}>
                Envíanos un Mensaje
              </Typography>

              <Typography variant="body1" sx={{ mb: 4, color: brandColors.mediumGray }}>
                Completa el formulario y nos pondremos en contacto contigo lo antes posible.
              </Typography>

              <form onSubmit={handleSubmit}>
                <Grid container spacing={2} flexDirection="column">
                  <Grid item xs={12} sm={6}>
                    <StyledTextField
                      fullWidth
                      label="Nombre"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <StyledTextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <StyledTextField
                      fullWidth
                      label="Empresa (opcional)"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <StyledTextField
                      fullWidth
                      label="Teléfono"
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <StyledTextField
                      fullWidth
                      label="Mensaje"
                      name="comments"
                      value={formData.comments}
                      onChange={handleChange}
                      required
                      multiline
                      rows={5}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                      <SubmitButton type="submit" variant="contained" endIcon={<SendIcon />}>
                        Enviar Mensaje
                      </SubmitButton>
                    </Box>
                  </Grid>
                </Grid>
              </form>
            </FormContainer>
          </Grid>
        </Grid>
      </Container>

      {/* Modal de confirmación */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        slots={{
          backdrop: Backdrop,
        }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openModal}>
          <ModalContent>
            <CloseButton onClick={handleCloseModal}>
              <CloseIcon />
            </CloseButton>
            <ModalIcon />
            <Typography variant="h5" component="h2" sx={{ fontWeight: 700, mb: 2, color: brandColors.black }}>
              ¡Mensaje Enviado!
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: brandColors.mediumGray }}>
              Gracias por contactarnos. Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible.
            </Typography>
            <Button
              variant="contained"
              onClick={handleCloseModal}
              sx={{
                backgroundColor: brandColors.primary,
                "&:hover": {
                  backgroundColor: brandColors.primaryDark,
                },
                textTransform: "none",
                fontWeight: 600,
                borderRadius: 8,
                px: 3,
              }}
            >
              Aceptar
            </Button>
          </ModalContent>
        </Fade>
      </Modal>
    </Box>
  )
}

export default Contacto
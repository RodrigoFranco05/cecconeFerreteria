import React from 'react';
import { 
  Box, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  Divider,
  Paper,
  Grid
} from '@mui/material';

const FilterPanel = ({ filtros, onFiltroChange, opcionesFiltros }) => {
  const { 
    marcas = [], 
    colores = [], 
    categorias = [],
    subcategorias = [],
    tamanios = [],
    materiales = [],
    acabados = [],
    pesos = [],
    ubicaciones = []
  } = opcionesFiltros || {};

  // Función auxiliar para manejar cambios en los campos de texto y selects
  const handleInputChange = (name) => (event) => {
    onFiltroChange({
      target: {
        name,
        value: event.target.value
      }
    });
  };

  // Función auxiliar para manejar cambios en los checkboxes
  const handleCheckboxChange = (name) => (event) => {
    onFiltroChange({
      target: {
        name,
        type: 'checkbox',
        checked: event.target.checked
      }
    });
  };

  // Helper para renderizar un FormControl select
  const renderSelect = (name, label, options, value) => (
    <FormControl fullWidth size="small" sx={{ mb: 2 }}>
      <InputLabel id={`${name}-label`}>{label}</InputLabel>
      <Select
        labelId={`${name}-label`}
        id={`${name}-select`}
        value={value || ""}
        label={label}
        onChange={handleInputChange(name)}
      >
        <MenuItem value="">Todos</MenuItem>
        {options.map((option) => (
          <MenuItem key={option} value={option}>{option}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
      <Typography variant="h6" gutterBottom>Filtros</Typography>
      <Divider sx={{ mb: 2 }} />
      
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            {/* Categoría (itemDatoAtributo1) */}
            {renderSelect("categoria", "Categoría", categorias, filtros.categoria)}
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            {/* Subcategoría (itemDatoAtributo2) */}
            {renderSelect("subcategoria", "Subcategoría", subcategorias, filtros.subcategoria)}
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            {/* Marca (itemDatoAtributo3) */}
            {renderSelect("marca", "Marca", marcas, filtros.marca)}
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            {/* Color (itemDatoAtributo4) */}
            {renderSelect("color", "Color", colores, filtros.color)}
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            {/* Tamaño (itemDatoAtributo5) */}
            {renderSelect("tamanio", "Tamaño", tamanios, filtros.tamanio)}
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            {/* Peso (itemDatoAtributo6) */}
            {renderSelect("peso", "Peso", pesos, filtros.peso)}
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            {/* Material (itemDatoAtributo7) */}
            {renderSelect("material", "Material", materiales, filtros.material)}
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            {/* Acabado (itemDatoAtributo8) */}
            {renderSelect("acabado", "Acabado", acabados, filtros.acabado)}
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            {/* Ubicación */}
            {renderSelect("ubicacion", "Ubicación", ubicaciones, filtros.ubicacion)}
          </Grid>
        </Grid>

        <Box sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              {/* Checkbox para Nuevo (isNew) */}
              <FormControlLabel
                control={
                  <Checkbox 
                    checked={Boolean(filtros.nuevo)} 
                    onChange={handleCheckboxChange('nuevo')} 
                    name="nuevo" 
                  />
                }
                label="Nuevo"
              />
            </Grid>
            
            <Grid item xs={12} sm={4}>
              {/* Checkbox para Envío Gratis (freeShipping) */}
              <FormControlLabel
                control={
                  <Checkbox 
                    checked={Boolean(filtros.envioGratis)} 
                    onChange={handleCheckboxChange('envioGratis')} 
                    name="envioGratis" 
                  />
                }
                label="Envío gratis"
              />
            </Grid>
            
            <Grid item xs={12} sm={4}>
              {/* Checkbox para Con descuento (hasDiscount) */}
              <FormControlLabel
                control={
                  <Checkbox 
                    checked={Boolean(filtros.descuento)} 
                    onChange={handleCheckboxChange('descuento')} 
                    name="descuento" 
                  />
                }
                label="Con descuento"
              />
            </Grid>
          </Grid>
        </Box>

        {/* Filtro por Precio */}
        <Typography variant="subtitle2" sx={{ mt: 2, mb: 1 }}>Rango de precio</Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <TextField
            label="Mínimo"
            type="number"
            size="small"
            fullWidth
            value={filtros.precioMin || ""}
            onChange={handleInputChange('precioMin')}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Máximo"
            type="number"
            size="small"
            fullWidth
            value={filtros.precioMax || ""}
            onChange={handleInputChange('precioMax')}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>
      </Box>
    </Paper>
  );
};

export default FilterPanel;
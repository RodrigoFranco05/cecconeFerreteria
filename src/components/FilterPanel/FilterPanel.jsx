import React from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

// const marcas = ['Bosch', 'Makita', 'Stanley', 'DeWalt'];
// const tipos = ['Herramientas manuales', 'Eléctricas', 'Neumáticas'];
// const colores = ['Rojo', 'Negro', 'Azul'];

const FilterPanel = ({ setFilters , options}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

const renderSelect = (name, label, values) => (
    <FormControl>
      <InputLabel>{label}</InputLabel>
      <Select name={name} label={label} onChange={handleChange} defaultValue="">
        <MenuItem value="">Todos</MenuItem>
        {values.map((val) => (
          <MenuItem key={val} value={val}>{val}</MenuItem>
        ))}
      </Select>
    </FormControl>
);


  return (
    <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
      {renderSelect("marca", "Marca", options.marcas || [])}
      {renderSelect("tipo", "Tipo", options.tipos || [])}
      {renderSelect("color", "Color", options.colores || [])}
    </Box>
  );
};

export default FilterPanel;

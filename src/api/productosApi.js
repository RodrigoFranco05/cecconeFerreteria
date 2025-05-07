// src/api/productosApi.js
const API_URL = "http://localhost:3001/productos";

// Esta función construye una URL con filtros (como si fuera una API real)
export const fetchProductosConFiltros = async (filtros) => {
  const params = new URLSearchParams();

  if (filtros.marca) params.append("marca", filtros.marca);
  if (filtros.color) params.append("color", filtros.color);
  if (filtros.categoria) params.append("categoria", filtros.categoria);
  if (filtros.subrubro) params.append("subrubro", filtros.subrubro);
  if (filtros.envioGratis !== undefined)
    params.append("envioGratis", filtros.envioGratis);
  if (filtros.nuevo !== undefined) params.append("nuevo", filtros.nuevo);
  if (filtros.precioMin) params.append("precio_gte", filtros.precioMin); // json-server usa _gte para mayor igual
  if (filtros.precioMax) params.append("precio_lte", filtros.precioMax); // _lte para menor igual

  const response = await fetch(`${API_URL}?${params.toString()}`);
  const data = await response.json();
  return data;
};

export const obtenerProductosFiltrados = async (filtros) => {
  const baseUrl = 'http://localhost:3001/productos';

  const params = new URLSearchParams();

  // Mapeo de filtros a campos reales en el JSON
  const mapeoFiltros = {
    categoria: 'itemDatoAtributo1',
    subcategoria: 'itemDatoAtributo2',
    marca: 'itemDatoAtributo3',
    color: 'itemDatoAtributo4',
    tamanio: 'itemDatoAtributo5',
    peso: 'itemDatoAtributo6',
    material: 'itemDatoAtributo7',
    acabado: 'itemDatoAtributo8',
    ubicacion: 'ubicacion',
    nuevo: 'isNew',
    envioGratis: 'freeShipping',
    descuento: 'hasDiscount'
  };

  // Recorremos las claves del objeto filtros
  Object.keys(filtros).forEach((key) => {
    const valor = filtros[key];

    // Si el valor existe y no está vacío, lo agregamos a la URL
    if (valor !== undefined && valor !== '' && valor !== false) {
      // Para filtros booleanos
      if (key === 'nuevo' || key === 'envioGratis' || key === 'descuento') {
        params.append(mapeoFiltros[key], valor);
      } 
      // Para filtros de precio
      else if (key === 'precioMin') {
        params.append('precio_gte', valor);
      } 
      else if (key === 'precioMax') {
        params.append('precio_lte', valor);
      }
      // Para los filtros mapeados
      else if (mapeoFiltros[key]) {
        params.append(mapeoFiltros[key], valor);
      }
      // Para cualquier otro filtro no mapeado
      else {
        params.append(key, valor);
      }
    }
  });

  const urlFinal = `${baseUrl}?${params.toString()}`;

  try {
    const respuesta = await fetch(urlFinal);
    if (!respuesta.ok) {
      throw new Error('Error al obtener productos');
    }
    return await respuesta.json();
  } catch (error) {
    console.error('Error en la API:', error);
    return [];
  }
};

// Función para obtener todas las opciones disponibles para los filtros
export const obtenerOpcionesFiltros = async () => {
  try {
    // Obtenemos todos los productos
    const respuesta = await fetch(API_URL);
    if (!respuesta.ok) {
      throw new Error('Error al obtener productos');
    }
    
    const productos = await respuesta.json();
    
    // Extraemos valores únicos para cada filtro basados en la estructura
    const opcionesFiltros = {
      categorias: [...new Set(productos.map(p => p.itemDatoAtributo1).filter(Boolean))],
      subcategorias: [...new Set(productos.map(p => p.itemDatoAtributo2).filter(Boolean))],
      marcas: [...new Set(productos.map(p => p.itemDatoAtributo3).filter(Boolean))],
      colores: [...new Set(productos.map(p => p.itemDatoAtributo4).filter(Boolean))],
      tamanios: [...new Set(productos.map(p => p.itemDatoAtributo5).filter(Boolean))],
      pesos: [...new Set(productos.map(p => p.itemDatoAtributo6).filter(Boolean))],
      materiales: [...new Set(productos.map(p => p.itemDatoAtributo7).filter(Boolean))],
      acabados: [...new Set(productos.map(p => p.itemDatoAtributo8).filter(Boolean))],
      ubicaciones: [...new Set(productos.map(p => p.ubicacion).filter(Boolean))],
      // Los booleanos no necesitan opciones ya que son true/false
    };
    
    return opcionesFiltros;
  } catch (error) {
    console.error('Error al obtener opciones de filtros:', error);
    return {
      categorias: [],
      subcategorias: [],
      marcas: [],
      colores: [],
      tamanios: [],
      pesos: [],
      materiales: [],
      acabados: [],
      ubicaciones: []
    };
  }
};
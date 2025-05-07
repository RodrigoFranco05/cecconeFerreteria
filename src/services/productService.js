export async function fetchProducts() {
    const response = await fetch('/items_prueba.json');
    if (!response.ok) throw new Error('Error al cargar productos');
    const data = await response.json();
    return data;
  }
  
  export function filterProducts(products, filters) {
    return products.filter((product) => {
      return (
        (!filters.marca || product.itemDatoAtributo3 === filters.marca) &&
        (!filters.tipo || product.itemDatoAtributo1 === filters.tipo) &&
        (!filters.color || product.itemDatoAtributo4 === filters.color)
      );
    });
  }

  export function getFilterOptions(products) {
    const unique = (arr) => [...new Set(arr.filter(Boolean))];
    return {
      marcas: unique(products.map(p => p.itemDatoAtributo3)),
      tipos: unique(products.map(p => p.itemDatoAtributo1)),
      colores: unique(products.map(p => p.itemDatoAtributo4)),
    };
  }
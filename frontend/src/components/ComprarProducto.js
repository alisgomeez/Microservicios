import React, { useState, useEffect } from 'react';

function ComprarProducto() {
  const [productos, setProductos] = useState([]);
  const [proveedores, setProveedores] = useState([]);
  const [selectedProducto, setSelectedProducto] = useState('');
  const [selectedProveedor, setSelectedProveedor] = useState('');
  const [cantidad, setCantidad] = useState(1);
  
  // Simulación de obtener productos desde la API
  useEffect(() => {
    // Obtener productos
    fetch('http://localhost:3001/api/productos/lista')  // Cambia la URL si es necesario
      .then(response => response.json())
      .then(data => setProductos(data))
      .catch(error => console.error('Error al obtener productos:', error));

    // Obtener proveedores
    fetch('http://localhost:3002/api/proveedores/lista')  // Cambia la URL si es necesario
      .then(response => response.json())
      .then(data => setProveedores(data))
      .catch(error => console.error('Error al obtener proveedores:', error));
  }, []);

  // Función para manejar la compra
  const handleCompra = (e) => {
    e.preventDefault();
    
    // Aquí puedes agregar la lógica para realizar la compra
    alert(`Comprando ${cantidad} unidades de ${selectedProducto} del proveedor ${selectedProveedor}`);
  };

  return (
    <div className="container">
      <h1>Compra tu Producto</h1>

      <form onSubmit={handleCompra}>
        <div className="mb-3">
          <label htmlFor="producto" className="form-label">Selecciona un producto</label>
          <select
            id="producto"
            className="form-select"
            value={selectedProducto}
            onChange={(e) => setSelectedProducto(e.target.value)}
            required
          >
            <option value="">Elige un producto</option>
            {productos.map((producto) => (
              <option key={producto._id} value={producto.nombre}>
                {producto.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="proveedor" className="form-label">Selecciona un proveedor</label>
          <select
            id="proveedor"
            className="form-select"
            value={selectedProveedor}
            onChange={(e) => setSelectedProveedor(e.target.value)}
            required
          >
            <option value="">Elige un proveedor</option>
            {proveedores.map((proveedor) => (
              <option key={proveedor._id} value={proveedor.nombre}>
                {proveedor.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="cantidad" className="form-label">Cantidad</label>
          <input
            type="number"
            id="cantidad"
            className="form-control"
            min="1"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Comprar</button>
      </form>
    </div>
  );
}

export default ComprarProducto;

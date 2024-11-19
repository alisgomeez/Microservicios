import React, { useState, useEffect } from 'react';
import AgregarProducto from './AgregarProducto';

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [proveedores, setProveedores] = useState([]);

  useEffect(() => {
    // Obtener productos desde la API
    fetch('http://localhost:3001/api/productos')  
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error('Error al obtener productos:', error));

    // Obtener proveedores desde la API
    fetch('http://localhost:3003/api/proveedores')  
      .then((response) => response.json())
      .then((data) => setProveedores(data))
      .catch((error) => console.error('Error al obtener proveedores:', error));
  }, []);

  const eliminarProducto = (id) => {
    // Eliminar producto conm ID
    fetch(`http://localhost:3001/api/productos/${id}`, { 
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setProductos((prev) => prev.filter((producto) => producto._id !== id));
        } else {
          console.error('Error al eliminar producto');
        }
      })
      .catch((error) => console.error('Error al eliminar producto:', error));
  };

  // Función para savar nombre del proveedor porque solo sale ell id
  const obtenerNombreProveedor = (proveedorId) => {
    const proveedor = proveedores.find(p => p._id === proveedorId);
    return proveedor ? proveedor.nombre : 'Proveedor desconocido';
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Lista de Productos</h1>

      {productos.length > 0 ? (
        <div className="row">
          {productos.map((producto) => (
            <div key={producto._id} className="col-md-4 mb-4">
              <div className="card shadow-lg border-light rounded">
                <div className="card-body">
                  <h5 className="card-title text-primary">{producto.nombre}</h5>
                  <p className="card-text"><strong>Descripción:</strong> {producto.descripcion}</p>
                  <p className="card-text"><strong>Precio:</strong> ${producto.precio}</p>
                  <p className="card-text"><strong>Proveedor:</strong> {obtenerNombreProveedor(producto.proveedor)}</p>
                  <button
                    className="btn btn-danger btn-sm mx-1"
                    onClick={() => eliminarProducto(producto._id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No hay productos disponibles.</p>
      )}

      <AgregarProducto />
    </div>
  );
};

export default Productos;

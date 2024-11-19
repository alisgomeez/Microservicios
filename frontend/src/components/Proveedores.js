import React, { useState, useEffect } from 'react';
import AgregarProveedor from './AgregarProveedor';

const Proveedores = () => {
  const [proveedores, setProveedores] = useState([]);
  //obtener proveedores desde api proveedores
  useEffect(() => {
    fetch('http://localhost:3003/api/proveedores')
      .then((response) => response.json())
      .then((data) => setProveedores(data))
      .catch((error) => console.error('Error al obtener proveedores:', error));
  }, []);
  
  //funcion eliminar
  const eliminarProveedor = (id) => {
    fetch(`http://localhost:3003/api/proveedores/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setProveedores((prev) => prev.filter((proveedor) => proveedor._id !== id)); 
        } else {
          console.error('Error al eliminar proveedor');
        }
      })
      .catch((error) => console.error('Error al eliminar proveedor:', error));
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Gestión de Proveedores</h1>

      <h2 className="mb-4">Lista de Proveedores</h2>
      {proveedores.length > 0 ? (
        <div className="row">
          {proveedores.map((proveedor) => (
            <div key={proveedor._id} className="col-md-4 mb-4">
              <div className="card shadow-lg border-light rounded">
                <div className="card-body">
                  <h5 className="card-title text-primary">{proveedor.nombre}</h5>
                  <p className="card-text"><strong>Dirección:</strong> {proveedor.direccion}</p>
                  <p className="card-text"><strong>Teléfono:</strong> {proveedor.telefono}</p>
                  <p className="card-text"><strong>Email:</strong> {proveedor.email}</p>
                  <button
                    className="btn btn-danger btn-sm mx-1"
                    onClick={() => eliminarProveedor(proveedor._id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No hay proveedores disponibles.</p>
      )}

      <AgregarProveedor />
    </div>
  );
};

export default Proveedores;

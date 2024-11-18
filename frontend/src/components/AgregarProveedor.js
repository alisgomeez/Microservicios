import React, { useState } from 'react';
import axios from 'axios';

function AgregarProveedor() {
  const [nombre, setNombre] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const proveedor = {
      nombre,
      empresa,
      telefono,
    };

    try {
      await axios.post('http://localhost:3003/api/proveedores/agregar', proveedor);
      alert('Proveedor agregado correctamente');
      // Limpiar formulario
      setNombre('');
      setEmpresa('');
      setTelefono('');
    } catch (error) {
      alert('Error al agregar el proveedor');
    }
  };

  return (
    <div className="container p-5">
      <h1>Agregar Proveedor</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="empresa">Empresa</label>
          <input
            type="text"
            className="form-control"
            value={empresa}
            onChange={(e) => setEmpresa(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="telefono">Teléfono</label>
          <input
            type="text"
            className="form-control"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Agregar Proveedor
        </button>
      </form>
    </div>
  );
}

export default AgregarProveedor;

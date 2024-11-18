import React, { useState } from 'react';
import axios from 'axios';

function AgregarProducto() {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [proveedorId, setProveedorId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const producto = {
      nombre,
      descripcion,
      precio,
      proveedorId,
    };

    try {
      await axios.post('http://localhost:3002/api/productos/agregar', producto);
      alert('Producto agregado correctamente');
      // Limpiar formulario
      setNombre('');
      setDescripcion('');
      setPrecio('');
      setProveedorId('');
    } catch (error) {
      alert('Error al agregar el producto');
    }
  };

  return (
    <div className="container p-5">
      <h1>Agregar Producto</h1>
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
          <label htmlFor="descripcion">Descripción</label>
          <input
            type="text"
            className="form-control"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="precio">Precio</label>
          <input
            type="number"
            className="form-control"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="proveedor">Proveedor</label>
          <input
            type="text"
            className="form-control"
            value={proveedorId}
            onChange={(e) => setProveedorId(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Agregar Producto
        </button>
      </form>
    </div>
  );
}

export default AgregarProducto;

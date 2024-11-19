import React, { useState } from 'react';

const AgregarProveedor = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    direccion: '',
    telefono: '',
    email: '',
  });

  const [mensaje, setMensaje] = useState(''); // Mensaje para mostrar al usuario

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3003/proveedores/agregar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setMensaje('Proveedor agregado con éxito');
        setFormData({ nombre: '', direccion: '', telefono: '', email: '' }); // Limpiar el formulario
      } else {
        setMensaje(`Error al agregar el proveedor: ${data.mensaje}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setMensaje('Hubo un error al intentar agregar el proveedor');
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Agregar Proveedor</h2>

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="form-group shadow-lg p-4 rounded bg-light">
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre del Proveedor</label>
          <input
            type="text"
            name="nombre"
            className="form-control"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="direccion" className="form-label">Dirección</label>
          <input
            type="text"
            name="direccion"
            className="form-control"
            value={formData.direccion}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="telefono" className="form-label">Teléfono</label>
          <input
            type="text"
            name="telefono"
            className="form-control"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block">Agregar Proveedor</button>
      </form>

      {/* Mensaje de éxito o error */}
      {mensaje && <p className="mt-4 text-center">{mensaje}</p>}
    </div>
  );
};

export default AgregarProveedor;

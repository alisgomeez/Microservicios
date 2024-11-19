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
    <div>
      <h2>Agregar Proveedor</h2>
      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <div>
          <label>Nombre del Proveedor:</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Dirección:</label>
          <input
            type="text"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Teléfono:</label>
          <input
            type="text"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Agregar Proveedor</button>
      </form>

      {mensaje && <p>{mensaje}</p>} {/* Mostrar mensaje de éxito o error */}
    </div>
  );
};

export default AgregarProveedor;

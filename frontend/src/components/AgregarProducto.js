import React, { useState, useEffect } from 'react';

const AgregarProducto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    proveedor: '',
  });

  const [mensaje, setMensaje] = useState(''); // Mensaje para mostrar al usuario
  const [proveedores, setProveedores] = useState([]); // Lista de proveedores

  // Obtener proveedores al cargar el componente
  useEffect(() => {
    fetch('http://localhost:3003/api/proveedores') // Asegúrate de que esta sea la URL correcta
      .then((response) => response.json())
      .then((data) => setProveedores(data))
      .catch((error) => console.error('Error al obtener proveedores:', error));
  }, []);

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
      const response = await fetch('http://localhost:3001/api/productos/agregar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setMensaje('Producto agregado con éxito');
        setFormData({ nombre: '', descripcion: '', precio: '', proveedor: '' }); // Limpiar el formulario
      } else {
        setMensaje(`Error al agregar el producto: ${data.mensaje}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setMensaje('Hubo un error al intentar agregar el producto');
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Agregar Producto</h2>

      {/* Mostrar mensaje de éxito o error en alerta azul */}
      {mensaje && <div className="alert alert-info">{mensaje}</div>}

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="form-group shadow-lg p-4 rounded bg-light">
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre del Producto</label>
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
          <label htmlFor="descripcion" className="form-label">Descripción</label>
          <input
            type="text"
            name="descripcion"
            className="form-control"
            value={formData.descripcion}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="precio" className="form-label">Precio</label>
          <input
            type="number"
            name="precio"
            className="form-control"
            value={formData.precio}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="proveedor" className="form-label">Proveedor</label>
          <select
            name="proveedor"
            className="form-control"
            value={formData.proveedor}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione un proveedor</option>
            {proveedores.map((proveedor) => (
              <option key={proveedor._id} value={proveedor._id}>
                {proveedor.nombre}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary btn-block">Agregar Producto</button>
      </form>
    </div>
  );
};

export default AgregarProducto;

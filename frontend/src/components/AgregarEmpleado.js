import React, { useState } from 'react';

const AgregarEmpleado = () => {
  // Estados para los campos del formulario
  const [nombre, setNombre] = useState('');
  const [area, setArea] = useState('');
  const [sueldo, setSueldo] = useState('');
  const [sucursal, setSucursal] = useState('');
  const [mensaje, setMensaje] = useState(''); // Para mostrar mensaje de éxito o error

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evitar el refresco de la página

    const nuevoEmpleado = {
      nombre,
      area,
      sueldo,
      sucursal
    };

    try {
      const response = await fetch('http://localhost:3005/api/empleados/agregar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoEmpleado)
      });

      const data = await response.json();

      if (response.ok) {
        setMensaje('Empleado agregado exitosamente');
        // Limpiar los campos del formulario
        setNombre('');
        setArea('');
        setSueldo('');
        setSucursal('');
      } else {
        setMensaje(`Error: ${data.mensaje}`);
      }
    } catch (error) {
      setMensaje('Error al agregar el empleado');
      console.error('Error:', error);
    }
  };

  return (
    <div className="container my-5">
      <h2>Agregar Empleado</h2>
      
      {/* Mostrar mensaje de éxito o error */}
      {mensaje && <div className="alert alert-info">{mensaje}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="area" className="form-label">Área</label>
          <input
            type="text"
            className="form-control"
            id="area"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            required
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="sueldo" className="form-label">Sueldo</label>
          <input
            type="number"
            className="form-control"
            id="sueldo"
            value={sueldo}
            onChange={(e) => setSueldo(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="sucursal" className="form-label">Sucursal</label>
          <input
            type="text"
            className="form-control"
            id="sucursal"
            value={sucursal}
            onChange={(e) => setSucursal(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Agregar Empleado</button>
      </form>
    </div>
  );
};

export default AgregarEmpleado;

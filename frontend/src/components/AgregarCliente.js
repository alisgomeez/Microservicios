import React, { useState, useEffect } from 'react';

const AgregarCliente = () => {
  // Estados para los campos del formulario
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [empleado, setEmpleado] = useState(''); // Para almacenar el ID del empleado seleccionado
  const [empleados, setEmpleados] = useState([]); // Para almacenar la lista de empleados
  const [mensaje, setMensaje] = useState(''); // Para mostrar mensaje de éxito o error

  // Obtener la lista de empleados desde la API
  useEffect(() => {
    const fetchEmpleados = async () => {
      try {
        const response = await fetch('http://localhost:3005/api/empleados');
        const data = await response.json();
        setEmpleados(data);
      } catch (error) {
        console.error('Error al obtener empleados:', error);
      }
    };

    fetchEmpleados();
  }, []);

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evitar el refresco de la página

    const nuevoCliente = {
      nombre,
      apellido,
      telefono,
      empleado, // Enviar el ID del empleado asociado
    };

    try {
      const response = await fetch('http://localhost:3006/api/clientes/agregar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoCliente),
      });

      const data = await response.json();

      if (response.ok) {
        setMensaje('Cliente agregado exitosamente');
        // Limpiar los campos del formulario
        setNombre('');
        setApellido('');
        setTelefono('');
        setEmpleado('');
      } else {
        setMensaje(`Error: ${data.mensaje}`);
      }
    } catch (error) {
      setMensaje('Error al agregar el cliente');
      console.error('Error:', error);
    }
  };

  return (
    <div className="container my-5">
      <h2>Agregar suscriptor</h2>
      
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
          <label htmlFor="apellido" className="form-label">Apellido</label>
          <input
            type="text"
            className="form-control"
            id="apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            required
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="telefono" className="form-label">Teléfono</label>
          <input
            type="text"
            className="form-control"
            id="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="empleado" className="form-label">Empleado</label>
          <select
            id="empleado"
            className="form-control"
            value={empleado}
            onChange={(e) => setEmpleado(e.target.value)}
            required
          >
            <option value="">Selecciona un empleado</option>
            {empleados.map((empleado) => (
              <option key={empleado._id} value={empleado._id}>
                {empleado.nombre}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary">Agregar</button>
      </form>
    </div>
  );
};

export default AgregarCliente;

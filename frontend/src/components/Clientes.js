import React, { useState, useEffect } from 'react';
import AgregarCliente from './AgregarCliente'; 

const Clientes = () => {
  const [clientes, setClientes] = useState([]);
  const [empleados, setEmpleados] = useState([]);

  
  useEffect(() => {
    // Obtener clientes desde la API
    fetch('http://localhost:3006/api/clientes') 
      .then((response) => response.json())
      .then((data) => setClientes(data))
      .catch((error) => console.error('Error al obtener clientes:', error));

    // Obtener empleados desde la API
    fetch('http://localhost:3005/api/empleados') 
      .then((response) => response.json())
      .then((data) => setEmpleados(data))
      .catch((error) => console.error('Error al obtener empleados:', error));
  }, []);

  const eliminarCliente = (id) => {
    // Eliminar cliente con el ID
    fetch(`http://localhost:3006/api/clientes/${id}`, { 
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setClientes((prev) => prev.filter((cliente) => cliente._id !== id));
        } else {
          console.error('Error al eliminar cliente');
        }
      })
      .catch((error) => console.error('Error al eliminar cliente:', error));
  };

  // se obtiene el nombre pprique al seleccionarlo solo se queda con el id
  const obtenerNombreEmpleado = (empleadoId) => {
    const empleado = empleados.find((e) => e._id === empleadoId);
    return empleado ? empleado.nombre : 'Empleado desconocido';
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Clientes</h1>

      {clientes.length > 0 ? (
        <div className="row">
          {clientes.map((cliente) => (
            <div key={cliente._id} className="col-md-4 mb-4">
              <div className="card shadow-lg border-light rounded">
                <div className="card-body">
                  <h5 className="card-title text-primary">{cliente.nombre} {cliente.apellido}</h5>
                  <p className="card-text"><strong>Teléfono:</strong> {cliente.telefono}</p>
                  <p className="card-text"><strong>Empleado que lo suscribió:</strong> {obtenerNombreEmpleado(cliente.empleado)}</p>
                  <button
                    className="btn btn-danger btn-sm mx-1"
                    onClick={() => eliminarCliente(cliente._id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No hay clientes disponibles.</p>
      )}

      <AgregarCliente /> 
    </div>
  );
};

export default Clientes;

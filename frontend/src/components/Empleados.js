import React, { useState, useEffect } from 'react';
import AgregarEmpleado from './AgregarEmpleado';

const Empleados = () => {
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    // Obtener empleados desde la API
    fetch('http://localhost:3005/api/empleados') 
      .then((response) => response.json())
      .then((data) => setEmpleados(data))
      .catch((error) => console.error('Error al obtener empleados:', error));
  }, []);

  const eliminarEmpleado = (id) => {
    // Eliminar empleado con ID
    fetch(`http://localhost:3005/api/empleados/${id}`, { 
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setEmpleados((prev) => prev.filter((empleado) => empleado._id !== id));
        } else {
          console.error('Error al eliminar empleado');
        }
      })
      .catch((error) => console.error('Error al eliminar empleado:', error));
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Gestión de Empleados</h1>

      <h2 className="mb-4">Lista de Empleados</h2>
      {empleados.length > 0 ? (
        <div className="row">
          {empleados.map((empleado) => (
            <div key={empleado._id} className="col-md-4 mb-4">
              <div className="card shadow-lg border-light rounded">
                <div className="card-body">
                  <h5 className="card-title text-primary">{empleado.nombre}</h5>
                  <p className="card-text"><strong>Área:</strong> {empleado.area}</p>
                  <p className="card-text"><strong>Sueldo:</strong> ${empleado.sueldo}</p>
                  <p className="card-text"><strong>Sucursal:</strong> {empleado.sucursal}</p>
                  <button
                    className="btn btn-danger btn-sm mx-1"
                    onClick={() => eliminarEmpleado(empleado._id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No hay empleados disponibles.</p>
      )}

      <AgregarEmpleado />
    </div>
  );
};

export default Empleados;

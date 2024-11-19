// controllers/empleado.controller.js
import Empleado from '../models/Empleado.js';

export const renderEmpleados = async (req, res) => {
  try {
    const empleados = await Empleado.find(); // Obtener los empleados
    res.status(200).json(empleados); // se necesitan devolver en formato json para que el frontend los reconozca
  } catch (error) {
    console.error('Error al obtener empleados:', error);
    res.status(500).json({ mensaje: 'Error en el servidor' });
  }
};

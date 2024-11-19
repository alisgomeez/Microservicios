import express from 'express';
import Empleado from '../models/Empleado.js'; // Modelo Empleado
import { renderEmpleados } from '../controllers/empleado.controller.js'; // Controlador Empleado

const router = express.Router();

// Ruta para obtener los empleados
router.get('/api/empleados', renderEmpleados);

// Ruta para agregar un empleado
router.post('/api/empleados/agregar', async (req, res) => {
    const { nombre, area, sueldo, sucursal } = req.body;

    try {
        const nuevoEmpleado = new Empleado({
            nombre,
            area,
            sueldo,
            sucursal,
        });

        // Guardar en la base de datos
        await nuevoEmpleado.save();
        res.status(201).json({ mensaje: 'Empleado agregado exitosamente' });
    } catch (error) {
        console.error('Error al agregar el empleado:', error);
        res.status(500).json({ mensaje: 'Error al agregar el empleado', error });
    }
});

// Ruta para eliminar un empleado
router.delete('/api/empleados/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Empleado.findByIdAndDelete(id);
        res.status(200).json({ mensaje: 'Empleado eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el empleado', error });
    }
});

export default router;

import express from 'express';
import { renderProveedores } from '../controllers/proveedor.controller.js';
import Proveedor from '../models/Proveedor.js';

const router = express.Router();

router.get('/api/proveedores', renderProveedores);

// Ruta para agregar un proveedor
router.post('/proveedores/agregar', async (req, res) => {
    const { nombre, direccion, telefono, email } = req.body;

    try {
        const nuevoProveedor = new Proveedor({
            nombre,
            direccion,
            telefono,
            email,
        });

        // Guardar en la base de datos
        await nuevoProveedor.save();
        res.status(201).json({ mensaje: 'Proveedor agregado exitosamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al agregar el proveedor', error });
    }
});

// Eliminar un proveedor
router.delete('/api/proveedores/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Proveedor.findByIdAndDelete(id);
        res.status(200).json({ mensaje: 'Proveedor eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el proveedor', error });
    }
});

// Actualizar un proveedor
router.put('/api/proveedores/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, direccion, telefono, email } = req.body;

        // Verifica que los campos sean válidos
        if (!nombre || !direccion || !telefono || !email) {
            return res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
        }

        const proveedorActualizado = await Proveedor.findByIdAndUpdate(
            id,
            { nombre, direccion, telefono, email },
            { new: true } // Retorna el documento actualizado
        );

        if (!proveedorActualizado) {
            return res.status(404).json({ mensaje: 'Proveedor no encontrado' });
        }

        res.status(200).json(proveedorActualizado);
    } catch (error) {
        console.error('Error al actualizar proveedor:', error);
        res.status(500).json({ mensaje: 'Error al actualizar el proveedor', error });
    }
});

export default router;
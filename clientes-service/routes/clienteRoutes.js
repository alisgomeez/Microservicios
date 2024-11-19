import express from 'express';
import Cliente from '../models/Cliente.js';
import { renderClientes } from '../controllers/cliente.controller.js'; // Controlador Empleado

const router = express.Router();

// Ruta para obtener los clientes
router.get('/api/clientes', renderClientes);


router.post('/api/clientes/agregar', async (req, res) => {
  const { nombre, apellido, telefono, empleado } = req.body;

  try {
    if (!empleado) {
      return res.status(400).json({ mensaje: 'El campo empleado es obligatorio' });
    }

    const nuevoCliente = new Cliente({
      nombre,
      apellido,
      telefono,
      empleado,
    });

    await nuevoCliente.save();
    res.status(201).json({ mensaje: 'Cliente agregado exitosamente' });
  } catch (error) {
    console.error('Error al agregar el cliente:', error);
    res.status(500).json({ mensaje: 'Error al agregar el cliente', error });
  }
});


// Ruta para eliminar un empleado
router.delete('/api/clientes/:id', async (req, res) => {
  try {
      const { id } = req.params;
      await Cliente.findByIdAndDelete(id);
      res.status(200).json({ mensaje: 'Cliente eliminado exitosamente' });
  } catch (error) {
      res.status(500).json({ mensaje: 'Error al eliminar el cliente', error });
  }
});

export default router;

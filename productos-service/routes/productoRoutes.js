const express = require('express');
const Producto = require('../models/Producto'); // Asegúrate de tener el modelo de Producto
const router = express.Router();

// Ruta para agregar un nuevo producto
router.post('/agregar', async (req, res) => {
  const { nombre, descripcion, precio, proveedorId } = req.body;

  // Validación básica
  if (!nombre || !descripcion || !precio || !proveedorId) {
    return res.status(400).send('Todos los campos son requeridos');
  }

  try {
    // Crear el nuevo producto
    const nuevoProducto = new Producto({
      nombre,
      descripcion,
      precio,
      proveedorId, // Asociamos al proveedor
    });

    // Guardar el producto en la base de datos
    await nuevoProducto.save();
    res.status(201).send(`Producto ${nombre} agregado correctamente`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al agregar el producto');
  }
});

module.exports = router;

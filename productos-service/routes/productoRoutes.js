import express from 'express';
import Producto from '../models/Producto.js'; // Cambiar a modelo Producto
import { renderProductos } from '../controllers/producto.controller.js'; // Controlador Producto

const router = express.Router();

// Ruta para obtener los productos
router.get('/api/productos', renderProductos);

// Ruta para agregar un producto
router.post('/api/productos/agregar', async (req, res) => {
    const { nombre, descripcion, precio, proveedor } = req.body;

    try {
        const nuevoProducto = new Producto({
            nombre,
            descripcion,
            precio,
            proveedor,
        });

        // Guardar en la base de datos
        await nuevoProducto.save();
        res.status(201).json({ mensaje: 'Producto agregado exitosamente' });
    } catch (error) {
        console.error('Error al agregar el producto:', error);
        res.status(500).json({ mensaje: 'Error al agregar el producto', error });
    }
});

// Ruta para eliminar un producto
router.delete('/api/productos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Producto.findByIdAndDelete(id);
        res.status(200).json({ mensaje: 'Producto eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el producto', error });
    }
});

export default router;

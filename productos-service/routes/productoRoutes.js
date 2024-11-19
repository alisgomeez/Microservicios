// routes/productoRoutes.js
import express from 'express';
import { renderProductos } from '../controllers/producto.controller.js';

const router = express.Router();

// Ruta para obtener los productos
router.get('/api/productos', renderProductos);

export default router;


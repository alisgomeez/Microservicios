import express from 'express';
import { renderProveedores } from '../controllers/proveedor.controller.js';

const router = express.Router();

router.get('/api/proveedores', renderProveedores);

export default router;

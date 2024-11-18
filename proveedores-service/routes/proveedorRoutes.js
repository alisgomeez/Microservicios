// // proveedorRoutes.js

// import express from 'express';
// import { renderProveedores, createProveedor, renderProveedorEdit, editProveedor, deleteProveedor } from '../controllers/proveedor.controller.js';

// const router = express.Router();

// // Rutas de proveedores
// router.get('/api/proveedores', renderProveedores);
// router.get('/api/proveedores/add', (req, res) => {
//     res.render('add');
// });
// router.post('/api/proveedores/add', createProveedor);
// router.get('/api/proveedores/edit/:id', renderProveedorEdit); // Asegúrate de que esta ruta es correcta
// router.post('/api/proveedores/edit/:id', editProveedor);
// router.post('/api/proveedores/delete/:id', deleteProveedor);

// export default router;
// routes/proveedorRoutes.js
import express from 'express';
import { renderProveedores } from '../controllers/proveedor.controller.js';

const router = express.Router();

// Ruta para obtener los proveedores
router.get('/api/proveedores', renderProveedores);

export default router;

// controllers/proveedor.controller.js
import Proveedor from '../models/Proveedor.js';

export const renderProveedores = async (req, res) => {
    try {
        // Obtener todos los proveedores desde la base de datos
        const proveedores = await Proveedor.find();

        // Renderizar una vista HTML con los proveedores
        res.render('proveedores', { proveedores });  // 'proveedores' es el nombre de la vista
    } catch (error) {
        console.log('Error al obtener los proveedores:', error);
        res.status(500).send('Error en el servidor');
    }
};

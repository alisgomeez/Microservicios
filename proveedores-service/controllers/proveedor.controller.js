import Proveedor from '../models/Proveedor.js';

export const renderProveedores = async (req, res) => {
    try {
        // Obtener todos los proveedores desde la base de datos
        const proveedores = await Proveedor.find();

        // Verifica que proveedores se están recuperando
        console.log(proveedores);

        // Enviar los proveedores como JSON
        res.json(proveedores);  // Cambié res.render por res.json
    } catch (error) {
        console.log('Error al obtener los proveedores:', error);
        res.status(500).send('Error en el servidor');
    }
};

import Proveedor from '../models/Proveedor.js';

export const renderProveedores = async (req, res) => {
    try {
        // Obtener  los proveedores desde la base de datos
        const proveedores = await Proveedor.find();

        // mandar en consola los proveedores (dartos)
        console.log(proveedores);

        // Enviar los proveedores como JSON
        res.json(proveedores);  
    } catch (error) {
        console.log('Error al obtener los proveedores:', error);
        res.status(500).send('Error en el servidor');
    }
};

import Producto from '../models/Producto.js';

export const renderProductos = async (req, res) => {
    try {
        // Obtener  productos desde la base de datos
        const productos = await Producto.find();

        // solo para ver si si se obtinen
        console.log(productos);

        // Enviar los productos como JSON
        res.json(productos);  
    } catch (error) {
        console.log('Error al obtener los productos:', error);
        res.status(500).send('Error en el servidor');
    }
};

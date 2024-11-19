import Producto from '../models/Producto.js';

export const renderProductos = async (req, res) => {
    try {
        // Obtener todos los productos desde la base de datos
        const productos = await Producto.find();

        // Verifica que productos se están recuperando
        console.log(productos);

        // Enviar los productos como JSON
        res.json(productos);  
    } catch (error) {
        console.log('Error al obtener los productos:', error);
        res.status(500).send('Error en el servidor');
    }
};

// controllers/producto.controller.js
import Producto from '../models/Producto.js';

export const renderProductos = async (req, res) => {
    try {
        // Obtener todos los productos desde la base de datos
        const productos = await Producto.find();

        // Verifica que productos se están recuperando
        console.log(productos);

        // Renderizar una vista HTML con los productos
        res.render('productos', { productos });  // 'productos' es el nombre de la vista
    } catch (error) {
        console.log('Error al obtener los productos:', error);
        res.status(500).send('Error en el servidor');
    }
};

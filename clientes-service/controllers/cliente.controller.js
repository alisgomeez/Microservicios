import Cliente from '../models/Cliente.js';
 
export const renderClientes = async (req, res) => {
    try {
        // Obtener todos los productos desde la base de datos
        const clientes = await Cliente.find();
        res.status(200).json(clientes);
        
        // Verifica que clientes se están recuperando
        console.log(clientes);
    } catch (error) {
        console.log('Error al obtener los clientes:', error);
        res.status(500).json({mensaje: 'Error en el servidor'});
    }
}



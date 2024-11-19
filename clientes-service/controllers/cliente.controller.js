import Cliente from '../models/Cliente.js';
 
export const renderClientes = async (req, res) => {
    try {
        // obtener productos de la base de datos
        const clientes = await Cliente.find();
        res.status(200).json(clientes);
        
        // consola de error
        console.log(clientes);
    } catch (error) {
        console.log('Error al obtener los clientes:', error);
        res.status(500).json({mensaje: 'Error en el servidor'});
    }
}



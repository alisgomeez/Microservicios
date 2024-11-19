import mongoose from 'mongoose';

const productoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    precio: { type: Number, required: true },
    proveedor: { type: String, required: true }  // Relación con el proveedor 
});

const Producto = mongoose.model('Producto', productoSchema);

export default Producto;

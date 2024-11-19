// models/Cliente.js
import mongoose from 'mongoose';

const clienteSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  telefono: { type: String, required: true },
  empleado: { type: mongoose.Schema.Types.ObjectId, ref: 'Empleado', required: true }, // Relación con el empleado
});

const Cliente = mongoose.model('Cliente', clienteSchema);

export default Cliente;

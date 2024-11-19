// models/Empleado.js
import mongoose from 'mongoose';

const empleadoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  area: { type: String, required: true },
  sueldo: { type: String, required: true },
  sucursal: { type: String, required: true },
});

const Empleado = mongoose.model('Empleado', empleadoSchema);

export default Empleado;

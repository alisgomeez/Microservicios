const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/micros', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB conectado para el servicio de proveedores');
  } catch (error) {
    console.error('Error de conexión con MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;

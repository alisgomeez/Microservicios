const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Connect to MongoDB with default settings (no need for useNewUrlParser/useUnifiedTopology)
    await mongoose.connect('mongodb://localhost:27017/micros');
    console.log('MongoDB conectado para el servicio de empleados');
  } catch (error) {
    console.error('Error de conexión con MongoDB:', error);
    process.exit(1); // Exit the process with failure
  }
};

// MongoDB connection events (optional for better monitoring)
mongoose.connection.on('connected', () => {
  console.log('Conexión exitosa a MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('Error en la conexión a MongoDB:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Desconectado de MongoDB');
});

module.exports = connectDB;

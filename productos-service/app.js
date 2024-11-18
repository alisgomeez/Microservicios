const express = require('express');
const connectDB = require('./config/db'); // Conexión a la base de datos
const productoRoutes = require('./routes/productoRoutes'); // Rutas de productos

const app = express();
app.use(express.json()); // Middleware para parsear JSON

// Conexión a la base de datos
connectDB();

// Rutas
app.use('/api/productos', productoRoutes); // Ruta para productos

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Microservicio de productos corriendo en puerto ${PORT}`);
});

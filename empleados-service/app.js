// app.js
import express from 'express';
import empleadoRoutes from './routes/empleadoRoutes.js'; // Asegúrate de que la ruta al archivo sea correcta
import mongoose from 'mongoose';
import cors from 'cors';


const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Usar las rutas
app.use(empleadoRoutes); // Esto es importante

mongoose.connect('mongodb://localhost/micros', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a la base de datos'))
    .catch((err) => console.log('Error de conexión a la base de datos:', err));
 

// Iniciar el servidor
app.listen(3005, () => {
    console.log('Servidor corriendo en el puerto 3005');
});




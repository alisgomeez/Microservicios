import express from 'express';
import mongoose from 'mongoose';
import exphbs from 'express-handlebars';
import bodyParser from 'body-parser'; 
import proveedorRoutes from './routes/proveedorRoutes.js';
import cors from 'cors';

const app = express();

// Middleware para manejar solicitudes JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json()); 

// Usar rutas de proveedores
app.use(proveedorRoutes);

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost/micros', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a la base de datos'))
    .catch((err) => console.log('Error de conexión a la base de datos:', err));

// Iniciar el servidor
app.listen(3003, () => {
    console.log('Microservicio de proveedores corriendo en puerto 3003');
});

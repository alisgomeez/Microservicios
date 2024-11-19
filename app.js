import express from 'express';
import mongoose from 'mongoose';
import proveedorRoutes from './routes/proveedorRoutes.js';
import exphbs from 'express-handlebars';

const app = express();

// Middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost/micros', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a la base de datos'))
    .catch((err) => console.log('Error de conexión a la base de datos:', err));

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000');
});

import express from 'express';
import mongoose from 'mongoose';
import proveedorRoutes from './routes/proveedorRoutes.js';
import exphbs from 'express-handlebars';

const app = express();

// Configuración del motor de plantillas
app.engine('hbs', exphbs({ extname: 'hbs' }));
app.set('view engine', 'hbs');

// Middleware para manejar solicitudes POST
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Usar las rutas de proveedores
app.use(proveedorRoutes);

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost/micros', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a la base de datos'))
    .catch((err) => console.log('Error de conexión a la base de datos:', err));

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000');
});

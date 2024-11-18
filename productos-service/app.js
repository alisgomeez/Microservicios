import express from 'express';
import mongoose from 'mongoose';
// Importa directamente la función exphbs
import exphbs from 'express-handlebars';  

import productoRoutes from './routes/productoRoutes.js';

const app = express();

// Configuración de Handlebars con acceso a propiedades del prototipo
app.engine('hbs', exphbs({
    extname: 'hbs',
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,  // Permite el acceso a propiedades del prototipo
        allowProtoMethodsByDefault: true      // Permite el acceso a métodos del prototipo
    }
}));
app.set('view engine', 'hbs');

// Middleware para manejar solicitudes JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Usar las rutas de productos
app.use(productoRoutes);

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost/micros', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a la base de datos'))
    .catch((err) => console.log('Error de conexión a la base de datos:', err));

// Iniciar el servidor
app.listen(3001, () => {
    console.log('Servidor corriendo en puerto 3001');
});

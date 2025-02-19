import express from 'express';
import mongoose from 'mongoose';
import exphbs from 'express-handlebars';
import bodyParser from 'body-parser'; 
import productoRoutes from './routes/productoRoutes.js'; // Rutas de productos
import cors from 'cors';

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
app.use(cors());
app.use(express.json());  // Asegurarse de que Express pueda manejar JSON

// Usar las rutas de productos
app.use(productoRoutes);


// Iniciar el servidor
app.listen(3001, () => {
    console.log('Microservicio de productos corriendo en puerto 3001');
});

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost/micros', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a la base de datos'))
    .catch((err) => console.log('Error de conexión a la base de datos:', err));

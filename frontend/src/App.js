import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu'; // Asegúrate de tener este archivo
import ComprarProducto from './components/ComprarProducto'; // Asegúrate de tener este archivo

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal que muestra el menú */}
        <Route path="/menu" element={<Menu />} />
        {/* Ruta para comprar producto */}
        <Route path="/comprar" element={<ComprarProducto />} />
        {/* Ruta predeterminada al cargar la aplicación */}
        <Route path="/" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;

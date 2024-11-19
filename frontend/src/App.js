import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Proveedores from './components/Proveedores';
import Productos from './components/Productos'; // Asegúrate de tener el componente creado
import Menu from './components/Menu'; 
import Navbar from './components/Navbar';
const App = () => {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/proveedores" element={<Proveedores />} />
        <Route path="/productos" element={<Productos />} /> 
      </Routes>
    </Router>
  );
};

export default App;

//se muestra en todas las paginas y es para poder acceder a los enlaces desde un menu arriba
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Proveedores from './components/Proveedores';
import Productos from './components/Productos'; 
import Menu from './components/Menu'; 
import Navbar from './components/Navbar';
import Empleados from './components/Empleados';
import Clientes from './components/Clientes';
const App = () => {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/proveedores" element={<Proveedores />} />
        <Route path="/productos" element={<Productos />} /> 
        <Route path="/empleados" element={<Empleados />} /> 
        <Route path="/clientes" element={<Clientes />} /> 

      </Routes>
    </Router>
  );
};

export default App;

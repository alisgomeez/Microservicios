import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Proveedores from './components/Proveedores';
import MenuPrincipal from './components/Menu'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MenuPrincipal />} />
        <Route path="/proveedores" element={<Proveedores />} />
      </Routes>
    </Router>
  );
};

export default App;

import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="container p-5">
      <h1 style={{ textAlign: "center", color: "black" }}>Bienvenido</h1>
      <h2 style={{ textAlign: "center", color: "black" }}>Seleccione una opción</h2>

      <div className="d-flex justify-content-center mt-4">
        <Link to="/productos" className="btn btn-primary mx-2">
          Agregar Producto
        </Link>
        <Link to="/clientes" className="btn btn-primary mx-2">
          Agregar Suscriptor
        </Link>
      </div>
    </div>
  );
}

export default Menu;

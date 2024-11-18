import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="container p-5">
      <h1 style={{ textAlign: "center", color: "white" }}>Bienvenido</h1>
      <h2 style={{ textAlign: "center", color: "white" }}>Seleccione una opción</h2>
      <div className="row">
        <div className="col text-center">
          <Link to="/comprar" className="btn btn-primary btn-lg">
            Comprar Producto
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Menu;

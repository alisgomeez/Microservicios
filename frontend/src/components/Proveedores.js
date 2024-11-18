import React, { useState } from "react";

function Proveedores() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    telefono: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3003/api/proveedores", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Proveedor agregado con éxito");
        setFormData({ nombre: "", empresa: "", telefono: "" });
      } else {
        alert("Error al agregar el proveedor");
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
      alert("Error al conectar con el backend");
    }
  };

  return (
    <div className="container p-5">
      <h1>Agregar Proveedor</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="empresa">Empresa</label>
          <input
            type="text"
            id="empresa"
            name="empresa"
            value={formData.empresa}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="telefono">Teléfono</label>
          <input
            type="text"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-success">
          Agregar Proveedor
        </button>
      </form>
    </div>
  );
}

export default Proveedores;

import React, { useState } from "react";
import "./AddProduct.css";

export default function AddProduct() {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    description: "",
    largeDescription: "",
    category: "",
    price: "",
    image: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://gateway-production-b320.up.railway.app/api/productos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          price: parseFloat(formData.price),
          id: parseInt(formData.id),
        }),
      });

      if (!res.ok) throw new Error("Error al insertar el producto");

      setMessage("✅ Producto agregado exitosamente.");
      setFormData({
        id: "",
        name: "",
        description: "",
        largeDescription: "",
        category: "",
        price: "",
        image: "",
      });
    } catch (error) {
      console.error(error);
      setMessage("❌ Error al insertar el producto.");
    }
  };

  return (
    <div className="AddProduct">
      <h2>Agregar Producto</h2>
      <form onSubmit={handleSubmit} className="AddProduct__Form">
        <input
          name="id"
          value={formData.id}
          onChange={handleChange}
          placeholder="ID"
          required
        />
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nombre"
          required
        />
        <input
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Descripción corta"
        />
        <input
          name="largeDescription"
          value={formData.largeDescription}
          onChange={handleChange}
          placeholder="Descripción larga"
        />
        <input
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Categoría"
        />
        <input
          name="price"
          type="number"
          step="0.01"
          value={formData.price}
          onChange={handleChange}
          placeholder="Precio"
          required
        />
        <input
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="URL de imagen"
        />
        <button type="submit">Agregar</button>
      </form>
      {message && <p className="AddProduct__Message">{message}</p>}
    </div>
  );
}

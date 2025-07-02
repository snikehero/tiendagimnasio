import React, { useState, useMemo } from "react";
import { useOutletContext } from "react-router";
import Product from "../../components/Product/Product.jsx";
import mockData from "../../../mockData.json";
import "./AllProducts.css";

export default function AllProducts() {
  const { searchTerm } = useOutletContext() || { searchTerm: "" };
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [sortOrder, setSortOrder] = useState("default");

  const categories = [
    "Todos",
    ...new Set(mockData.map((item) => item.category)),
  ];

  const filteredProducts = useMemo(() => {
    let filtered =
      selectedCategory === "Todos"
        ? [...mockData]
        : mockData.filter((item) => item.category === selectedCategory);

    if (searchTerm.trim() !== "") {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortOrder === "asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [selectedCategory, sortOrder, searchTerm]);

  return (
    <div className="AllProductsPage">
      <h1 className="AllProductsPage__Title">
        Todos los productos disponibles
      </h1>
      <p className="AllProductsPage__Subtitle">
        Explora nuestra variedad de artículos deportivos, ropa, accesorios y
        más.
      </p>

      {/* Filtros */}
      <div className="AllProducts__Controls">
        <div className="AllProducts__Filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`AllProducts__FilterBtn ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Ordenamiento */}
        <div className="AllProducts__Sort">
          <label htmlFor="sortSelect">Ordenar por precio:</label>
          <select
            id="sortSelect"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="default">Sin orden</option>
            <option value="asc">Menor a mayor</option>
            <option value="desc">Mayor a menor</option>
          </select>
        </div>
      </div>

      <div className="AllProducts__Grid">
        {filteredProducts.map((item) => (
          <Product
            key={item.id}
            itemName={item.name}
            itemPrice={item.price}
            itemImage={item.image}
            itemDescription={item.description}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
}

import React from "react";
import Product from "../Product/Product.jsx";
import mockData from "../../../mockData.json";
import "./AllProducts.css";
export default function AllProducts() {
  return (
    <div className="AllProductsContainer">
      <h1>En esta pagina podras ver el listado de todos los items </h1>
      {mockData.map((item) => (
        <Product
          itemName={item.id}
          itemPrice={item.price}
          itemImage={item.image}
          itemDescription={item.description}
          id={item.id}
        />
      ))}
    </div>
  );
}

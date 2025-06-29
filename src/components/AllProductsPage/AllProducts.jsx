import React from "react";
import Product from "../Product/Product.jsx";
import mockData from "../../../mockData.json";
import "./AllProducts.css";

export default function AllProducts() {
  return (
    <div className="AllProductsPage">
      <h1 className="AllProductsPage__Title">
        Todos los productos disponibles
      </h1>
      <p className="AllProductsPage__Subtitle">
        Explora nuestra variedad de artículos deportivos, ropa, accesorios y
        más.
      </p>

      <div className="AllProducts__Grid">
        {mockData.map((item) => (
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

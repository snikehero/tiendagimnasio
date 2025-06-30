import React from "react";
import "./NewProducts.css";
import Product from "../Product/Product.jsx";
import mockData from "../../../mockData.json";

export default function NewProducts() {
  // Tomamos los 3-6 primeros productos como "nuevos"
  const newItems = mockData.slice(0, 6);

  return (
    <section className="NewProducts">
      <div className="NewProducts__Grid">
        {newItems.map((item) => (
          <div key={item.id} className="NewProducts__Item">
            <Product
              itemName={item.name}
              itemPrice={item.price}
              itemImage={item.image}
              itemDescription={item.description}
              id={item.id}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

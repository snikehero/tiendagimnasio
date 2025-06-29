import React from "react";
import { useParams } from "react-router";
import mockData from "../../../mockData.json";
import Product from "../Product/Product.jsx";
export default function CategoryPage() {
  const { category } = useParams();

  const filteredItems = mockData.filter((item) => item.category === category);

  return (
    <div className="CategoryPage">
      {filteredItems.map((item) => (
        <div className="CategoryPage__Item">
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
  );
}

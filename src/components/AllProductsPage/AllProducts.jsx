import React from "react";
import Product from "../Product/Product.jsx";
import mockData from "../../../mockData.json";
import "./AllProducts.css";
import NavBar from "../NavBar/NavBar.jsx";
import Footer from "../Footer/Footer.jsx";
export default function AllProducts() {
  return (
    <div className="AllProductsPage">
      <h1 className="AllProductsPage__Title">
        En esta pagina podras ver el listado de todos los productos que vendemos
      </h1>
      <div className="AllProducts__Container">
        {mockData.map((item) => (
          <div className="EachProduct__Container">
            <Product
              itemName={item.id}
              itemPrice={item.price}
              itemImage={item.image}
              itemDescription={item.description}
              id={item.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

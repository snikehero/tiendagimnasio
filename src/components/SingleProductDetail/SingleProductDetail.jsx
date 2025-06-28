import React from "react";
import "./SingleProductDetail.css";
import mockData from "../../../mockData.json";
export default function SingleProductDetail({ itemId }) {
  return (
    <div className="small-container single-product">
      <div className="row">
        <div className="col-2">
          <img src={mockData[itemId].image} alt={mockData[itemId].name} />
        </div>
        <div className="col2">
          <p>Home / {mockData[itemId].category}</p>
          <h1>{mockData[itemId].name}</h1>
          <h4>{mockData[itemId].price}</h4>
          <select>
            <option>Seleccione Talla</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
          <a href="" className="btn">
            {" "}
            Add to cart{" "}
          </a>
          <h3>
            {" "}
            Detalles del producto <i className="fa fa-indent"></i>
          </h3>
          <p>{mockData[itemId].description}</p>
        </div>
      </div>
    </div>
  );
}

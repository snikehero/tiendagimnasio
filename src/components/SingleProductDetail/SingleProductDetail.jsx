import React from "react";
import "./SingleProductDetail.css";
export default function SingleProductDetail({
  image,
  name,
  description,
  price,
  category,
}) {
  return (
    <div className="small-container single-product">
      <div className="row">
        <div className="col-2">
          <img src={image} alt={name} />
        </div>
        <div className="col2">
          <p>Home / {category}</p>
          <h1>{name}</h1>
          <h4>{price}</h4>
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
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

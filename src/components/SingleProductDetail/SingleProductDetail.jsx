import mockData from "../../../mockData.json";
import React from "react";
import "./SingleProductDetail.css";

export default function SingleProductDetail({ itemId, onAddToCart }) {
  if (itemId === undefined || itemId === null || !mockData[itemId])
    return <p>Producto no encontrado.</p>;

  const product = mockData[itemId];

  return (
    <div className="single-product-detail">
      <div className="single-product-detail__image-container">
        <img
          src={product.image}
          alt={product.name}
          className="single-product-detail__image"
        />
      </div>
      <div className="single-product-detail__info">
        <div className="single-product-detail__breadcrumb">
          Home / {product.category}
        </div>
        <h2 className="single-product-detail__name">{product.name}</h2>
        <p className="single-product-detail__price">${product.price}</p>
        <p className="single-product-detail__description">
          {product.description}
        </p>

        <button
          className="single-product-detail__add-to-cart-btn"
          onClick={() => onAddToCart && onAddToCart(product)}
          type="button"
        >
          Agregar al carrito
        </button>

        <div className="single-product-detail__large-description">
          {product.largeDescription}
        </div>
      </div>
    </div>
  );
}

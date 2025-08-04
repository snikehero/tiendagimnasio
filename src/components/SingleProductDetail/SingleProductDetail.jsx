import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./SingleProductDetail.css";

export default function SingleProductDetail({ itemId }) {
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (itemId !== undefined && itemId !== null) {
      fetch(`https://gateway-production-b320.up.railway.app/api/productos/${itemId}`)
        .then((res) => {
          if (!res.ok) throw new Error("Producto no encontrado");
          return res.json();
        })
        .then((data) => {
          setProduct(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setProduct(null);
          setLoading(false);
        });
    }
  }, [itemId]);

  if (loading) return <p>Cargando producto...</p>;
  if (!product) return <p>Producto no encontrado.</p>;

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
          onClick={() => addToCart(product)}
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

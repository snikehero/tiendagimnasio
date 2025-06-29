import "./Product.css";
import { Link } from "react-router";

function Product({ itemName, itemPrice, itemImage, itemDescription, id }) {
  return (
    <div className="ProductCard">
      <Link to={`/SingleProductPage/${id}`}>
        <img src={itemImage} alt={itemName} className="ProductCard__Image" />
      </Link>
      <div className="ProductCard__Content">
        <div className="ProductCard__Info">
          <div className="ProductCard__Details">
            <span className="ProductCard__Name">{itemName}</span>
            <p className="ProductCard__Description">{itemDescription}</p>
          </div>
          <div className="ProductCard__Price">${itemPrice}</div>
        </div>
        <div className="ProductCard__Buttons">
          <button className="ProductCard__Button ProductCard__Button--Primary">
            Comprar Ahora
          </button>
          <button className="ProductCard__Button ProductCard__Button--Secondary">
            Añadir al Carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;

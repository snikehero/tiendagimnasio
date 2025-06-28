import "./Product.css";
import { Link } from "react-router";

function Product({ itemName, itemPrice, itemImage, itemDescription }) {
  return (
    <div className="Card">
      <Link to={"/SingleProductPage"}>
        <img src={itemImage} alt={itemName} className="Card__Image" />
      </Link>
      <div className="Card__Content">
        <div className="Card__Row">
          <div className="Card__Details">
            <span>{itemName}</span>
            <p>{itemDescription}</p>
          </div>
          <div className="Card__Price">${itemPrice}</div>
        </div>
        <div className="Card__Buttons">
          <button className="Card__Buttons--ComprarAhora">Comprar Ahora</button>
          <button className="Card__Buttons--AddToCart">
            Añadir al Carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;

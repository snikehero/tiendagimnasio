import Product from "../Product/Product.jsx";
import "./NewProducts.css";
function NewProducts() {
  return (
    <div className="NewProducts">
      <h1> Productos Nuevos</h1>
      <div className="NewProductsRow">
        <div className="NewProductsColumn">
          <Product
            itemName="Nike Metcon 9"
            itemPrice={29.99}
            itemImage="public/item_shoes_metcon9.png"
          />
        </div>
        <div className="NewProductsColumn">
          <Product
            itemName="Playera Negra"
            itemPrice={29.99}
            itemImage="public/item_tshirt_playeranegra.png"
          />
        </div>
        <div className="NewProductsColumn">
          <Product
            itemName="Cbum Protein"
            itemPrice={29.99}
            itemImage="public/item_protein_cbum.webp"
          />
        </div>
      </div>
    </div>
  );
}
export default NewProducts;

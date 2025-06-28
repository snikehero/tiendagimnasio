import Product from "../Product/Product.jsx";
import "./NewProducts.css";
function NewProducts() {
  return (
    <div className="NewProducts">
      <h1 className="NewProducts__Text"> Productos Nuevos</h1>
      <div className="NewProducts__Row">
        <div className="NewProductsColumn">
          <Product
            itemName="Nike Metcon 9"
            itemPrice={29.99}
            itemImage="item_shoes_metcon9.png"
            itemDescription={
              "Zapatillas de entrenamiento versátiles y duraderas."
            }
            id={0}
          />
        </div>
        <div className="NewProductsColumn">
          <Product
            itemName="Playera Negra"
            itemPrice={29.99}
            itemImage="item_tshirt_playeranegra.png"
            itemDescription={"Playera negra de algodón, cómoda y elegante."}
            id={1}
          />
        </div>
        <div className="NewProductsColumn">
          <Product
            itemName="Cbum Protein"
            itemPrice={29.99}
            itemImage="item_protein_cbum.webp"
            itemDescription={
              "Proteína de alta calidad para tus entrenamientos."
            }
            id={2}
          />
        </div>
      </div>
    </div>
  );
}
export default NewProducts;

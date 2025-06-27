import "./App.css";
import Product from "./components/Product.jsx";
function App() {
  return (
    <div>
      <h1> Bienvenido a la madriguera</h1>
      <Product
        itemName="Nike Metcon 9"
        itemPrice={29.99}
        itemImage="public/item_shoes_metcon9.png"
      />
      <Product
        itemName="Playera Negra"
        itemPrice={29.99}
        itemImage="public/item_tshirt_playeranegra.png"
      />
      <Product
        itemName="Cbum Protein Powder"
        itemPrice={29.99}
        itemImage="public/item_protein_cbum.webp"
      />
    </div>
  );
}

export default App;

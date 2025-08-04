import { useEffect, useState } from "react";
import "./NewProducts.css";
import Product from "../Product/Product.jsx";

export default function NewProducts() {
  const [newItems, setNewItems] = useState([]);

  useEffect(() => {
    fetch("https://gateway-production-b320.up.railway.app/api/productos")
      .then((res) => res.json())
      .then((data) => {
        const primerosSeis = data.content.slice(0, 6);
        setNewItems(primerosSeis);
      })
      .catch((error) => console.error("Error al cargar productos:", error));
  }, []);

  return (
    <section className="NewProducts">
      <div className="NewProducts__Grid">
        {newItems.map((item) => (
          <div key={item.id} className="NewProducts__Item">
            <Product
              itemName={item.name}
              itemPrice={item.price}
              itemImage={item.image}
              itemDescription={item.description}
              id={item.id}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

import React from "react";
import Collections from "../Collections/Collections.jsx";
import NewProducts from "../NewProducts/NewProducts.jsx";
import Cart from "../Cart/Cart.jsx";
import "./MainPage.css"; // crea un CSS específico para esto

export default function MainPage() {
  return (
    <div className="MainPage">
      <section className="MainPage__Hero">
        <div className="MainPage__HeroContent">
          <h1>Descubre la mejor ropa y accesorios deportivos</h1>
          <p>Equípate con lo mejor. Envíos gratis en compras mayores a $999.</p>
          <a href="#new-products" className="MainPage__CTA">
            Ver productos
          </a>
        </div>
      </section>

      <section id="new-products" className="MainPage__Section">
        <h2 className="MainPage__Title">Nuevos Productos</h2>
        <NewProducts />
      </section>

      <section className="MainPage__Section">
        <h2 className="MainPage__Title">Categorías</h2>
        <Collections />
      </section>

      <section className="MainPage__Section MainPage__Benefits">
        <div className="MainPage__BenefitItem">🚚 Envío gratis</div>
        <div className="MainPage__BenefitItem">🔒 Pago seguro</div>
        <div className="MainPage__BenefitItem">📦 Devoluciones sin costo</div>
      </section>
    </div>
  );
}

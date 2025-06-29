import React from "react";
import SingleProductDetail from "../SingleProductDetail/SingleProductDetail";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { useParams } from "react-router";
export default function SingleProductPage() {
  const { id } = useParams();
  return (
    <div className="SingleProductPage">
      <SingleProductDetail
        itemId={id}
        onAddToCart={(product) => {
          console.log("Agregar al carrito:", product);
          // Aquí agregas lógica real para carrito
        }}
      />
    </div>
  );
}

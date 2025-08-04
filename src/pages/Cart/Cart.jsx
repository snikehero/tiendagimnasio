import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";
import "./Cart.css";

export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = async () => {
    if (cartItems.length === 0) {
      alert("Tu carrito está vacío.");
      return;
    }

    // Armar el payload según OperacionDTO que espera el backend
    const payload = {
      tipo: "compra", // o puedes hacer dinámico si hay otros tipos
      productos: cartItems.map((item) => ({
        productoId: item.id,
        cantidad: item.quantity,
      })),
    };

    try {
      const response = await fetch("http://localhost:8082/api/operaciones", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("Compra registrada exitosamente!");
        clearCart(); // Vacía el carrito
      } else {
        const errorData = await response.json();
        alert("Error al registrar compra: " + errorData);
      }
    } catch (error) {
      alert("Error en la comunicación con el servidor: " + error.message);
    }
  };

  return (
    <div className="CartPage">
      <h1 className="CartPage__Title">Tu Carrito de Compras</h1>

      {cartItems.length === 0 ? (
        <p className="CartPage__Empty">Tu carrito está vacío.</p>
      ) : (
        <>
          <div className="CartPage__Items">
            {cartItems.map((item) => (
              <div key={item.id} className="CartItem">
                <img
                  src={item.image}
                  alt={item.name}
                  className="CartItem__Image"
                />
                <div className="CartItem__Details">
                  <h3 className="CartItem__Name">{item.name}</h3>
                  <p className="CartItem__Price">
                    ${item.price} x {item.quantity}
                  </p>
                  <p className="CartItem__Subtotal">
                    Subtotal: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    className="CartItem__RemoveBtn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="CartPage__Summary">
            <h2>Total: ${totalPrice.toFixed(2)}</h2>
            <button className="CartPage__ClearBtn" onClick={clearCart}>
              Vaciar Carrito
            </button>
            <button className="CartPage__CheckoutBtn" onClick={handleCheckout}>
              Finalizar Compra
            </button>
          </div>
        </>
      )}
    </div>
  );
}

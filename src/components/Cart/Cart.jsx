import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";
import "./cart.css";

export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

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
            <button className="CartPage__CheckoutBtn">Finalizar Compra</button>
          </div>
        </>
      )}
    </div>
  );
}

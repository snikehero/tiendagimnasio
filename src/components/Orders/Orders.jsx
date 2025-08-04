import React, { useEffect, useState } from "react";
import "./Orders.css";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch("https://gateway-production-b320.up.railway.app/api/operaciones");
        if (!res.ok) throw new Error("Error al cargar las órdenes");
        const data = await res.json();
        setOrders(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <p>Cargando órdenes...</p>;
  if (error) return <p>Error: {error}</p>;

  if (orders.length === 0) return <p>No hay órdenes registradas.</p>;

  return (
    <div className="OrdersPage">
      <h1>Órdenes de Compra</h1>
      {orders.map((order) => (
        <div key={order.id} className="OrderCard">
          <div className="OrderDate">
            <strong>Fecha:</strong> {new Date(order.fecha).toLocaleString()}
          </div>
          <div className="OrderProducts">
            {order.productos && order.productos.length > 0 ? (
              order.productos.map((p) => (
                <div key={p.productoId} className="ProductItem">
                  <img src={p.imagen} alt={p.nombre} className="ProductImage" />
                  <div className="ProductInfo">
                    <span className="ProductName">{p.nombre}</span>
                    <span className="ProductQuantity">
                      Cantidad: {p.cantidad}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p>Sin productos</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

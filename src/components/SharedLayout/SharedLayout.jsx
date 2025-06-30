import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Notification from "../Notifications/Notification";
import { CartContext } from "../../context/CartContext";

export default function SharedLayout() {
  const { lastAddedItem } = useContext(CartContext);
  const [message, setMessage] = useState(null);

  // Nuevo estado para la búsqueda
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (lastAddedItem) {
      setMessage(`${lastAddedItem.name} agregado al carrito 🛒`);
      const timer = setTimeout(() => setMessage(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [lastAddedItem]);

  // Función que recibe el término de búsqueda desde NavBar
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      {message && <Notification message={message} />}
      <NavBar onSearch={handleSearch} />
      {/* Pasar searchTerm por contexto, prop o URL según tu arquitectura */}
      <Outlet context={{ searchTerm }} />
      <Footer />
    </>
  );
}

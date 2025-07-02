import { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Notification from "../../components/Notifications/Notification";
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
      {}
      <Outlet context={{ searchTerm }} />
      <Footer />
    </>
  );
}

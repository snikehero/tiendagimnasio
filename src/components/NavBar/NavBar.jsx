import "./NavBar.css";
import React, { useState, useRef, useEffect, useContext } from "react";
import { Link } from "react-router";
import { CartContext } from "../../context/CartContext"; // Ajusta la ruta según tu estructura
const NavBar = () => {
  const { cartItems } = useContext(CartContext);

  // Suma todas las cantidades de los productos en el carrito
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const [showCategories, setShowCategories] = useState(false);
  const categoriesRef = useRef(null);

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        categoriesRef.current &&
        !categoriesRef.current.contains(event.target)
      ) {
        setShowCategories(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="NavBar">
      <Link to="/" className="NavBar__LogoLink">
        <img src="/logo.jpg" alt="Logo" className="NavBar__Logo" />
      </Link>

      <ul className="NavBar__List">
        <li className="NavBar__Item">
          <Link to="/" className="NavBar__Link">
            Home
          </Link>
        </li>
        <li className="NavBar__Item">
          <Link to="/AllProducts" className="NavBar__Link">
            Productos
          </Link>
        </li>
        <li
          className="NavBar__Item NavBar__Item--Dropdown"
          onClick={toggleCategories}
          ref={categoriesRef}
        >
          <span className="NavBar__Link">Categorias ▾</span>
          {showCategories && (
            <ul className="NavBar__Dropdown">
              <li>
                <Link to="/CategoryPage/Calzado">Calzado</Link>
              </li>
              <li>
                <Link to="/CategoryPage/Ropa Deportiva">Ropa Deportiva</Link>
              </li>
              <li>
                <Link to="/CategoryPage/Suplementos">Suplementos</Link>
              </li>
              <li>
                <Link to="/CategoryPage/Accesorios">Accesorios</Link>
              </li>
            </ul>
          )}
        </li>
        <li className="NavBar__Item">
          <Link to="/AboutPage" className="NavBar__Link">
            About
          </Link>
        </li>
        <li className="NavBar__Item">
          <Link to="/aaaa" className="NavBar__Link">
            Pagina de Error
          </Link>
        </li>
      </ul>

      <div className="NavBar__Right">
        <div className="NavBar__SearchBox">
          <input
            type="text"
            className="NavBar__SearchInput"
            placeholder="Buscar..."
          />
        </div>
        <div className="NavBar__Cart">
          <Link to="/Cart">
            <img
              src="/icon_shoppingcart.png"
              alt="Cart"
              className="NavBar__CartIcon"
            />
          </Link>
          {totalQuantity > 0 && (
            <span className="NavBar__CartCount">{totalQuantity}</span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

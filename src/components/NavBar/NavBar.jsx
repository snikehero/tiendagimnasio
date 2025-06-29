import "./NavBar.css";
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router";

const NavBar = () => {
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
            Products
          </Link>
        </li>
        <li
          className="NavBar__Item NavBar__Item--Dropdown"
          onClick={toggleCategories}
          ref={categoriesRef}
        >
          <span className="NavBar__Link">Categories ▾</span>
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
          <img
            src="/icon_shoppingcart.png"
            alt="Cart"
            className="NavBar__CartIcon"
          />
          <span className="NavBar__CartCount">0</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

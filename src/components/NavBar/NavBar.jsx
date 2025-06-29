import "./NavBar.css";
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router";

const NavBar = () => {
  const [showCategories, setShowCategories] = useState(false);
  const categoriesRef = useRef(null);

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  // Cierra el dropdown si se hace clic fuera
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
    <div className="NavBar">
      <Link to={"/"}>
        <img src="logo.jpg" alt="logo.jpg" className="NavBar__Logo" />
      </Link>

      <ul className="NavBar__List">
        <Link to={"/"}>
          <li className="NavBar__List__Item">Home</li>
        </Link>
        <Link to={"/AllProducts"}>
          <li className="NavBar__List__Item">Products</li>
        </Link>
        <li
          className="NavBar__List__Item"
          onClick={toggleCategories}
          ref={categoriesRef}
        >
          Categories
          {showCategories && (
            <ul className="Dropdown">
              <Link to="/CategoryPage/Calzado">
                <li>Calzado</li>
              </Link>
              <Link to="/CategoryPage/Ropa Deportiva">
                <li>Ropa Deportiva</li>
              </Link>
              <Link to="/CategoryPage/Suplementos">
                <li>Suplementos</li>
              </Link>
              <Link to="/CategoryPage/Accesorios">
                <li>Accesorios</li>
              </Link>
            </ul>
          )}
        </li>
        <Link to={"/AboutPage"}>
          <li className="NavBar__List__Item">About</li>
        </Link>
      </ul>

      <div className="SearchBox">
        <input
          type="text"
          placeholder="Search..."
          className="SearchBox__Text"
        />
      </div>
      <div className="Cart">
        <img
          src="icon_shoppingcart.png"
          alt="Cart"
          className="NavBar__CartIcon"
        />
        <span className="CartCount">0</span>
      </div>
    </div>
  );
};

export default NavBar;

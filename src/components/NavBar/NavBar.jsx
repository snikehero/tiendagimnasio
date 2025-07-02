import "./NavBar.css";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router";
import { CartContext } from "../../context/CartContext";
import { useDebounce } from "../../Hooks/useDebounce";

const NavBar = ({ onSearch }) => {
  const { cartItems } = useContext(CartContext);
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  useEffect(() => {
    if (onSearch) {
      onSearch(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm, onSearch]);

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
            Todos los Productos
          </Link>
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
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
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

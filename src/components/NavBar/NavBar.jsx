import "./NavBar.css";
import { Link } from "react-router";
function NavBar() {
  return (
    <div className="NavBar">
      <img src="logo.jpg" alt="" className="NavBar__Logo" />
      <ul className="NavBar__List">
        <Link to={"/"}>
          <li className="NavBar__List__Item">Home</li>
        </Link>
        <Link to={"/products"}>
          <li className="NavBar__List__Item">Products</li>
        </Link>
        <li className="NavBar__List__Item">Features</li>
        <li className="NavBar__List__Item">About</li>
        <li className="NavBar__List__Item">Our Team</li>
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
}
export default NavBar;

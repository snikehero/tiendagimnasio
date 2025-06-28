import "./NavBar.css";
import { Link } from "react-router";
function NavBar() {
  return (
    <div className="NavBar">
      <Link to={"/"}>
        <img src="logo.jpg" alt="" className="NavBar__Logo" />
      </Link>
      <ul className="NavBar__List">
        <Link to={"/"}>
          <li className="NavBar__List__Item">Home</li>
        </Link>
        <Link to={"/AllProducts"}>
          <li className="NavBar__List__Item">Products</li>
        </Link>
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
}
export default NavBar;

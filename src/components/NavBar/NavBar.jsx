import "./NavBar.css";
function NavBar() {
  return (
    <div className="NavBar">
      <img src="logo.jpg" alt="" className="Logo" />
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Features</li>
        <li>About</li>
      </ul>

      <div className="SearchBox">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="Cart">
        <img src="icon_shoppingcart.png" alt="Cart" className="CartIcon" />
        <span className="CartCount">0</span>
      </div>
    </div>
  );
}
export default NavBar;

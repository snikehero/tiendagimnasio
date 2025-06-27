import "../Product.css";
function Product({ itemName, itemPrice, itemImage }) {
  return (
    <div className="ProductComponent">
      <img className="ProductImage" src={itemImage} alt={itemName} />
      <div className="ProductDetails">
        <p className="ProductName">{itemName}</p>
        <p className="ProductPrice">${itemPrice}</p>
      </div>
    </div>
  );
}

export default Product;

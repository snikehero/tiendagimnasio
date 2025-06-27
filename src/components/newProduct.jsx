import "../newProduct.css";
function NewProduct({ itemName, itemPrice, itemImage }) {
  return (
    <div className="newProductComponent">
      <img src={itemImage} alt={itemName} />
      <div className="newProductDetails">
        <p className="newProductName">{itemName}</p>
        <p className="newProductPrice">${itemPrice}</p>
      </div>
    </div>
  );
}

export default NewProduct;

import Product from "../Product/Product.jsx";
export default function ProductButton({ itemName, itemPrice, itemImage }) {
  return (
    <button>
      <Product
        itemName={itemName}
        itemPrice={itemPrice}
        itemImage={itemImage}
      />
    </button>
  );
}

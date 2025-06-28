import Product from "../Product/Product.jsx";
import "./NewProducts.css";
import mockData from "../../../mockData.json";
function NewProducts() {
  return (
    <div className="NewProducts">
      <h1 className="NewProducts__Text"> Productos Nuevos</h1>
      <div className="NewProducts__Row">
        <div className="NewProductsColumn">
          <Product
            itemName={mockData[0].name}
            itemPrice={mockData[0].price}
            itemImage={mockData[0].image}
            itemDescription={mockData[0].description}
            id={mockData[0].id}
          />
        </div>
        <div className="NewProductsColumn">
          <Product
            itemName={mockData[1].name}
            itemPrice={mockData[1].price}
            itemImage={mockData[1].image}
            itemDescription={mockData[1].description}
            id={mockData[1].id}
          />
        </div>
        <div className="NewProductsColumn">
          <Product
            itemName={mockData[2].name}
            itemPrice={mockData[2].price}
            itemImage={mockData[2].image}
            itemDescription={mockData[2].description}
            id={mockData[2].id}
          />
        </div>
      </div>
    </div>
  );
}
export default NewProducts;

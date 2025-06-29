import CollectionButton from "../CollectionButton/CollectionButton.jsx";
import "./Collections.css";

const categories = [
  {
    name: "Accesorios",
    image: "banner_accesories_weights.jpeg",
  },
  {
    name: "Calzado",
    image: "banner_shoes_lotOfShoes.jpeg",
  },
  {
    name: "Ropa Deportiva",
    image: "banner_straps_blackStraps.jpeg",
  },
  {
    name: "Suplementos",
    image: "item_protein_cbum.webp",
  },
];

export default function Collections() {
  return (
    <div className="CollectionsWrapper">
      <h1 className="Collections__Title">Categorias</h1>
      <div className="Collections__Row">
        {categories.map((category) => (
          <div key={category.name} className="Collections__Column">
            <CollectionButton
              collectionName={category.name}
              collectionImage={category.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

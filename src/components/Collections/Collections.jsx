import CollectionButton from "../CollectionButton/CollectionButton.jsx";
import "./Collections.css";
export default function Collections() {
  return (
    <div className="CollectionsWrapper">
      <h1 className="Collections__Title"> Categorias</h1>
      <div className="Collections__Row">
        <div className="Collections__Column">
          <CollectionButton
            collectionName={"Accesorios"}
            collectionImage={"banner_accesories_weights.jpeg"}
          />
        </div>
        <div className="Collections__Column">
          <CollectionButton
            collectionName={"Tenis"}
            collectionImage={"banner_shoes_lotOfShoes.jpeg"}
          />
        </div>
        <div className="Collections__Column">
          <CollectionButton
            collectionName={"Ropa Deportiva"}
            collectionImage={"banner_straps_blackStraps.jpeg"}
          />
        </div>
      </div>
    </div>
  );
}

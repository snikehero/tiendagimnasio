import React from "react";
import "./CollectionsButton.css";
export default function CollectionButton({ collectionName, collectionImage }) {
  return (
    <div className="CollectionButtonWrapper">
      <h1 className="CollectionButtonWrapper__Name"> {collectionName}</h1>
      <button className="CollectionButton__Button">
        <img
          src={collectionImage}
          alt={collectionName}
          className="CollectionButton__Image"
        />
      </button>
    </div>
  );
}

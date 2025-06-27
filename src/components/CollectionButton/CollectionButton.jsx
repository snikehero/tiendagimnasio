import React from "react";
import "./CollectionsButton.css";
export default function CollectionButton({ collectionName, collectionImage }) {
  return (
    <div className="CollectionButtonWrapper">
      <img
        src={collectionImage}
        alt={collectionName}
        className="CollectionButton__Image"
      />
      <button className="CollectionButton__Button">{collectionName}</button>
    </div>
  );
}

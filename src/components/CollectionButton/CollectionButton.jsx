import React from "react";
import "./CollectionsButton.css";
import "../CategoryPage/CategoryPage.jsx";
import { Link } from "react-router";
export default function CollectionButton({ collectionName, collectionImage }) {
  return (
    <div className="CollectionButtonWrapper">
      <img
        src={collectionImage}
        alt={collectionName}
        className="CollectionButton__Image"
      />
      <Link to={`/CategoryPage/${collectionName}`}>
        <button className="CollectionButton__Button">{collectionName}</button>
      </Link>
    </div>
  );
}

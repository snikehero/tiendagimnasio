import React from "react";
import "./CollectionsButton.css";
export default function CollectionButton({ collectionName, collectionImage }) {
  return (
    <div className="wrapper">
      <div className="card">
        <img
          src={collectionImage}
          alt={collectionName}
          className="CollectionImage"
        />
        <div className="Content">
          <div className="Row">
            <div className="Details">
              <span>Zapateria</span>
              <p> Zapateria Premium</p>
            </div>
            <div className="Price"> </div>
          </div>
        </div>
      </div>
    </div>
  );
}

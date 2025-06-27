import React from "react";
import "./AboutProfile.css";
export default function AboutProfile({
  image,
  name,
  title,
  description,
  email,
}) {
  return (
    <div className="AboutProfile__Column">
      <div className="AboutProfile__Card">
        <img src={image} alt={name} />
        <div className="AboutProfile__Container">
          <h2>{name}</h2>
          <p className="AboutProfile__Title">{title}</p>
          <p>{description}</p>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
}

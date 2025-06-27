import React from "react";
import "../AboutPage/About.css";
export default function AboutProfile({
  image,
  name,
  title,
  description,
  email,
}) {
  return (
    <div class="column">
      <div class="card">
        <img src={image} alt={name} />
        <div class="container">
          <h2>{name}</h2>
          <p class="title">{title}</p>
          <p>{description}</p>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
}

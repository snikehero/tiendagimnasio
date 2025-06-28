import React from "react";
import SingleProductDetail from "../SingleProductDetail/SingleProductDetail";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
export default function SingleProductPage({
  image,
  name,
  description,
  price,
  category,
}) {
  return (
    <div>
      <NavBar />

      <SingleProductDetail
        image={image}
        name={name}
        description={description}
        price={price}
        category={category}
      />
      <Footer />
    </div>
  );
}

import React from "react";
import Collections from "../Collections/Collections.jsx";
import NewProducts from "../NewProducts/NewProducts.jsx";
import SingleProductDetail from "../SingleProductDetail/SingleProductDetail.jsx";
export default function MainPage() {
  return (
    <div>
      <NewProducts />
      <Collections />
    </div>
  );
}

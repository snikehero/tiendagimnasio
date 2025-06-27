import React from "react";
import { Link } from "react-router";
export default function NotFoundPage() {
  return (
    <div>
      <h1>This page Doesnt Exist</h1>
      <Link to={"/"}>
        <button>GO back Home</button>
      </Link>
    </div>
  );
}

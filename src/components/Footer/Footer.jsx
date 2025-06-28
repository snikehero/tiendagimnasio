import React from "react";
import "./Footer.css";
import { Link } from "react-router";
export default function Footer() {
  return (
    <footer>
      <div className="FooterContainer">
        <div className="SocialIcons">
          <a href="" className="SocialIcons__Icon">
            {" "}
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="" className="SocialIcons__Icon">
            {" "}
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="" className="SocialIcons__Icon">
            {" "}
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="" className="SocialIcons__Icon">
            {" "}
            <i className="fa-brands fa-tiktok"></i>
          </a>
          <a href="" className="SocialIcons__Icon">
            {" "}
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
        <div className="FooterNav">
          <ul className="FooterNav__List">
            <Link to={"/"}>
              <li className="FooterNav__List__Item">Home</li>
            </Link>
            <Link to={"/AllProducts"}>
              <li className="FooterNav__List__Item">Products</li>
            </Link>
            <Link to={"/AboutPage"}>
              <li className="FooterNav__List__Item">About</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="FooterBottom">
        <p className="FooterBottom__Copyright">
          CopyRight &copy; 2025; Designed by{" "}
          <span className="Designer">Moises Sanchez</span>
        </p>
      </div>
    </footer>
  );
}

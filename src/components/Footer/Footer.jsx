import React from "react";
import { Link } from "react-router-dom";
import { LogoIcon } from "../Logo/Logo.jsx";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <LogoIcon />
        <ul>
          <li className="footer-item">About</li>
          <li className="footer-item">Contact @ customer_support.com</li>
        </ul>
        <ul>
          <li className="footer-item">
            <Link to="/">Products</Link>
          </li>
        </ul>
      </footer>
    </>
  );
};

import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div>
      <footer className="container-fluid footer-1">
        <div className="copyright">Copyright &copy; Healthcare</div>
        <ul className="sm-links" style={{ marginBottom: "0rem" }}>
          <li>
            <a href="/" className="fa fa-instagram"></a>
          </li>
          <li>
            <a href="/" className="fa fa-facebook"></a>
          </li>
          <li>
            <a href="/" className="fa fa-twitter"></a>
          </li>
          <li>
            <a href="/" className="fa fa-whatsapp"></a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="footer-color text-light text-center p-3">
      <p>Created with ❤️ by Luvky</p>
      <div className="social-icons">
        <a className="ig" href="https://www.instagram.com/kky_jo" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-instagram"></i>
        </a>
        <a className="linkedin" href="https://www.linkedin.com/in/luvky-johanes-103192263" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-linkedin"></i>
        </a>
        <a className="git" href="https://github.com/kyl464" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-github"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

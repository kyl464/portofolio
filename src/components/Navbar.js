import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg sticky-top shadow-sm ${isVisible ? "visible" : "hidden"}`} style={{ zIndex: 999 }}>
      <div className="container-fluid">
        <a className="navbar-brand text-light fw-bolder ms-3" href="/portfolio">
          {" "}
          {/* Change href to a valid route */}
          Portofolio
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="text-light fw-bolder nav-link active" aria-current="page" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="text-light nav-link" href="#about">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="text-light nav-link" href="#project">
                Project
              </a>
            </li>
            <li className="nav-item">
              <a className="text-light nav-link" href="#contact">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

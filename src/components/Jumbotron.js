import React from "react";
import myImage from "../img/image.png";

const Jumbotron = () => {
  return (
    <section className="jumbotron shadow-sm text-light" id="jumbotron">
      <div className="container">
        <div className="row d-flex flex-column text-center align-items-center overflow-hidden" id="jumbotron">
          <div className="col-12">
            <h1 className="display-4">Hi! I'm Luvky Pratama Johanes</h1>
            <p className="lead short-abt font-monospace">
              A Computer Science student at BINUS with a passion for web development. Skilled in various programming languages like HTML, CSS, JavaScript, and more. Excited to keep expanding my expertise in the tech world!
            </p>
          </div>
          <div className="col-12">
            <img src={myImage} alt="ME" width="300" className="mt-4" />
          </div>
          <div className="hero-line">
            <div style={{ height: "80px", width: "2px" }} className="hero-line-v"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;

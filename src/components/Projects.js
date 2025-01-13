import React from "react";
import bkostimg from "../img/bkost.png";
import cookletimg from "../img/cooklet.png";
const Projects = () => {
  return (
    <section className="project-color text-light" id="project">
      <h1 data-aos="fade-down" className="text-center mb-4" id="project-tittle">
        Project
      </h1>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div data-aos="flip-up" className="card h-100">
              <h3>Cooklet</h3>
              <img src={cookletimg} alt="Project 1" className="card-img-top" />
              <div className="card-body d-flex flex-column">
                <p className="card-text mt-auto">
                  Cooklet adalah platform web yang memudahkan pengguna menemukan resep masakan berdasarkan bahan yang tersedia di rumah. Dengan fitur pencarian berbasis bahan, kategori resep lengkap, dan panduan langkah demi langkah,
                  Cooklet membantu pengguna menciptakan hidangan lezat tanpa perlu berbelanja tambahan.
                </p>
                <div className="justify-content-center mt-auto">
                  <a href="https://github.com/kyl464/Cooklet-SE" className="btn btn-secondary" role="button">
                    Repository
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div data-aos="flip-up" className="card h-100">
              <h3>BKost</h3>
              <img src={bkostimg} alt="Project 2" className="card-img-top" />
              <div className="card-body d-flex flex-column">
                <p className="card-text mt-auto">
                  BKost adalah platform web yang mempermudah pencarian kos atau tempat tinggal sesuai kebutuhan. Dengan fitur lokasi, rentang harga, dan fasilitas lengkap, BKost membantu pengguna menemukan hunian ideal secara cepat dan
                  efisien.
                </p>
                <div className="justify-content-center mt-auto">
                  <a href="https://github.com/kyl464/Bkost" className="btn btn-secondary" role="button">
                    Repository
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mx-auto p-2">
          <div data-aos="flip-up" className="card">
            <div className="card-body">
              <h5 className="card-title">More Project</h5>
              <p className="card-text">Check my github profile for more project repositories.</p>
              <a href="https://github.com/kyl464" className="btn btn-secondary" role="button">
                Github Profile{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

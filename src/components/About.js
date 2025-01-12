import React from "react";

const About = () => {
  return (
    <section data-aos-offset="300" className="abtme-color text-light" id="about">
      <div className="container-fluid">
        <h1 data-aos="fade-down" className="text-center mb-4">
          About Me
        </h1>
      </div>
      <div className="container text-center">
        <div className="row align-items-center">
          <div data-aos="fade-down" className="col">
            <p>
              I am currently a Computer Science student at BINUS University, driven by a deep passion for programming. Since a young age, I have been fascinated by technology and how it shapes the world around us. This curiosity naturally
              led me to pursue a degree in Computer Science, where I’ve been able to sharpen my skills in a wide variety of programming languages and frameworks. My journey in coding has been fueled by a desire to continuously learn and
              challenge myself with new technologies. Among my primary interests is web development, a field I find particularly exciting because of its rapid evolution.
            </p>
          </div>
          <div data-aos="fade-up" className="col">
            <p>
              The web is an ever-changing platform, with new tools and standards emerging frequently, which provides endless opportunities for exploration. I enjoy working on projects that push the boundaries of interactivity and
              creativity, and I’m always eager to learn the latest trends in web design and development. I’ve completed several projects throughout my studies, one of which is "Cooklet," a web application that allows users to search for
              recipes based on ingredients they already have at home. Another project I’m currently working on is "BKos," a platform designed to help people find housing options, including boarding houses, apartments, and more.
            </p>
          </div>
          <div data-aos="fade-down" className="col">
            <p>
              As I look toward the future, my goal is to expand my expertise in languages such as Golang, Swift, Ruby, and Kotlin, which are gaining popularity in the programming community. These languages offer exciting possibilities for
              future development. After graduation, I aspire to work at leading tech companies like Google, Microsoft, Apple, or Meta, where I can contribute to cutting-edge innovations and be part of teams that shape the future of
              technology. I’m confident that my dedication and passion for coding will lead me to exciting opportunities in this ever-evolving industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
